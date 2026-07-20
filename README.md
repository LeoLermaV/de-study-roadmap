# Data Analytics Study Roadmap

**→ [leolermav.github.io/de-study-roadmap](https://leolermav.github.io/de-study-roadmap/)**

A self-paced study roadmap for moving into data analytics, aimed at the entry-level
New Zealand market. 38 topics across 7 phases, roughly 292 hours of study, with
progress tracking built in.

The tool stack it teaches is chosen to match what NZ employers actually run — Power BI,
Excel, SQL Server and Snowflake, Python — rather than what is most popular online.

## What it does

Each topic answers three questions rather than just linking out:

- **Why it matters** — the concept explained in prose, not a bullet summary.
- **What to learn** — the specific things to walk away knowing.
- **Where it fits** — why this topic sits at this point in the sequence.

Every topic then carries hand-picked resources, each marked free or paid and tagged
*must-read* or *skim*, so it is clear what to prioritise when time is short.

Progress is tracked per topic — not started, in progress, or done — alongside freeform
notes. Everything is stored in the browser's `localStorage`, so no account is needed and
nothing leaves the machine by default.

### Syncing across devices

Progress can optionally sync through a **private GitHub Gist**, which makes it possible
to study on a laptop and pick up on a phone. Add a GitHub personal access token with the
`gist` scope in Settings, then save or load on demand. The token stays in the browser
and is only ever sent to the GitHub API.

## The phases

| # | Phase | Focus |
|---|---|---|
| 1 | Data Concepts & Mindset | How analysts think, data quality, ethics, environment setup |
| 2 | Core Analyst Skills | SQL, Excel, Power BI and DAX, statistics, storytelling |
| 3 | Programming & Data Handling | Python, pandas, data cleaning, APIs, Git |
| 4 | Modern Data Stack | Dimensional modelling, Snowflake, dbt, Tableau |
| 5 | Professional Skills | Requirements gathering, ambiguity, stakeholder management |
| 6 | Data Engineering Foundations | ETL vs ELT, pipelines, Airflow, cloud, Docker |
| 7 | Portfolio Capstone | An end-to-end BI project to show employers |

Phases 2, 3, 4 and 7 each end in a hands-on project, so there is something concrete for a
portfolio well before the capstone.

## Running locally

Requires Node 22 or newer.

```bash
npm install
npm run dev
```

| Command | Does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Typecheck and build to `dist/` |
| `npm run lint` | Lint |
| `npm run preview` | Serve the production build |

The dev server binds to all interfaces, so it can be opened from a phone on the same
network. If `certs/localhost.pem` and `certs/localhost-key.pem` exist — generated with
[mkcert](https://github.com/FiloSottile/mkcert) — it serves over HTTPS; otherwise it
falls back to HTTP. `npm run ca` publishes the local mkcert root certificate on port 8080
so a phone can be set up to trust it.

## Editing the roadmap

All content lives in one file, [`src/data/roadmap.ts`](src/data/roadmap.ts) — phases,
topics and resources are plain data built with the `t()` and `r()` helpers at the top.
Adding or rewriting a topic means editing that file and nothing else.

Prose fields render through a deliberately small markdown subset: `**bold**`, `` `code` ``
and links. Other markdown syntax will not render.

Topic `id` values are the keys progress is stored against, so renaming one orphans any
saved status and notes for that topic.

## Built with

React 19, TypeScript, Vite and Tailwind CSS v4. The visual language is documented in
[`DESIGN.md`](DESIGN.md) and implemented as theme tokens in `src/index.css`, with light
and dark modes. Deployed to GitHub Pages automatically on every push to `main`.
