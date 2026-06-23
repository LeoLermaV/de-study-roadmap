#!/usr/bin/env python3
"""
Scrapes the roadmap.sh Data Analyst roadmap and produces a structured .md file.
Fetches from the official GitHub repo (nilbuild/developer-roadmap).
"""

import json
import os
import re
import sys
import time
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError
from collections import defaultdict

REPO = "https://raw.githubusercontent.com/nilbuild/developer-roadmap/master"
JSON_URL = f"{REPO}/src/data/roadmaps/data-analyst/data-analyst.json"
CONTENT_LIST_API = "https://api.github.com/repos/nilbuild/developer-roadmap/contents/src/data/roadmaps/data-analyst/content"


def fetch(url, retries=3):
    for attempt in range(retries):
        try:
            req = Request(url, headers={"User-Agent": "roadmap-scraper"})
            with urlopen(req, timeout=15) as resp:
                return resp.read().decode("utf-8")
        except (HTTPError, URLError, OSError) as e:
            if attempt < retries - 1:
                time.sleep(1)
                continue
            print(f"  [WARN] Failed to fetch {url}: {e}", file=sys.stderr)
            return None


def fetch_content_map():
    data = fetch(CONTENT_LIST_API)
    if not data:
        return {}
    try:
        entries = json.loads(data)
    except json.JSONDecodeError:
        return {}
    content = {}
    for entry in entries:
        if entry["type"] == "file" and entry["name"].endswith(".md"):
            m = re.match(r"^.+?@([^.]+)\.md$", entry["name"])
            if m:
                content[m.group(1)] = entry["download_url"]
    return content


def fetch_topic_content(node_id, content_map):
    url = content_map.get(node_id)
    if not url:
        return None
    return fetch(url)


def clean_content(text):
    if not text:
        return text
    text = re.sub(r'\[@\w+@(.+?)\]', r'[\1]', text)
    text = re.sub(r'@\w+@', '', text)
    return text


def position_parent(subtopic_node, topic_nodes):
    """Find the best topic parent for a subtopic by position proximity."""
    sx = subtopic_node["position"]["x"]
    sy = subtopic_node["position"]["y"]
    best = None
    best_dist = float("inf")

    for tn in topic_nodes:
        tx = tn["position"]["x"]
        ty = tn["position"]["y"]
        dy = sy - ty
        if dy < -80:
            continue
        dx = abs(sx - tx)
        dist = dx * 0.5 + max(0, dy)
        if dist < best_dist:
            best_dist = dist
            best = tn["id"]
    return best


