# Phase 3 — Modern Data Stack: Best Free Learning Resources

> Researched and compiled June 2026. All links verified as of this date.
> Every resource listed is **free** (free tier or completely free) and comes from official, well-reviewed sources.

---

## 1. Data Modeling (Kimball / Star Schema)

Dimensional modeling fundamentals: fact tables vs. dimension tables, star schema design, slowly changing dimensions (SCD Types 0–7), grain declaration, conformed dimensions, and the enterprise data warehouse bus architecture.

---

### 1.1 Kimball Group — Dimensional Modeling Techniques (Official Glossary)

- **URL:** <https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/>
- **Type:** Reference documentation / article
- **Why it is good:** The canonical, "official" Kimball Group reference cataloguing 80+ dimensional modeling concepts with precise definitions, organised into categories (Fundamental Concepts, Fact Table Techniques, Dimension Table Techniques, SCD Types 0–7, Advanced Patterns). Directly drawn from *The Data Warehouse Toolkit, Third Edition*. The site also offers a downloadable PDF version.
- **Approx. time:** 2–3 hours to work through the full glossary

---

### 1.2 Kimball Group — Design Tips Archive (180+ Articles)

- **URL:** <https://www.kimballgroup.com/category/design-tips/>
- **Type:** Articles (archive)
- **Why it is good:** Over 180 practical, bite-sized design tips written by Ralph Kimball, Margy Ross, Joy Mundy, and Bob Becker spanning 20+ years (1995–2015). Covers dimensional modeling fundamentals, fact/dimension table core concepts, ETL and data quality, technical architecture, and BI applications. Each tip is ~5-minute read tackling a single real-world scenario.
- **Approx. time:** ~10–15 min per tip; pick categories relevant to your needs (e.g. Dimensional Modeling Fundamentals, Slowly Changing Dimensions)

---

### 1.3 Kimball Group — Enterprise Data Warehouse Bus Architecture

- **URL:** <https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/enterprise-data-warehouse-bus-architecture/>
- **Type:** Article
- **Why it is good:** Explains the bus architecture approach that decomposes DW/BI planning by business processes and integrates them through standardised conformed dimensions. Essential for understanding how multiple star schemas fit together in an enterprise data warehouse.
- **Approx. time:** 20–30 minutes

---

### 1.4 dbt Labs — How We Structure Our dbt Projects (Best Practices Guide)

- **URL:** <https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview>
- **Type:** Documentation / step-by-step guide
- **Why it is good:** dbt Labs' official guide on layering transformations (staging → intermediate → marts) — a practical, modern application of dimensional modeling principles in the ELT paradigm. Walks through a full example project (Jaffle Shop) with complete file trees, naming conventions, and rationale for every design decision. Shows how star-schema thinking maps to dbt project structure.
- **Approx. time:** 1.5–2 hours (multi-part guide)

---

## 2. Snowflake Fundamentals

Architecture (virtual warehouses, storage, services layer), creating databases/schemas/tables, loading data (COPY INTO, stages), Time Travel, zero-copy cloning, user and role basics.

---

### 2.1 Snowflake University — Hands-On Essentials (Badges 1–6)

- **URL:** <https://learn.snowflake.com/> (navigate to Learning Tracks → Hands-On Badges)
- **Type:** Interactive course (self-paced, on-demand)
- **Why it is good:** Snowflake's flagship free training program (branded "Snowflake University"). Six progressive workshop badges — Badge 1 (Data Warehousing) through Badge 6 (Data Science) — provide hands-on labs in a real Snowflake trial environment. Badge 1 covers the fundamentals: architecture, warehouses, databases, schemas, tables, loading data, and queries. You earn a verifiable badge upon completion.
- **Approx. time:** 3–5 hours per badge; Badge 1 (Data Warehousing Workshop) is ~3 hours

---

### 2.2 Snowflake University — Level Up: First Concepts Series

- **URL:** <https://learn.snowflake.com/> (navigate to Learning Tracks → Level Up: First Concepts Series)
- **Type:** Interactive micro-courses (self-paced, on-demand)
- **Why it is good:** A curated series of short, focused courses covering Snowflake fundamentals in bite-sized chunks: Key Concepts & Architecture, Data Loading, Resource Monitors, Ecosystem, Account Assurances, Container Hierarchy, Backup & Recovery, plus a final exam. Ideal for quickly getting up to speed on specific topics without committing to a full badge workshop.
- **Approx. time:** ~10–20 minutes per course

---

### 2.3 Snowflake Documentation — Getting Started Guides

- **URL:** <https://docs.snowflake.com/en/user-guide-getting-started>
- **Type:** Documentation / tutorial
- **Why it is good:** Official Snowflake documentation covering the complete beginner workflow: signing up for a trial, understanding the architecture, creating warehouses/databases/tables, loading data with COPY INTO, querying, and using Time Travel and zero-copy cloning. The definitive reference for syntax and concepts.
- **Approx. time:** 2–3 hours to work through the getting-started path

---

### 2.4 Snowflake Developer Guides & Quickstarts

- **URL:** <https://developers.snowflake.com/>
- **Type:** Interactive tutorials / quickstarts
- **Why it is good:** A searchable catalogue of 630+ Snowflake quickstarts, certified solutions, and reference architectures contributed by Snowflake experts and partners. Includes hands-on tutorials for data engineering, loading data, building pipelines, and working with notebooks — all runnable with a free trial account.
- **Approx. time:** Varies (15 minutes to 2 hours per quickstart)

