# Metrics and KPIs: numbers that do not lie

**Builds on:** SQL Basics, Advanced SQL, Bias in Data · **Helps with:** Power BI (DAX measures), Business Requirements Gathering

## Why this is worth reading

Most analyst work ends in a number that someone will act on. A loosely defined metric, such as "active customers" or "conversion rate", gets calculated three different ways by three teams, and the numbers never reconcile. This topic is about defining numbers precisely and recognising the classic ways they mislead. It is also the most direct follow-on from your SQL: every trap here is one `GROUP BY` away.

## Key ideas

- **Define every metric fully:** numerator, denominator, time window, filters, and grain. Is conversion rate orders divided by sessions or by unique visitors? Per day or per month? Including staff test accounts? Write the definition down next to the number.
- **Counts vs rates:** the region with the most complaints may simply have the most customers. Divide by the right base before comparing.
- **Percent vs percentage points:** a rate rising from 10% to 12% is a rise of 2 percentage points and also a 20% relative increase. Both statements are true; say which one you mean.
- **Base rates:** "sales of product X tripled" could mean 2 units became 6. Always ask for the starting number.
- **Average of averages:** averaging each store's average order value gives every store equal weight, whether it had 10 orders or 10,000. The true overall figure is total revenue divided by total orders. In SQL terms, `AVG(store_avg)` over a grouped subquery is not the same as `SUM(revenue) / COUNT(order_id)` over the order-level rows.
- **Simpson's paradox:** a pattern that holds in every subgroup can reverse when the groups are combined, because the groups differ in size or mix. The classic case is UC Berkeley's 1973 graduate admissions: men were admitted at a higher rate overall, yet most departments admitted women at an equal or higher rate, because women applied more often to the most competitive departments. Breaking results down by subgroup, the habit from the Bias topic, is the defence.
- **Leading vs lagging indicators:** revenue and churn are lagging; they report what already happened. Trial sign-ups, support tickets, or website visits can be leading; they hint at what is coming.
- **Vanity metrics:** numbers that only ever go up and do not inform a decision, such as total registered users since launch.
- **Goodhart's law:** "when a measure becomes a target, it ceases to be a good measure." A call centre judged on average call length starts rushing customers off the phone. When you design a KPI, ask how someone could hit it without achieving the real goal.

## How it connects

Every DAX measure you write in Power BI is a metric definition in code. The habits here (state the denominator, check the grain, avoid averaging averages) are what make those measures trustworthy. The requirements-gathering topic later asks you to agree definitions with stakeholders; this is the vocabulary for that conversation.

## Notice it in the wild

Whenever you see a percentage, ask "percent of what?" and "compared with when?"

## Reading

**Start here** (about 35 minutes)

1. **Read · 12 min.** [All about averages](https://plus.maths.org/all-about-averages) (*Plus* magazine, University of Cambridge). Mean vs median and Simpson's paradox, using arithmetic only.
2. **Read · 15 min.** [Are You Tracking the Right Metrics?](https://www.productcompass.pm/p/are-you-tracking-the-right-metrics) (Ben Yoskovitz, co-author of *Lean Analytics*). What makes a good metric, vanity vs actionable metrics, and leading vs lagging indicators. Skim the case studies.
3. **Read · 6 min.** [Underperforming on performance](https://timharford.com/2014/07/underperforming-on-performance/) (Tim Harford). Goodhart's law in action, through ambulance response targets and surgeons, although the article never uses the name.

**If you want more**

- **Listen · 9 min.** [Simpson's Paradox](https://www.bbc.co.uk/programmes/p03sm8vw) (BBC *More or Less*). The paradox explained by ear, using research-funding data.
- **Listen · short episode.** [Goodhart's Law](https://dataskeptic.com/blog/episodes/2016/goodharts-law) (*Data Skeptic* mini episode). Gamed targets, audio only.
- **Read · 15 min.** [Simpson's Paradox: a cautionary tale in advanced analytics](https://significancemagazine.com/simpson-s-paradox-a-cautionary-tale-in-advanced-analytics/) (*Significance* magazine). Business examples. Start with the final one, where a change in product mix distorts how a pricing project's results look.
- **Read · 11 min.** [Advice for policy professionals using statistics and analysis](https://analysisfunction.civilservice.gov.uk/policy-store/advice-for-policy-professionals-using-statistics/) (UK Government Analysis Function). Read section 2 "Understand what you are measuring", section 5 "Making fair comparisons" and section 9 "Putting things in context".