def generate_md(output_path):
    print("Fetching roadmap JSON...")
    raw = fetch(JSON_URL)
    if not raw:
        print("ERROR: Could not fetch", file=sys.stderr)
        sys.exit(1)

    data = json.loads(raw)
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    node_map = {n["id"]: n for n in nodes}

    print("Fetching content files listing...")
    content_map = fetch_content_map()
    print(f"  {len(content_map)} content files available")

    content_types = {"topic", "subtopic"}
    all_topic_nodes = [n for n in nodes if n["type"] == "topic" and n.get("position")]
    all_subtopic_nodes = [n for n in nodes if n["type"] == "subtopic" and n.get("position")]

    def y_pos(nid):
        return node_map.get(nid, {}).get("position", {}).get("y", 0)

    def x_pos(nid):
        return node_map.get(nid, {}).get("position", {}).get("x", 0)

    # Build section groupings
    sections = [n for n in nodes if n["type"] == "section"]

    section_labels = {}
    label_nodes = [n for n in nodes
                   if n["type"] in ("paragraph", "label") and n.get("position")]

    for sec in sections:
        sx, sy = sec["position"]["x"], sec["position"]["y"]
        sw = sec.get("style", {}).get("width", sec.get("width", 200))
        sh = sec.get("style", {}).get("height", sec.get("height", 200))
        best_label = ""
        best_dist = 1000
        for ln in label_nodes:
            lx, ly = ln["position"]["x"], ln["position"]["y"]
            label = ln["data"].get("label", "").strip()
            if not label or "roadmap.sh" in label.lower():
                continue
            if sx <= lx <= sx + sw and sy - 40 <= ly <= sy + sh:
                dist = abs(ly - sy)
                if dist < best_dist:
                    best_dist = dist
                    best_label = label
        if best_label:
            section_labels[sec["id"]] = best_label

    section_topics = {}
    for sec in sections:
        sx, sy = sec["position"]["x"], sec["position"]["y"]
        sw = sec.get("style", {}).get("width", sec.get("width", 200))
        sh = sec.get("style", {}).get("height", sec.get("height", 200))
        contained = []
        for cn in all_topic_nodes:
            tx, ty = cn["position"]["x"], cn["position"]["y"]
            if sx <= tx <= sx + sw and sy <= ty <= sy + sh:
                contained.append(cn["id"])
        if contained:
            contained.sort(key=y_pos)
            section_topics[sec["id"]] = contained

    section_order = sorted(sections, key=lambda s: y_pos(s["id"]))

    # Assign subtopics to topics by position
    topic_subtopics = defaultdict(list)
    used_subtopics = set()
    for sn in all_subtopic_nodes:
        parent = position_parent(sn, all_topic_nodes)
        if parent:
            topic_subtopics[parent].append(sn["id"])
            used_subtopics.add(sn["id"])

    # Sort subtopics by Y position
    for tid in topic_subtopics:
        topic_subtopics[tid].sort(key=y_pos)

    # Sort topics by Y position
    all_topic_nodes.sort(key=lambda n: y_pos(n["id"]))

    # Build output
    lines = []
    lines.append("# Data Analyst Roadmap")
    lines.append("")
    lines.append("> Scraped from [roadmap.sh/data-analyst](https://roadmap.sh/data-analyst). Content sourced from the [developer-roadmap](https://github.com/kamranahmedse/developer-roadmap) repository.")
    lines.append("")

    lines.append("## Topics")
    lines.append("")

    processed = set()

    def get_content_text(nid):
        text = fetch_topic_content(nid, content_map)
        if not text:
            oid = node_map.get(nid, {}).get("data", {}).get("oldId")
            if oid:
                text = fetch_topic_content(oid, content_map)
        return clean_content(text) if text else None

    def write_content(text):
        if not text or not text.strip():
            return
        for para in text.strip().split("\n\n"):
            para = para.strip()
            if not para or para.startswith("# "):
                continue
            lines.append(para)
            lines.append("")

    def write_topic(tid, heading):
        if tid in processed:
            return
        processed.add(tid)
        n = node_map[tid]
        title = n["data"].get("label", "Untitled")

        lines.append(f"{heading} {title}")
        lines.append("")
        write_content(get_content_text(tid))

        for stid in topic_subtopics.get(tid, []):
            if stid in processed:
                continue
            processed.add(stid)
            sn = node_map[stid]
            stitle = sn["data"].get("label", "Untitled")
            sub_h = heading + "#"
            lines.append(f"{sub_h} {stitle}")
            lines.append("")
            write_content(get_content_text(stid))

    # Process topics within sections
    for sec in section_order:
        label = section_labels.get(sec["id"])
        contained = section_topics.get(sec["id"], [])
        if label and contained:
            lines.append(f"## {label}")
            lines.append("")
            for tid in contained:
                write_topic(tid, "###")

    # Remaining topics not in sections
    remaining = [n["id"] for n in all_topic_nodes if n["id"] not in processed]
    for tid in remaining:
        write_topic(tid, "###")

    result = "\n".join(lines)
    result = re.sub(r"\n{3,}", "\n\n", result)
    result = result.strip() + "\n"

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(result)

    orphan_subtopics = len(all_subtopic_nodes) - len(used_subtopics)
    print(f"\nDone! Wrote {output_path}")
    print(f"  - {len(all_topic_nodes)} topics")
    print(f"  - {len(all_subtopic_nodes)} subtopics ({orphan_subtopics} orphans)")
    print(f"  - {len(section_labels)} sections found")
    print(f"  - {len(content_map)} content files available")
    print(f"  - ~{len(result)} chars")


if __name__ == "__main__":
    output = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                          "roadmap-sh-data-analyst.md")
    if len(sys.argv) > 1:
        output = sys.argv[1]
    generate_md(output)
