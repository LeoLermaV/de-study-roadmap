# Phase 5: Data Engineering Foundations — Learning Resources

> Curated free resources for a data analyst building data engineering fundamentals.
> Each resource has been verified as live and accessible (June 2026).

---

## 1. ETL vs ELT Concepts

### 1.1 Fivetran — ETL vs. ELT: Why a Post-Load Process Wins Every Time
- **URL:** https://www.fivetran.com/blog/etl-vs-elt-why-a-post-load-process-wins-every-time
- **Type:** Article
- **Why it's good:** Crystal-clear breakdown of the ETL-to-ELT shift — explains compute cost, transformation speed, raw data accessibility, and analyst autonomy with concrete reasoning.
- **Approx. time:** 10 minutes

### 1.2 Fivetran — A Beginner's Guide to ELT Data Pipelines
- **URL:** https://www.fivetran.com/blog/a-beginner-guide-to-elt-data-pipelines
- **Type:** Article
- **Why it's good:** Walkthrough of building your first ELT pipeline, covering why ELT over ETL, how to choose a warehouse and integration tool, and key pipeline concepts like idempotency and incremental sync.
- **Approx. time:** 12 minutes

### 1.3 AWS — What is ETL (Extract Transform Load)?
- **URL:** https://aws.amazon.com/what-is/etl/
- **Type:** Documentation / Article
- **Why it's good:** Comprehensive vendor-neutral-ish overview of ETL history and mechanics, including extraction methods, transformation types, loading strategies, and a clear ETL-vs-ELT comparison.
- **Approx. time:** 15 minutes

### 1.4 IBM — What is ETL (Extract, Transform, Load)?
- **URL:** https://www.ibm.com/topics/etl
- **Type:** Article
- **Why it's good:** Concise yet thorough — covers the ETL/ELT distinction, batch vs streaming, use cases, and modern tooling, making it a great complement to the Fivetran and AWS resources.
- **Approx. time:** 10 minutes

---

## 2. Data Pipeline Fundamentals

### 2.1 AWS — What is a Data Pipeline?
- **URL:** https://aws.amazon.com/what-is/data-pipeline/
- **Type:** Documentation / Article
- **Why it's good:** Explains pipeline stages (extract → transform → load), dependencies, stream vs batch processing, and how pipelines differ from ETL pipelines — all with helpful diagrams.
- **Approx. time:** 12 minutes

### 2.2 Astronomer — Get Started with Apache Airflow (Hands-On Tutorial)
- **URL:** https://www.astronomer.io/docs/learn/get-started-with-airflow
- **Type:** Interactive tutorial
- **Why it's good:** Build and run a real ETL pipeline with zero local setup in 5 minutes — teaches DAGs, tasks, operators, dependencies, asset-aware scheduling, and human-in-the-loop workflows through hands-on practice.
- **Approx. time:** 45–60 minutes

### 2.3 Astronomer — Intro to Airflow Concepts
- **URL:** https://www.astronomer.io/docs/learn/intro-to-airflow
- **Type:** Documentation
- **Why it's good:** Concise reference page explaining Airflow's core concepts (DAGs, tasks, operators, scheduling, executors) — perfect quick-reference companion to the tutorial above.
- **Approx. time:** 15 minutes

### 2.4 Fivetran — What is a Data Pipeline?
- **URL:** https://www.fivetran.com/blog/what-is-a-data-pipeline
- **Type:** Article
- **Why it's good:** Straightforward introduction covering pipeline components, architecture patterns, batch vs real-time, and the build vs buy decision — written for data practitioners, not engineers.
- **Approx. time:** 10 minutes

---

## 3. Apache Airflow Basics

### 3.1 Apache Airflow — Official Tutorial
- **URL:** https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html
- **Type:** Documentation (with code)
- **Why it's good:** The canonical starting point — walks through defining a DAG with Python, setting task dependencies, understanding operators, scheduling, and using the Airflow UI.
- **Approx. time:** 30–45 minutes

### 3.2 Astronomer Academy — Airflow 101 Learning Path (Free)
- **URL:** https://academy.astronomer.io/path/airflow-101
- **Type:** Video course (11 modules)
- **Why it's good:** Structured, beginner-focused video path covering orchestration concepts, DAGs, scheduling, sensors, XComs, the CLI, connections/variables, and debugging — total ~3 hours, all free.
- **Approx. time:** ~3 hours (11 modules, 5–27 min each)

### 3.3 Astronomer — Get Started with Apache Airflow (Browser-Based Hands-On)
- **URL:** https://www.astronomer.io/docs/learn/get-started-with-airflow
- **Type:** Interactive tutorial
- **Why it's good:** Zero-install entry point — sign up for a free Astro trial, build and run your first DAG in the browser IDE in under 5 minutes, then extend it with asset-aware scheduling and data quality checks.
- **Approx. time:** 45–60 minutes

### 3.4 Apache Airflow — Quick Start (Run Airflow Locally)
- **URL:** https://airflow.apache.org/docs/apache-airflow/stable/start.html
- **Type:** Documentation
- **Why it's good:** The official 5-minute guide to running Airflow standalone with `airflow standalone` and writing your first DAG — best for learners who want to run Airflow on their own machine.
- **Approx. time:** 15 minutes

