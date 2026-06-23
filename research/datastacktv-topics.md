# datastacktv/data-engineer-roadmap — Full Topic Structure

**Source:** `github.com/datastacktv/data-engineer-roadmap` (12.7k stars)
**Version:** 2021
**From:** `text/roadmap.md` and `text/extras.md`

---

## Main Roadmap (18 Categories)

### 1. CS Fundamentals *(foundational)*
- Terminal, DSA, APIs, REST, Structured vs unstructured data
- Linux (CLI, Vim, Shell scripting, Cronjobs)
- How computers and the internet work
- Git / Version control
- Math & statistics basics

### 2. Learn a Programming Language
- **Python** [personal recommendation]
- Java [general]
- Scala, Go
- Clean code, OOP vs functional, design patterns

### 3. Testing
- Unit testing, Integration testing, Functional testing

### 4. Database Fundamentals
- SQL, Normalisation, ACID, CAP theorem, OLTP vs OLAP
- Horizontal vs vertical scaling
- Dimensional modeling

### 5. Relational Databases
- MySQL, PostgreSQL [general], MariaDB, Amazon Aurora

### 6. Non-Relational Databases
- **Document:** MongoDB, Elasticsearch, CouchDB, CosmosDB
- **Wide column:** Cassandra, HBase, Bigtable
- **Graph:** Neo4j, Neptune
- **Key-value:** Redis, Memcached, DynamoDB

### 7. Data Warehouses
- Snowflake [general], Redshift [general], BigQuery [personal]
- Presto, Hive, Impala, Synapse, ClickHouse

### 8. Object Storage
- AWS S3 [general], Azure Blob, GCS, Apache Ozone

### 9. Cluster Computing Fundamentals
- Hadoop, HDFS, MapReduce
- Lambda & Kappa architectures
- Managed: EMR, Dataproc, Azure Data Lake

### 10. Data Processing
- **Batch:** Pig, Arrow, dbt [personal]
- **Hybrid:** Spark [general], Beam [personal], Flink [general], NiFi
- **Streaming:** Kafka [personal], Storm, Samza, Kinesis

### 11. Messaging
- RabbitMQ, ActiveMQ, SNS/SQS, PubSub, Service Bus

### 12. Workflow Scheduling
- Airflow [personal], Composer, Oozie, Luigi

### 13. Monitoring & Observability
- Prometheus, Datadog, Sentry, Monte Carlo, Datafold, Soda, StatsD

### 14. Networking
- HTTP/HTTPS, TCP, SSH, IP, DNS
- Firewalls, VPN, VPC

### 15. Infrastructure as Code
- **Containers:** Docker [personal], LXC
- **Orchestration:** Kubernetes, Swarm, Mesos, GKE
- **Provisioning:** Terraform [personal], Pulumi, AWS CDK

### 16. CI/CD
- GitHub Actions [general], Jenkins [general]

### 17. Identity & Access Management
- Active Directory, Azure AD

### 18. Data Security & Privacy
- Legal compliance, Encryption, Key management, Data governance

---

## Nice to Have — Extras

### Visualise Data
- Tableau, Looker, Grafana, Jupyter, Power BI

### Machine Learning Fundamentals
- Terminology (supervised/unsupervised, classification/regression)
- scikit-learn, TensorFlow, Keras, PyTorch

### MLOps
- TFX, Kubeflow, MLflow, SageMaker, GCP AI Platform

---

## Progression Order

| Order | Category | Layer |
|-------|----------|-------|
| 1-3 | CS, Language, Testing | Foundational |
| 4-8 | DBs, Warehouses, Storage | Core Data Stack |
| 9-10 | Cluster Computing, Processing | Data Processing |
| 11-13 | Messaging, Scheduling, Monitoring | Pipeline Ops |
| 14-16 | Networking, IaC, CI/CD | Infrastructure |
| 17-18 | IAM, Security/Privacy | Advanced |

**Recommendation tags:**
- `[personal recommendation]` = author's preferred tool
- `[general recommendation]` = widely adopted
- *(no tag)* = worth knowing

**Total:** 18 main categories + 3 extras, covering ~100+ tools/skills.