---

## 3. dbt — Transformations as Code

dbt project structure, writing models (SELECT → table/view), testing (generic + custom), materialisations (table, view, incremental, ephemeral), dbt Cloud vs. dbt Core, Jinja templating, and documentation.

---

### 3.1 dbt Quickstart for Snowflake

- **URL:** <https://docs.getdbt.com/quickstarts>
- **Type:** Interactive tutorial
- **Why it is good:** The fastest way to get hands-on with dbt end-to-end. Spins up a dbt Cloud/platform account with a sample project (Jaffle Shop), connects to Snowflake/BigQuery/Redshift, walks through writing models, running tests, generating documentation, and deploying a scheduled job. Opinionated step-by-step instructions perfect for first-timers.
- **Approx. time:** 1–2 hours

---

### 3.2 dbt Documentation — Building Models, Tests, and Documentation

- **URL:** <https://docs.getdbt.com/docs/build/models>
- **Type:** Documentation
- **Why it is good:** The authoritative reference for every dbt concept: models (SQL and Python), tests (generic out-of-the-box + custom singular tests), materialisations (table, view, incremental, ephemeral), snapshots (SCD Type 2), seeds, Jinja macros, sources, exposures, and more. Thorough, well-structured, and kept up to date by dbt Labs.
- **Approx. time:** Ongoing reference; core model/test concepts ~2–3 hours

---

### 3.3 dbt Best Practices Guide (Full Series)

- **URL:** <https://docs.getdbt.com/best-practices>
- **Type:** Documentation / guide series
- **Why it is good:** A multi-part guide from dbt Labs covering: project structure (staging/marts), coding style conventions, materialisation best practices, writing custom generic tests, CI/CD workflows, and dbt Mesh patterns. Translates industry experience into concrete, copyable patterns that form the standard for professional dbt development.
- **Approx. time:** 3–4 hours for the full series

---

### 3.4 dbt Learn (Free Self-Paced Courses)

- **URL:** <https://learn.getdbt.com/>
- **Type:** Course (self-paced, on-demand)
- **Why it is good:** dbt Labs' own learning platform with free courses covering dbt fundamentals, advanced materialisations, Jinja, and analytics engineering principles. The courses are the same material used in paid instructor-led training, made available on-demand at no cost. Widely recommended in the dbt community.
- **Approx. time:** dbt Fundamentals ~4 hours

---

## 4. Tableau (Secondary Viz Tool)

Connecting to data, building worksheets/dashboards/stories, calculations (including LOD expressions), Tableau Public as a free platform. Focus: learning Tableau when you already know Power BI.

---

### 4.1 Tableau Public (Free Platform)

- **URL:** <https://public.tableau.com/>
- **Type:** Interactive platform
- **Why it is good:** The completely free version of Tableau Desktop that saves visualisations to the public web. Full-featured for learning: connect to flat files (Excel, CSV), build worksheets and dashboards, write calculations and LOD expressions, and publish to your public profile. Also serves as an inspiration gallery — explore thousands of published dashboards to reverse-engineer techniques. Ideal for Power BI users to cross-train at zero cost.
- **Approx. time:** Ongoing (platform itself is free forever)

---

### 4.2 Tableau Free Training Videos

- **URL:** <https://www.tableau.com/learn/training>
- **Type:** Video series
- **Why it is good:** Official Tableau-produced short video series covering both Tableau Cloud/Server (11 videos, 31 min) and Tableau Desktop (4 videos, 26 min). Covers connecting to data, the workspace, maps, calculated fields, LOD expressions, dashboards, and parameters. Direct from the vendor and kept up to date.
- **Approx. time:** ~1 hour total across both series

---

### 4.3 Tableau Help — Level of Detail (LOD) Expressions Reference

- **URL:** <https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod.htm>
- **Type:** Documentation / tutorial
- **Why it is good:** The definitive reference for LOD expressions (`FIXED`, `INCLUDE`, `EXCLUDE`) — the Tableau equivalent of DAX measures. Essential reading for a Power BI user learning Tableau, as LOD expressions are the biggest conceptual shift. Includes step-by-step examples, use cases, and a comparison table across the three LOD types.
- **Approx. time:** 1–2 hours

---

### 4.4 Tableau eLearning (Free Tier)

- **URL:** <https://www.tableau.com/learn/training/elearning>
- **Type:** Course (self-paced)
- **Why it is good:** Tableau's structured eLearning platform with guided learning paths. The free tier includes introductory content on connecting to data, building views, creating dashboards, and basic calculations. Progress tracking lets you pick up where you left off.
- **Approx. time:** ~3–5 hours for introductory path

---

## Quick-Start Path (Recommended Order)

If you are tackling all four topics, here is a suggested sequence:

| Order | Topic | Start Here | Why This Order |
|-------|-------|------------|----------------|
| 1 | Data Modeling | Kimball Dimensional Modeling Techniques | Foundational theory — everything else depends on understanding star schemas |
| 2 | Snowflake | Hands-On Essentials Badge 1 | The data platform that hosts the warehouse; learn how data is stored and queried |
| 3 | dbt | dbt Quickstart for Snowflake | The transformation layer — ties modeling theory and the data platform together in code |
| 4 | Tableau | Tableau Public + Free Training Videos | The visualisation layer — explore and present the clean modelled data you built |

---

*All URLs verified via live fetch, June 2026. Note that vendor learning platforms (Snowflake University, dbt Learn, Tableau eLearning) may require free account registration to access course content.*