---

## 4. Cloud Overview for Data (Azure & AWS)

### 4.1 Microsoft Learn — Azure Fundamentals: Describe Cloud Concepts
- **URL:** https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/
- **Type:** Free course (3 modules)
- **Why it's good:** Part 1 of the official AZ-900 prep — covers cloud computing models, the shared responsibility model, and cloud service types (IaaS/PaaS/SaaS) with interactive exercises.
- **Approx. time:** ~2 hours

### 4.2 Microsoft Learn — Azure Fundamentals: Describe Azure Architecture and Services
- **URL:** https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/
- **Type:** Free course (5 modules)
- **Why it's good:** Part 2 of AZ-900 prep — covers Azure regions, compute services (VMs, App Service, AKS), networking, storage (Blob, Data Lake), and identity/security — directly relevant to data workloads.
- **Approx. time:** ~3 hours

### 4.3 Microsoft Learn — Azure Data Fundamentals: Explore Data Warehouse & Analytics
- **URL:** https://learn.microsoft.com/en-us/training/paths/azure-data-fundamentals-explore-data-warehouse-analytics/
- **Type:** Free course (3 modules)
- **Why it's good:** Zeroes in on Azure's data platform — modern data warehousing, Synapse Analytics, Data Factory, real-time analytics (Event Hubs, Stream Analytics), and Power BI for visualization.
- **Approx. time:** ~2 hours

### 4.4 AWS — Cloud Practitioner Essentials (AWS Skill Builder)
- **URL:** https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/
- **Type:** Free digital course
- **Why it's good:** The official foundational AWS course covering S3, EC2, RDS, Redshift, Athena, Glue, billing, and the shared responsibility model — prepares you for the CLF-C02 certification exam.
- **Approx. time:** ~6 hours (self-paced)

---

## 5. Docker Basics

### 5.1 Docker — Official Get Started Guide
- **URL:** https://docs.docker.com/get-started/
- **Type:** Interactive tutorial
- **Why it's good:** The definitive starting point — walks through installing Docker, running your first container, building images with Dockerfiles, and using Docker Compose for multi-container apps with real code examples.
- **Approx. time:** 1–2 hours

### 5.2 Docker — Compose Getting Started (Quickstart)
- **URL:** https://docs.docker.com/compose/gettingstarted/
- **Type:** Interactive tutorial
- **Why it's good:** Step-by-step build of a Python+Redis app with Docker Compose — covers health checks, Compose Watch for live updates, named volumes for persistence, and multi-file Compose projects.
- **Approx. time:** 30–45 minutes

### 5.3 freeCodeCamp — The Docker Handbook (Blog / Written Tutorial)
- **URL:** https://www.freecodecamp.org/news/the-docker-handbook/
- **Type:** Written tutorial (book-length)
- **Why it's good:** Comprehensive, beginner-friendly handbook covering containers vs VMs, all basic commands (`run`, `stop`, `ps`, `logs`, `exec`), images, Dockerfiles, volumes, networking, multi-container apps, and Docker Compose — with a full project.
- **Approx. time:** 3–5 hours (self-paced)

### 5.4 freeCodeCamp — Docker Tutorial for Beginners (YouTube)
- **URL:** https://www.youtube.com/watch?v=pTFZFxd4hOI
- **Type:** Video
- **Why it's good:** Popular 2-hour crash course by Programming with Mosh on the freeCodeCamp channel — covers containers, images, Dockerfile creation, Docker Compose, and deploying a full-stack app, all at a gentle, beginner-friendly pace.
- **Approx. time:** 2 hours

---

## Summary Table

| # | Topic | Total Resources | Total Est. Time |
|---|-------|----------------|-----------------|
| 1 | ETL vs ELT Concepts | 4 | ~47 min |
| 2 | Data Pipeline Fundamentals | 4 | ~1 h 37 min |
| 3 | Apache Airflow Basics | 4 | ~4 h 30 min |
| 4 | Cloud Overview (Azure & AWS) | 4 | ~13 hours |
| 5 | Docker Basics | 4 | ~5 h 15 min |
|   | **Totals** | **20 resources** | **~25 hours** |

> **Note:** Times are estimates for consuming the content. Hands-on practice (especially for Airflow, Docker, and Cloud) will add significantly more time — and that's where the real learning happens.

---

## Suggested Learning Order

For a data analyst transitioning into DE concepts:

1. **Start with Docker (Topic 5)** — It underpins everything else. Use Docker to run PostgreSQL and Airflow locally.
2. **Then ETL vs ELT (Topic 1)** — Understand the paradigm shift before building pipelines.
3. **Cloud Overview (Topic 4)** — Get the lay of the land. Focus on AWS first (Cloud Practitioner Essentials), then Azure data services.
4. **Data Pipeline Fundamentals (Topic 2)** — Learn how the pieces fit together.
5. **Apache Airflow (Topic 3)** — Put it all into practice by building and scheduling real pipelines.

---

*Last verified: June 2026. All URLs confirmed live. Some resource pages may require free registration (Astronomer Academy, AWS Skill Builder, Microsoft Learn).*
