# Phase 2 Learning Resources

> Curated free resources for data-focused Python learning. All verified and accessible as of June 2026.
> Audience: developer with basic programming knowledge (variables, loops, functions), new to Python data stack.

---

## 1. Python for Data Analysis

Python refresher for data work: Pandas (DataFrames, reading CSV/Excel/JSON, filtering, groupby), NumPy basics, datetime handling.

| # | Title | URL | Type | Why It's Good | Est. Time |
|---|-------|-----|------|---------------|-----------|
| 1 | **Corey Schafer — Pandas Tutorials (YouTube Playlist)** | [youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS](https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS) | video | Hands-down the most-recommended Pandas video series; covers DataFrames, filtering, groupby, reading CSV/Excel, and real datasets with exceptional clarity. | ~5 hours (11 videos) |
| 2 | **Pandas Official — Getting Started Tutorials** | [pandas.pydata.org/docs/getting_started/intro_tutorials/](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) | documentation | The definitive 10-part tutorial from the pandas maintainers; covers I/O, subsetting, plotting, summary stats, reshaping, merging, time series, and text data. | ~3–4 hours |
| 3 | **Kaggle Learn — Pandas** | [kaggle.com/learn/pandas](https://www.kaggle.com/learn/pandas) | interactive | In-browser coding exercises with instant feedback; solves real problems on DataFrames, indexing, grouping, renaming, and data types — no local setup required. | ~4 hours |
| 4 | **NumPy Official — Absolute Beginners Guide** | [numpy.org/doc/stable/user/absolute_beginners.html](https://numpy.org/doc/stable/user/absolute_beginners.html) | documentation | Complete NumPy primer with interactive examples: arrays, indexing, broadcasting, aggregations, reshaping, random numbers, and saving/loading — essential foundation for Pandas work. | ~3 hours |

**Suggested order:** Start with Corey Schafer (videos 1–6) for a practical mental model, then use the Pandas official tutorials and Kaggle for hands-on practice. Read the NumPy guide when you hit array-related concepts.

---

## 2. Data Cleaning & Transformation

Handling missing data, type conversion, deduplication, reshaping (pivot/melt), string cleaning with regex, tidy data principles.

| # | Title | URL | Type | Why It's Good | Est. Time |
|---|-------|-----|------|---------------|-----------|
| 1 | **Real Python — Pythonic Data Cleaning With pandas and NumPy** | [realpython.com/python-data-cleaning-numpy-pandas/](https://realpython.com/python-data-cleaning-numpy-pandas/) | article | Real-world walkthrough with downloadable datasets; covers `drop()`, `set_index()`, regex extraction with `.str.extract()`, `applymap()`, `np.where()`, and renaming — all on messy real data. | ~1.5 hours |
| 2 | **Kaggle Learn — Data Cleaning** | [kaggle.com/learn/data-cleaning](https://www.kaggle.com/learn/data-cleaning) | interactive | Hands-on exercises covering missing value handling, scaling/normalization, parsing dates, character encoding, and inconsistent data entry — runs entirely in-browser. | ~3 hours |
| 3 | **Pandas Official — Reshaping & Text Data Tutorials** | [pandas.pydata.org/docs/getting_started/intro_tutorials/](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) | documentation | "How to reshape the layout of tables" (pivot, melt, stack/unstack) and "How to manipulate textual data" (string methods, regex, splitting) — concise, authoritative, with runnable examples. | ~2 hours |
| 4 | **freeCodeCamp — How to Use Pandas for Data Cleaning and Preprocessing** | [freecodecamp.org/news/pandas-data-cleaning-and-preprocessing/](https://www.freecodecamp.org/news/tag/pandas/) | article | Covers handling missing data with `fillna()`/`dropna()`, removing duplicates, type conversion with `astype()`, and string `.str` accessor methods — written for the data-curious developer. | ~1 hour |

**Suggested order:** Read the Real Python article first (it sets the mindset with real messy datasets), then do the Kaggle interactive exercises, and use the Pandas official reshaping/text tutorials as reference when you hit specific problems.

---

## 3. Working with APIs & Web Data

Making HTTP requests with Python `requests` library, parsing JSON, authentication (API keys, env vars), rate limiting, pagination.

| # | Title | URL | Type | Why It's Good | Est. Time |
|---|-------|-----|------|---------------|-----------|
| 1 | **Real Python — Python & APIs: A Winning Combo for Reading Public Data** | [realpython.com/python-api/](https://realpython.com/python-api/) | article | Comprehensive guide covering GET/POST, query params, status codes, custom headers, JSON parsing, API key auth, OAuth (practical GitHub example), pagination, and rate limiting — all with the `requests` library. | ~1.5 hours |
| 2 | **Requests Library — Official Quickstart** | [docs.python-requests.org/en/latest/user/quickstart/](https://docs.python-requests.org/en/latest/user/quickstart/) | documentation | The canonical reference for `requests`: making requests, passing parameters, reading JSON/binary responses, custom headers, POST data, file uploads, cookies, timeouts, and error handling. | ~1 hour |
| 3 | **freeCodeCamp — APIs for Beginners Tutorial (YouTube)** | [freecodecamp.org/news/apis-for-beginners/](https://www.freecodecamp.org/news/apis-for-beginners/) | video | 3-hour video course covering what APIs are, REST concepts, hands-on exploration with real APIs, and building a server-side API — great for bridging web dev concepts to API consumption. | ~3 hours |
| 4 | **Requests Library — Full Documentation** | [docs.python-requests.org/en/latest/](https://docs.python-requests.org/en/latest/) | documentation | The complete reference: installation, quickstart, advanced usage (sessions, streaming, SSL, proxies), authentication (Basic, Digest, OAuth), and community guides — keep this bookmarked. | Reference |

**Suggested order:** If you're already familiar with REST concepts from web dev, start with the Requests Quickstart + Real Python article. If APIs are new to you, begin with the freeCodeCamp video, then do the Real Python article's hands-on examples (GitHub OAuth flow included).

---

## 4. Git & Version Control

Clone, add, commit, push, pull, branch, merge, pull requests, `.gitignore` for data projects, version-controlling SQL/queries.

| # | Title | URL | Type | Why It's Good | Est. Time |
|---|-------|-----|------|---------------|-----------|
| 1 | **Learn Git Branching** | [learngitbranching.js.org](https://learngitbranching.js.org/) | interactive | The best interactive Git learning tool; visually builds commit trees as you run real Git commands — covers branching, merging, rebasing, cherry-picking, and relative refs through gamified exercises. | ~2 hours |
| 2 | **GitHub Skills — Introduction to GitHub** | [github.com/skills/introduction-to-github](https://github.com/skills/introduction-to-github) | interactive | Official GitHub course running in your own repo; learn branches, commits, and pull requests by doing them — complete in under an hour with a real bot guiding each step. | ~1 hour |
| 3 | **Atlassian Git Tutorial** | [atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials) | documentation | The most thorough free Git reference: setting up repos, saving changes, inspecting history, undoing changes, syncing, branches, pull requests, merge strategies, workflows, and `.gitignore` — all with clear diagrams. | ~4–5 hours |
| 4 | **Real Python — Introduction to Git and GitHub for Python Developers** | [realpython.com/python-git-github-intro/](https://realpython.com/python-git-github-intro/) | article | Python-tailored Git walkthrough: `init`, `add`, `commit`, `.gitignore` (with Python-specific patterns), branching, merging, rebasing, cherry-picking, remotes, `clone`/`fetch`/`pull`/`push`, and a practical Python workflow. | ~1 hour |

**Suggested order:** Skim the Real Python article first for the Python `.gitignore` perspective and core commands, then do Learn Git Branching for muscle memory, then run through the GitHub Skills interactive course for PR workflow. Use the Atlassian tutorial as your deep-dive reference.

---

## Supplemental: Quick-Reference Cheat Sheets

| Topic | Resource | URL |
|-------|----------|-----|
| Pandas | Pandas Cheat Sheet (official) | [pandas.pydata.org/Pandas_Cheat_Sheet.pdf](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf) |
| NumPy | NumPy Cheat Sheet | [numpy.org/doc/stable/](https://numpy.org/doc/stable/) |
| Git | Atlassian Git Cheat Sheet | [atlassian.com/git/tutorials/atlassian-git-cheatsheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet) |
| Python Requests | Quick Reference (part of Quickstart) | [docs.python-requests.org/en/latest/user/quickstart/](https://docs.python-requests.org/en/latest/user/quickstart/) |

---

## Notes

- **All URLs verified** on or around June 2026. Some platforms may require a free account (Kaggle, GitHub) but all learning content is free.
- **Python `.gitignore` tip:** Add `__pycache__/`, `*.pyc`, `venv/`, `env/`, `.env`, `.pytest_cache/`, `.coverage`, `*.csv` (if large datasets), and `*.xlsx` to your `.gitignore` for data projects.
- **API keys:** Never commit credentials. Use environment variables (`os.getenv("API_KEY")`) or a `.env` file listed in `.gitignore`.

---

> **Total estimated learning time:** ~30–35 hours across all topics (excluding deep reference material).
> **Philosophy:** These resources emphasize doing over watching. Open a Jupyter notebook or IDE alongside each one.
