# Synthesis — What Actually Matters for a Data Analyst in NZ

**Date:** 22 June 2026
**Sources:** roadmap.sh, datastacktv/data-engineer-roadmap, 60+ NZ job listings, 50+ AU job listings
**Target:** Hybrid Data Analyst roadmap with Data Engineering extension — NZ/Auckland focus

---

## Cross-Reference: Skills in ALL Sources

These skills appear in **roadmap.sh, datastacktv, AND NZ/AU job listings**:

| Skill | All Sources | Priority |
|-------|:----------:|----------|
| **SQL** | YES | **Critical** — learn first, learn deep |
| **Python** | YES | **Critical** — growing baseline requirement |
| **Excel** | YES | **High** — Power Query + DAX |
| **Data modeling** | Partial | **High** — Kimball, star schema |
| **Statistics** | Partial | **Medium** — hypothesis testing, distributions |
| **Power BI** | Only in job listings | **Critical** — #1 BI tool in NZ |

---

## Skills Unique to NZ Jobs (Missing from Roadmaps)

### Technical
- **DAX / Power Query** — job listings name these explicitly, roadmaps just say "Excel"
- **Snowflake + dbt** — the dominant modern NZ stack, barely covered in Analyst roadmaps
- **Coalesce** — NZ-specific Snowflake transformation tool (Momentum Consulting)

### Soft / Context
- **Te Tiriti o Waitangi / Māori data sovereignty** — required in ~40% of NZ listings (government)
- **Stakeholder communication** — #1 soft skill in ALL job listings, zero coverage in roadmaps
- **Data storytelling** — growing requirement, no roadmap covers this
- **Working with ambiguity** — heavily emphasized in NZ government roles
- **Business requirements gathering** — expected at mid-senior level

---

## Skills in Roadmaps That NZ Jobs Don't Ask For (Data Analyst Roles)

| Roadmap Skill | NZ Job Demand | Recommendation |
|---|---|---|
| Spark, Hadoop, MapReduce | Near zero in DA listings | Skip entirely (DE-only) |
| Kafka, streaming | Near zero | Skip entirely (DE-only) |
| Kubernetes, Docker | ~1-2 listings | Skip (DE-only) |
| Terraform, IaC | Zero in DA listings | Skip entirely (DE-only) |
| Java, Scala, Go | Zero in DA listings | Skip entirely |
| Deep Learning, Neural Nets | Zero | Skip entirely |
| NoSQL (MongoDB, Redis, etc.) | Near zero | Skip for now |
| Machine Learning (deep) | ~8% (aspirational, not required) | Light intro only |

---

## What NZ Jobs Actually Want — Ranked

### Tier 1: Must Have (85%+ of listings)
1. **SQL** — querying, aggregations, window functions, optimization
2. **Communication / stakeholder skills** — translating data for business

### Tier 2: Should Have (45-65% of listings)
3. **Power BI** — dashboards, DAX measures, data modeling in PBI
4. **Excel (advanced)** — Power Query, pivot tables, VLOOKUP/XLOOKUP

### Tier 3: Nice to Have (25-35% of listings)
5. **Python** — Pandas, automation, light pipelines
6. **Data visualization** — storytelling, not just charting
7. **Problem-solving / analytical thinking**

### Tier 4: Differentiators (12-25% of listings)
8. **Data modeling** — Kimball, star schema, dimensional
9. **Snowflake** — modern cloud DW
10. **dbt** — transformations as code
11. **Tableau** — secondary viz tool

### Tier 5: NZ Context (specific to gov roles)
12. **Te Tiriti / Māori data sovereignty awareness**
13. **Working with ambiguity / sound judgement**

---

## Recommended Roadmap Structure (for NZ Data Analyst)

Based on what employers actually ask for + what makes a well-rounded analyst:

### Phase 0: Data Fundamentals & Concepts
The conceptual foundation. Before learning tools, understand the full data lifecycle and the role of an analyst.

1. What is Data Analytics?
2. The Full Data Lifecycle (Ingestion → Storage → Transformation → Analysis → Serving)
3. Types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)
4. Key Data Concepts (structured vs unstructured, OLTP vs OLAP, batch vs real-time)
5. The Role of a Data Analyst & Career Paths in NZ
6. Data Quality Fundamentals (completeness, accuracy, timeliness, consistency)

### Phase 1: Core Skills (NZ Job Market Essentials)
The skills NZ employers actually test for. Learn in this order.

7. SQL Basics
8. Advanced SQL (window functions, CTEs, optimization)
9. Excel / Google Sheets Advanced (Power Query, pivot tables, VLOOKUP/XLOOKUP)
10. Data Visualization with Power BI (dashboards, DAX measures, data modeling in PBI)
11. Data Storytelling & Stakeholder Communication
12. Statistics Foundations (descriptive stats, hypothesis testing, distributions)

### Phase 2: Programming & Data Handling
Moving beyond spreadsheets — programmatic data work.

13. Python for Data Analysis (Pandas, NumPy)
14. Data Cleaning & Transformation
15. Working with APIs & Web Data
16. Git & Version Control

### Phase 3: Modern Data Stack
The tools that appear in forward-looking NZ roles.

17. Data Modeling (Kimball, star schema, dimensional)
18. Snowflake Fundamentals
19. dbt (Data Build Tool) — transformations as code
20. Tableau (as secondary viz tool)

### Phase 4: Professional Skills (NZ Context)
The soft skills and context that differentiate you in the NZ market.

21. Business Requirements Gathering
22. Te Tiriti & Māori Data Sovereignty (NZ context)
23. Working with Ambiguity & Sound Judgement
24. Stakeholder Engagement Patterns

### Phase 5: Data Engineering Foundations (Career Extension)
For when you're ready to go beyond analysis into pipeline building.

25. ETL vs ELT Concepts
26. Data Pipeline Fundamentals
27. Apache Airflow Basics (workflow orchestration)
28. Cloud Overview (Azure/AWS for data)
29. Docker Basics

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **No ML/AI deep dive** | Only ~8% of NZ DA listings ask for it; it's aspirational, not required |
| **No Hadoop/Spark/Kafka** | Near-zero demand in NZ DA roles; kept as Phase 5 awareness only |
| **Te Tiriti included** | ~40% of NZ listings are government; this is a real differentiator in NZ |
| **Snowflake + dbt emphasized** | The modern NZ data stack; appearing in more listings every year |
| **Power BI over Tableau** | Power BI appears in ~65% of NZ listings vs Tableau ~15% |
| **Data storytelling as a topic** | Jobs increasingly ask for "narrative" and "storytelling," not just charts |
| **Phase 0: concepts before tools** | User requested a concepts section at the start covering the full data lifecycle |
