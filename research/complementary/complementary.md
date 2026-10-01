# Complementary reading

This page is for the days when practising feels like too much. Everything here is reading, watching, or listening, and none of it needs a computer open beside you. Nothing on this page counts towards your roadmap progress, so there is no way to fall behind on it.

## How to use this page

- **Pick one item, not one topic.** Each topic has a short "Start here" set, split into pieces of 5–20 minutes, followed by optional extras. One piece is a perfectly good day.
- **Watch and listen count.** Every topic starts with, or includes, a video or audio item for days when reading is tiring.
- **Re-reading counts too.** Each topic lists the roadmap topics it builds on. Going back over those before starting something new is real progress, not repetition.
- **Order is a suggestion.** Topics 1–5 need only what you already know from Phase 0 and SQL. Topics 6 and 7 go more smoothly after topic 2, or after Statistics Foundations.

## At a glance

| # | Topic | Start here | Easiest way in | Re-read first |
|---|-------|-----------|----------------|---------------|
| 1 | [Types of data](#types-of-data) | ~30 min | Watch · 6 min | Dimensions, Measures & Granularity |
| 2 | [Distributions, outliers and robust statistics](#distributions-outliers-and-robust-statistics) | ~40 min | Watch · 11 min | Data Quality |
| 3 | [Metrics and KPIs](#metrics-and-kpis-numbers-that-do-not-lie) | ~35 min | Listen · 9 min | Advanced SQL, Bias in Data |
| 4 | [Choosing and designing charts](#choosing-and-designing-charts) | ~45 min | Watch · 10 min | Accessibility in Data Communication |
| 5 | [Thinking in time series](#thinking-in-time-series) | ~40 min | Watch · 7 min | Advanced SQL (window functions) |
| 6 | [Regression, explained without code](#regression-explained-without-code) | ~55 min | Watch · 12 min | Statistics Foundations, if done |
| 7 | [Machine-learning vocabulary for analysts](#machine-learning-vocabulary-for-analysts) | ~45 min | Watch · 13 min | Topic 6 above |

Every resource is free. Links were checked on 1 October 2026. If a BBC page will not play in New Zealand, search for the episode title in any podcast app: *More or Less* is a free podcast.

---

## Types of data

**Builds on:** Dimensions, Measures & Granularity · **Helps with:** Statistics Foundations, Excel Advanced, Power BI

### Why this is worth reading

Before you choose an average or a chart, you need to know what kind of values a column holds. A column of numbers is not always a number: postcodes, customer IDs, and 1–5 survey ratings look numeric but behave very differently. Knowing the type tells you which calculations mean something, and it explains why Power BI sometimes offers you "Sum of Year".

### Key ideas

- **Nominal:** categories with no order, such as region, product category, or payment method. You can count them and find the most common one (the mode), and that is all.
- **Ordinal:** categories with an order but uneven gaps, such as survey ratings from 1 to 5, education level, or low/medium/high. You can rank them and take a median. Averaging them assumes the gap between 1 and 2 equals the gap between 4 and 5, which nobody promised. Averaged ratings are common in practice; just know you are making that assumption.
- **Interval:** numbers with equal gaps but no true zero, such as temperature in °C or calendar years. Differences make sense; ratios do not. 20°C is not twice as hot as 10°C.
- **Ratio:** numbers with a true zero, such as revenue, age, quantity, or duration. Every calculation works, including "twice as much".
- **Numbers that are really labels:** postcodes, phone numbers, IDs, and years used as categories. Treat them as text. In Power BI, set these columns to **Don't summarize**, or you will get "Sum of Postcode".
- **Discrete vs continuous:** counts (number of orders) vs measurements (weight, time taken). This shapes chart choice: bars for categories and counts, histograms for continuous measurements.
- **Data shapes:** **cross-sectional** data describes many things at one point in time (a customer snapshot). A **time series** describes one thing over many points in time (monthly revenue). **Panel** or longitudinal data describes many things over time (every customer's monthly spend). Panel data is common in NZ government work: Stats NZ's Integrated Data Infrastructure (IDI) links de-identified records about people across agencies and years.
- **Tidy data:** each variable is a column, each observation is a row, and each kind of thing gets its own table. This is the same idea as grain: decide what one row represents. A spreadsheet with one column per month is untidy and needs **Unpivot Columns** in Power Query before you can analyse it.

### How it connects

Nominal and ordinal columns are usually your **dimensions**; interval and ratio columns are usually your **measures**. If the Phase 0 topic on dimensions and measures made sense, this is the next layer of the same idea.

### Notice it in the wild

When a survey result says "average satisfaction 3.8 out of 5", ask what the median and the spread were. Two very different groups of customers can produce the same 3.8.

### Reading

**Start here** (about 30 minutes)

1. **Watch · 6 min.** [Types of Data: Nominal, Ordinal, Interval/Ratio](https://www.youtube.com/watch?v=hZxnzfnt5v8) (Dr Nic's Maths and Stats). A calm walk through the four levels, with a worked survey example near the end.
2. **Read · 7 min.** [What is the difference between ordinal, interval and ratio variables? Why should I care?](https://www.graphpad.com/support/faq/what-is-the-difference-between-ordinal-interval-and-ratio-variables-why-should-i-care/) (GraphPad). Includes a table of which calculations are valid at each level, and the temperature example. Ignore the product prompts.
3. **Read · 10 min.** *Introduction to Modern Statistics*, [Chapter 1](https://openintro-ims.netlify.app/data-hello), sections 1.2.1 "Observations, variables, and data matrices" and 1.2.2 "Types of variables". The data matrix (one row per case) is your SQL grain under another name. The chapter separates nominal from ordinal but not interval from ratio; the GraphPad page covers that.
4. **Read · 6 min.** [Tidy data for efficiency, reproducibility, and collaboration](https://openscapes.org/blog/2020-10-12-tidy-data/) (Openscapes). An illustrated, code-free explanation of tidy data.

**If you want more**

- **Read · 7 min.** [Common data types: cross-sectional, time series, panel](https://matilda.fss.uu.nl/articles/common-data-types.html) (Utrecht University). Read the introduction, section 1 "Various data types" and section 7 "Takeaway"; skip sections 2–6, which are about research modelling.
- **Read · 6 min.** [Make it a rectangle](https://kbroman.org/dataorg/pages/rectangle.html) (Karl Broman, *Data Organization in Spreadsheets*). Tidy-data rules applied directly to Excel, a useful warm-up for Excel Advanced. The rest of the short tutorial is optional.
- **Read · 12 min.** [Tidy Data](https://www.jstatsoft.org/article/view/v059i10) (Hadley Wickham, *Journal of Statistical Software*, 2014). The original definition. Read sections 1–2, and section 3 if you are enjoying it; skip section 4 onwards, which uses R code. The wide tables are easier on a laptop than a phone.
- **Watch · 4 min.** [Data Basics: Observations, Variable, and Data Matrices](https://www.youtube.com/watch?v=Mjif8PTgzUs) (OpenIntro). The video companion to the chapter above.

---

## Distributions, outliers and robust statistics

**Builds on:** Data Quality, SQL aggregation · **Helps with:** Statistics Foundations, Data Cleaning & Transformation, Project: Customer Churn Analysis

### Why this is worth reading

A single summary number hides the shape of the data. Two support teams can have the same average response time while one is consistent and the other is a mix of instant replies and week-long waits. Looking at the distribution first tells you which summary to trust and which values deserve a second look.

### Key ideas

- **A distribution is the pattern of values:** where they cluster, how widely they spread, and whether they lean to one side. A histogram shows it at a glance.
- **Skew:** a long tail stretching one way. Incomes, house prices, order values, and waiting times are almost always right-skewed: most values are modest and a few are very large.
- **Mean vs median:** the mean is pulled toward the tail and the median is not. That is why NZ house prices and household incomes are usually reported as medians.
- **Spread:** the **range** (maximum minus minimum) depends on just two values, so one extreme distorts it. The **standard deviation** is the typical distance from the mean and is also sensitive to extremes. The **interquartile range (IQR)** covers the middle 50% of values, from the 25th to the 75th percentile, and barely moves when one value is wild.
- **Box plot:** a picture of the median, the IQR (the box), and any points far outside it. By convention, points more than 1.5 × IQR beyond the edges of the box are flagged as potential outliers.
- **z-score:** how many standard deviations a value sits from the mean. Values beyond about ±3 are unusual when the data are roughly bell-shaped. On skewed data z-scores mislead, so prefer the IQR rule there.
- **An outlier is a question, not a verdict:** a $40,000 order might be a typo for $400.00, or it might be your largest corporate client. Investigate first, then decide whether to fix it (a confirmed error), exclude it (and say so), or keep it and report it separately. Write down what you did and why.
- **Robust statistics:** the median and IQR are called robust because one wild value barely moves them. Prefer them when data are skewed or not yet cleaned.
- **Kurtosis:** describes how heavy the tails of a distribution are. You will rarely need it; recognising the word is enough.

### How it connects

In SQL, `AVG()` is one keyword away, while a median usually needs `PERCENTILE_CONT(0.5)`. That convenience is one reason averages get reported by default even when a median would be more honest. In the churn project you will draw histograms of monthly charges; this topic tells you what to look for in them.

### Notice it in the wild

When a news story quotes an "average" salary or house price, check whether it is a mean or a median. On skewed data the two can differ by tens of thousands of dollars.

### Reading

**Start here** (about 40 minutes)

1. **Watch · 11 min.** [Mean, Median, and Mode](https://www.youtube.com/watch?v=kn83BA7cRNM) (Crash Course Statistics #3). Animated and conversational, including how each average can mislead.
2. **Read · 20 min.** *Introduction to Modern Statistics*, [Chapter 5: Exploring numerical data](https://openintro-ims.netlify.app/explore-numerical). Read 5.3 "Histograms and shape", 5.5 "Box plots, quartiles, and the median" and 5.6 "Robust statistics". Skip 5.4 (the variance formulas) and 5.7 onwards.
3. **Look · 2 min · NZ.** [Mean and median annual household gross income in New Zealand](https://figure.nz/chart/QRwTnCDzvn0Do1D6) (Figure.NZ, from Stats NZ data). In the year to June 2025 the mean was $139,111 and the median $109,556: skew in a single chart.
4. **Read · 5 min.** [Detection of Outliers](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35h.htm) (NIST Engineering Statistics Handbook). Read the introduction and the "Labeling, Accomodation, Identification" paragraph on telling bad data from real events. Skip the formal tests.

**If you want more**

- **Watch · 11 min.** [The Shape of Data: Distributions](https://www.youtube.com/watch?v=bPFNxD3Yg6U) (Crash Course Statistics #7). Histograms, skew, box plots, and a two-peaked example.
- **Read · 10 min.** [Guidelines for Removing and Handling Outliers in Data](https://statisticsbyjim.com/basics/remove-outliers/) (Statistics By Jim). Sorts outliers into three causes (data entry or measurement errors, sampling problems, and natural variation) and what to do about each.
- **Read · 25 min, two sittings.** *The Effect*, [Chapter 3: Describing Variables](https://theeffectbook.net/ch-DescribingVariables.html#the-distribution) (Nick Huntington-Klein, free online). Read 3.3 "The Distribution" and 3.4 "Summarizing the Distribution"; skip 3.5. Plain, witty writing with no code.
- **Watch · 3 min.** [Summarizing and Graphing Numerical Data](https://www.youtube.com/watch?v=Xm0PPtci3JE) (OpenIntro). The video companion to Chapter 5.

---

## Metrics and KPIs: numbers that do not lie

**Builds on:** SQL Basics, Advanced SQL, Bias in Data · **Helps with:** Power BI (DAX measures), Business Requirements Gathering

### Why this is worth reading

Most analyst work ends in a number that someone will act on. A loosely defined metric, such as "active customers" or "conversion rate", gets calculated three different ways by three teams, and the numbers never reconcile. This topic is about defining numbers precisely and recognising the classic ways they mislead. It is also the most direct follow-on from your SQL: every trap here is one `GROUP BY` away.

### Key ideas

- **Define every metric fully:** numerator, denominator, time window, filters, and grain. Is conversion rate orders divided by sessions or by unique visitors? Per day or per month? Including staff test accounts? Write the definition down next to the number.
- **Counts vs rates:** the region with the most complaints may simply have the most customers. Divide by the right base before comparing.
- **Percent vs percentage points:** a rate rising from 10% to 12% is a rise of 2 percentage points and also a 20% relative increase. Both statements are true; say which one you mean.
- **Base rates:** "sales of product X tripled" could mean 2 units became 6. Always ask for the starting number.
- **Average of averages:** averaging each store's average order value gives every store equal weight, whether it had 10 orders or 10,000. The true overall figure is total revenue divided by total orders. In SQL terms, `AVG(store_avg)` over a grouped subquery is not the same as `SUM(revenue) / COUNT(order_id)` over the order-level rows.
- **Simpson's paradox:** a pattern that holds in every subgroup can reverse when the groups are combined, because the groups differ in size or mix. The classic case is UC Berkeley's 1973 graduate admissions: men were admitted at a higher rate overall, yet most departments admitted women at an equal or higher rate, because women applied more often to the most competitive departments. Breaking results down by subgroup, the habit from the Bias topic, is the defence.
- **Leading vs lagging indicators:** revenue and churn are lagging; they report what already happened. Trial sign-ups, support tickets, or website visits can be leading; they hint at what is coming.
- **Vanity metrics:** numbers that only ever go up and do not inform a decision, such as total registered users since launch.
- **Goodhart's law:** "when a measure becomes a target, it ceases to be a good measure." A call centre judged on average call length starts rushing customers off the phone. When you design a KPI, ask how someone could hit it without achieving the real goal.

### How it connects

Every DAX measure you write in Power BI is a metric definition in code. The habits here (state the denominator, check the grain, avoid averaging averages) are what make those measures trustworthy. The requirements-gathering topic later asks you to agree definitions with stakeholders; this is the vocabulary for that conversation.

### Notice it in the wild

Whenever you see a percentage, ask "percent of what?" and "compared with when?"

### Reading

**Start here** (about 35 minutes)

1. **Read · 12 min.** [All about averages](https://plus.maths.org/all-about-averages) (*Plus* magazine, University of Cambridge). Mean vs median and Simpson's paradox, using arithmetic only.
2. **Read · 15 min.** [Are You Tracking the Right Metrics?](https://www.productcompass.pm/p/are-you-tracking-the-right-metrics) (Ben Yoskovitz, co-author of *Lean Analytics*). What makes a good metric, vanity vs actionable metrics, and leading vs lagging indicators. Skim the case studies.
3. **Read · 6 min.** [Underperforming on performance](https://timharford.com/2014/07/underperforming-on-performance/) (Tim Harford). Goodhart's law in action, through ambulance response targets and surgeons, although the article never uses the name.

**If you want more**

- **Listen · 9 min.** [Simpson's Paradox](https://www.bbc.co.uk/programmes/p03sm8vw) (BBC *More or Less*). The paradox explained by ear, using research-funding data.
- **Listen · short episode.** [Goodhart's Law](https://dataskeptic.com/blog/episodes/2016/goodharts-law) (*Data Skeptic* mini episode). Gamed targets, audio only.
- **Read · 15 min.** [Simpson's Paradox: a cautionary tale in advanced analytics](https://significancemagazine.com/simpson-s-paradox-a-cautionary-tale-in-advanced-analytics/) (*Significance* magazine). Business examples. Start with the final one, where a change in product mix distorts how a pricing project's results look.
- **Read · 11 min.** [Advice for policy professionals using statistics and analysis](https://analysisfunction.civilservice.gov.uk/policy-store/advice-for-policy-professionals-using-statistics/) (UK Government Analysis Function). Read section 2 "Understand what you are measuring", section 5 "Making fair comparisons" and section 9 "Putting things in context".

---

## Choosing and designing charts

**Builds on:** Accessibility in Data Communication · **Helps with:** Power BI — Dashboards & DAX, Data Storytelling & Communication, Project: Retail Sales Deep-Dive

### Why this is worth reading

Power BI will draw any chart you click. Choosing the one that answers the stakeholder's question, and removing everything that does not help, is the difference between a dashboard people use and one they glance at once. Reading this before Power BI means your first dashboards are designed rather than left on the defaults.

### Key ideas

- **Start from the question, not the chart:** comparison calls for a bar chart, change over time for a line chart, part-to-whole for a stacked bar (or occasionally a pie), distribution for a histogram or box plot, and relationship for a scatter plot.
- **Bar charts start at zero:** a bar's length is its value, so a cut-off axis exaggerates differences. Line charts may start elsewhere because they show change rather than size.
- **Pie and donut charts:** people judge angles and areas poorly. Use them only for two or three parts of a whole; otherwise a sorted bar chart is easier to read.
- **Stacked charts:** only the bottom segment and the total are easy to compare, because the middle segments float. If the middle segments matter, use side-by-side bars or small multiples instead.
- **Dual axes:** two y-axes let you make almost any two lines look related by rescaling one of them. Prefer two charts stacked one above the other on the same time axis.
- **Small multiples:** the same small chart repeated for each category, such as one line chart per region, is often clearer than one crowded chart with ten coloured lines. Many Power BI visuals have a small multiples option.
- **Declutter:** remove heavy gridlines, borders, 3D effects, and legends you can replace with labels placed directly on the data. Sort bars by value rather than alphabetically, unless the categories have a natural order such as months.
- **Put the takeaway in the title:** "Auckland drove 60% of Q3 growth" tells the reader what to see; "Sales by region" makes them work it out.
- **Colour with purpose:** grey for context and one accent colour for what matters. Never rely on colour alone (see the Accessibility topic).

### How it connects

The Data Storytelling topic gives you the narrative structure; this topic gives you the visual vocabulary for each slide or dashboard page. The Retail Sales project asks for two or three charts: use it to practise one deliberate choice per chart.

### Notice it in the wild

When you see a chart in the news, cover the title and ask what question it answers. Then check whether a bar chart's axis starts at zero.

### Reading

**Start here** (about 45 minutes)

1. **Watch · 10 min.** [Charts Are Like Pasta](https://www.youtube.com/watch?v=hEWY6kkBdpo) (Crash Course Statistics #5). Matching chart types to kinds of data, and how charts can misinform.
2. **Read · 15 min.** [A friendly guide to choosing a chart type](https://www.datawrapper.de/blog/chart-types-guide) (Lisa Charlotte Muth, Datawrapper). Read "Showing developments over time", "Showing shares", "Showing absolute numbers" and "Showing correlations"; skip flows and geographical patterns.
3. **Read · 12 min.** [The principle of proportional ink](https://clauswilke.com/dataviz/proportional-ink.html) (Claus Wilke, *Fundamentals of Data Visualization*, chapter 17). Why bars must start at zero and lines need not.
4. **Keep · 10 min to skim.** The Financial Times [Visual Vocabulary poster](https://github.com/Financial-Times/chart-doctor/blob/main/visual-vocabulary/Visual-vocabulary-en.pdf) (PDF). Charts grouped by the question they answer. It is a large poster, so it is easier on a laptop, or zoom in on a phone.

**If you want more**

- **Watch · 8 min.** [Misleading Axes](https://www.youtube.com/watch?v=9pNWVMxaFuM) (University of Washington, *Calling Bullshit* lecture 6.2). Bar baselines, line charts, and dual axes with real examples. The course name includes a swear word.
- **Watch · 4 min.** [How to spot a misleading graph](https://www.youtube.com/watch?v=E91bGT9BjYk) (TED-Ed).
- **Read · 20 min.** [Data visualisation: charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) (UK Government Analysis Function). Read "Choosing the right chart", "What to supply with charts", "Formatting charts" and "Bar charts"; save "Line charts" for another day. Practical rules you can apply directly in Power BI.
- **Read · 10–15 min per chapter, one per sitting.** More of Claus Wilke's book:
  - [Directory of visualizations](https://clauswilke.com/dataviz/directory-of-visualizations.html) (chapter 5, a 5-minute skim).
  - [Visualizing proportions](https://clauswilke.com/dataviz/visualizing-proportions.html) (chapter 10): pie vs stacked vs side-by-side bars.
  - [Multi-panel figures](https://clauswilke.com/dataviz/multi-panel-figures.html) (chapter 21): read 21.1 on small multiples.
  - [Titles, captions, and tables](https://clauswilke.com/dataviz/figure-titles-captions.html) (chapter 22): read 22.1–22.2. The book puts titles in captions under the figure; on a dashboard, put the takeaway title on the visual itself.
  - [Balance the data and the context](https://clauswilke.com/dataviz/balance-data-context.html) (chapter 23): decluttering.
- **Read · 5 min, last.** [Tips for designing a great Power BI dashboard](https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips) (Microsoft Learn). The bridge into Power BI itself. It agrees with the sources above on avoiding pie charts, donuts, and gauges, but suggests a second axis for mixed scales, which they advise against.

---

## Thinking in time series

**Builds on:** Advanced SQL (window functions) · **Helps with:** Power BI (DAX time intelligence), Python for Data Analysis (dates), Project: E-Commerce Funnel Analysis

### Why this is worth reading

Most dashboards have a date on the x-axis, and most stakeholder questions are about change: are we up, down, or normal for this time of year? Time-based data has patterns of its own, such as seasons, holidays, and inflation, that can make a normal month look alarming or hide a real problem. A handful of concepts lets you read these charts correctly.

### Key ideas

- **The components:** **trend** is the long-run direction. **Seasonality** is a pattern that repeats every year, week, or day. **Cycles** are longer, irregular rises and falls, such as economic booms and slowdowns. **Noise** is the random variation left over.
- **The NZ calendar:** retail peaks in December, and January is quiet for many businesses because of summer holidays. Easter moves between March and April, so comparing this March with last March can mislead. Years differ too: the NZ tax year runs April to March, the government's financial year runs July to June, and many companies choose their own. Check which one a report uses.
- **Moving averages:** averaging each point with its neighbours, such as a 7-day or 12-month rolling average, smooths out noise so the trend shows. You have already written one in SQL: `AVG(x) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)`.
- **Choosing a comparison:** month-on-month mixes trend with seasonality, so December against November says more about Christmas than about performance. Year-on-year (this December against last December) removes most seasonality but reacts slowly and is distorted by moving holidays. Choose deliberately and label which one you used.
- **Seasonal adjustment:** statistical agencies remove the regular seasonal pattern so that movements from one period to the next reflect real change. Stats NZ publishes many series both as actual and as seasonally adjusted figures, and headline numbers such as quarterly GDP growth and the unemployment rate are seasonally adjusted.
- **Index numbers:** a series rescaled so that a chosen base period equals 100. This lets you compare the growth of things measured in different units, such as rents and wages.
- **Nominal vs real:** a 3% rise in sales during a year with 4% inflation is a fall in real terms. To compare money across years, adjust it using the Consumers Price Index (CPI).
- **Do not over-read one point:** a single bad week is usually noise. Look for a run of points, or a break from the usual seasonal pattern, before raising an alarm.

### How it connects

`LAG()` and running totals from Advanced SQL are the building blocks of period-over-period comparisons. In Power BI, DAX time-intelligence functions such as `SAMEPERIODLASTYEAR` do the same job, and this topic tells you when each comparison is the right one.

### Notice it in the wild

When a headline says something "rose 2% last month", check whether it says "seasonally adjusted". If it does not, ask whether that month is always higher.

### Reading

**Start here** (about 40 minutes; split it however suits you)

1. **Watch · 7 min.** Two short official videos: [An introduction to seasonal adjustment](https://www.youtube.com/watch?v=FhL8oTURO7Q) (Central Statistics Office Ireland, 5 min) and [What Is Seasonal Adjustment?](https://www.youtube.com/watch?v=5crZlT5jM7U) (US Bureau of Labor Statistics, 2 min). A good way in on a tired day.
2. **Read · 12 min.** [Time Series Analysis: The Basics](https://www.abs.gov.au/websitedbs/d3310114.nsf/home/time+series+analysis:+the+basics) (Australian Bureau of Statistics). Read from "What is a time series?" to "What is the trend?" and skip the decomposition models after that. Its answer to "why can't we just compare original data from the same period in each year?" explains the Easter and trading-day problems plainly. The ABS marks the page as archived, but it loads in full.
3. **Read · 20 min.** *Forecasting: Principles and Practice* by Hyndman and Athanasopoulos, free online, with mostly Australian examples. Skip every grey code block.
   - [2.3 Time series patterns](https://otexts.com/fpp3/tspatterns.html): read all of it.
   - [3.1 Transformations and adjustments](https://otexts.com/fpp3/transformations.html): read only "Calendar adjustments", "Population adjustments" and "Inflation adjustments".
   - [3.2 Time series components](https://otexts.com/fpp3/components.html): read the explanation of seasonally adjusted data.
   - [3.3 Moving averages](https://otexts.com/fpp3/moving-averages.html): read the opening explanation only.

**If you want more**

- **Read · 15 min · NZ.** [Actual, Seasonally Adjusted and Trend Series: Principles and Uses](https://statsnz.contentdm.oclc.org/digital/api/collection/p20045coll4/id/23/download) (Stats NZ, Khoo and Mohan, 2004; PDF). It uses NZ employment data, with its summer bump in the December quarter. It explains which series to use for which question and why year-on-year comparisons can mislead. Read sections 1–3 and 5–7; skip section 4 on estimation methods.
- **Read · 10 min · NZ.** [Consumers price index resource](https://www.stats.govt.nz/methods/consumers-price-index-resource/) (Stats NZ). Read "What is the CPI?", "Common confusions" and the worked example of building a price index. Some details are dated, such as the reference period, but the concepts are unchanged.
- **Read · 15 min.** [Seasonal adjustment: Concepts and interpretation, 2026](https://www150.statcan.gc.ca/n1/pub/19-20-0001/192000012026001-eng.htm) (Statistics Canada). Read 1.7, 1.10 and 2.1–2.3, which give concrete cases of year-on-year and month-on-month comparisons misleading. Remember that Canada's seasons are the reverse of ours.
- **Try · 5 min · NZ.** The Reserve Bank's [inflation calculator](https://www.rbnz.govt.nz/monetary-policy/about-monetary-policy/inflation-calculator). Put in what something cost in the year you were born and see its value in today's dollars. That is nominal vs real in one step.
- **Listen or read · 4 min.** [What does "seasonally adjusted" mean, anyway?](https://www.marketplace.org/story/2024/06/05/seasonally-adjusted-data-economy) (Marketplace). How the raw and adjusted numbers for the same month can point in opposite directions.
- **Watch · 3 min · NZ.** [What is inflation?](https://www.youtube.com/watch?v=3ItpQHilmgw) (Reserve Bank of New Zealand).

---

## Regression, explained without code

**Builds on:** Statistics Foundations (correlation, hypothesis testing) · **Helps with:** Project: Customer Churn Analysis, Types of Analytics (predictive), Machine-learning vocabulary

### Why this is worth reading

Correlation tells you that two things move together; regression puts a number on how much. It is the most widely used model in business and government analysis. Even if you never build one yourself, you will be asked to read one: in a report, from a data scientist, or in a job interview. The aim here is to understand the output, not the maths.

### Key ideas

- **The line of best fit:** simple linear regression draws the straight line through a scatter plot that keeps the vertical misses as small as possible. The method is called least squares because it minimises the sum of the squared misses.
- **Slope and intercept in plain words:** the slope is how much the outcome changes, on average, for each one-unit change in the input. For example, "each extra year as a customer is associated with $12 more annual spend". The intercept is the predicted value when the input is zero, which is often not a meaningful situation.
- **Residuals:** the gap between each actual point and the line. If the residuals form a pattern, such as a curve or a funnel shape, a straight line is the wrong model.
- **R-squared:** the share of the variation in the outcome that the model accounts for, from 0 to 1. A high R-squared does not prove causation or that the model is right, and a low one does not make a real effect unimportant.
- **Multiple regression and "controlling for":** with several inputs, each coefficient describes the association while holding the other inputs constant. "Controlling for tenure, customers on monthly contracts spend less" means comparing customers who have been with you for a similar length of time.
- **p-values on coefficients:** each coefficient comes with a p-value that tests whether its true value could plausibly be zero. This is the same idea as the hypothesis tests in Statistics Foundations.
- **Confounders:** a third variable that drives both things you are looking at. Ice cream sales and drownings both rise in summer; temperature is the confounder. Regression only controls for the variables you include.
- **Association, not causation:** regression on observational data shows association. Causal claims need an experiment, such as an A/B test, or a carefully designed study.
- **Do not extrapolate:** a line fitted to customers with one to six years of tenure says nothing reliable about customers with twenty.
- **Logistic regression:** used for yes/no outcomes such as churn or stay, default or repay. Instead of a straight line, it predicts a probability between 0 and 1. You will meet it again in the churn project and in machine learning.

### How it connects

Statistics Foundations warns that correlation is not causation; this topic shows how analysts try to get closer to the truth anyway, and where the method stops. In the churn project, the t-test compares two groups; regression is the natural next question: how much does each factor matter once the others are accounted for?

### Notice it in the wild

When a report says "X is linked to Y", ask what else could be driving both.

### Reading

**Start here** (about 55 minutes over three sittings)

1. **Watch · 14 min.** [Linear Regression, Clearly Explained!!!](https://www.youtube.com/watch?v=7ArmBVF2dCs) (StatQuest). Watch from the start to 14:16, which covers fitting a line and R-squared. Stop before the part on p-values and the F-distribution.
2. **Read · 35 min, two sittings.** *Introduction to Modern Statistics*, [Chapter 7: Linear regression with a single predictor](https://openintro-ims.netlify.app/model-slr) (OpenIntro, free online, reads well on a phone).
   - Sitting one: 7.1, on fitting a line, residuals, and correlation.
   - Sitting two: 7.2.1 to 7.2.5, ending with "Extrapolation is treacherous" and "Describing the strength of a fit".
   - Skip 7.2.6 onwards and the exercises.
3. **Read · 7 min.** [Correlation and causation](https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/correlation-and-causation) (Australian Bureau of Statistics). A short official explainer whose ice cream and sunscreen example shows a hidden third factor at work.

**If you want more**

- **Read · 10 min.** [Chapter 8: Linear regression with multiple predictors](https://openintro-ims.netlify.app/model-mlr). Read the introduction and 8.2, "Many predictors in a model", which explains what "holding the others constant" means. Skip 8.3 onwards.
- **Watch · 9 min.** [StatQuest: Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8). The gentlest preview of predicting yes/no outcomes, ahead of the churn project.
- **Read · 12 min.** [Chapter 9: Logistic regression](https://openintro-ims.netlify.app/model-logistic). Read the introduction, 9.1 (a study of discrimination in hiring) and 9.2.
- **Watch · 15 min, for a no-reading day.** Three short videos from the OpenIntro authors that cover the same ground as the chapters: [Line Fitting, Residuals, and Correlation](https://www.youtube.com/watch?v=mPvtZhdPBhQ), [Introduction to Multiple Regression](https://www.youtube.com/watch?v=sQpAuyfEYZg), and [Basic Ideas of Logistic Regression](https://www.youtube.com/watch?v=uYC2eLVSpI8).
- **Watch · 12 min.** [Correlation Doesn't Equal Causation](https://www.youtube.com/watch?v=GtV-VYdNt_g) (Crash Course Statistics #8). Scatter plots, what r and r-squared mean in words, and causation, in one sitting.

---

## Machine-learning vocabulary for analysts

**Builds on:** Regression, explained without code · **Helps with:** Types of Analytics (predictive and prescriptive), Data Ethics & Privacy, Bias in Data, Project: Customer Churn Analysis

### Why this is worth reading

You do not need to build models to be a strong analyst, but job descriptions increasingly mention AI and automation, and you will work alongside people who do build them. Knowing the vocabulary lets you follow the conversation, ask good questions, and catch a model that looks impressive but is not. The goal is literacy, not engineering.

### Key ideas

- **A model is a learned rule:** it finds patterns in past data and applies them to new data. The inputs are **features** (tenure, contract type, monthly charge). The thing being predicted is the **label** or target (churned: yes or no).
- **Supervised learning:** learning from examples where the answer is already known. **Regression** predicts a number, such as next month's sales. **Classification** predicts a category, such as whether a customer will churn.
- **Unsupervised learning:** finding structure without known answers. **Clustering** methods such as k-means group similar customers into segments; an analyst then names and interprets those segments.
- **Training and test data:** a model is fitted on one portion of the data and judged on a portion it has not seen. Judging it on its own training data is like marking your own exam with the answer sheet open.
- **Overfitting:** a model that memorises its training data, noise included, and then performs badly on new data. Simpler models often generalise better.
- **Confusion matrix:** a two-by-two table counting true positives, false positives, true negatives, and false negatives.
- **Accuracy misleads on imbalanced data:** if 5% of customers churn, a model that predicts "nobody churns" is 95% accurate and useless. **Precision** asks: of the customers we flagged, how many really churned? **Recall** asks: of the customers who churned, how many did we flag? Which matters more depends on the cost of each kind of mistake.
- **Where the analyst fits:** preparing and checking the input data, sanity-checking outputs against what you know about the business, and explaining results to stakeholders in plain language. Biased or dirty training data produces biased or wrong predictions, which is why the Data Quality and Bias topics matter here.
- **Generative AI at work:** assistants such as ChatGPT or Microsoft Copilot can help you write and explain SQL or DAX. Never paste personal or confidential data into a tool your organisation has not approved, and check every output before you use it.

### How it connects

Logistic regression from the previous topic is itself a classification model, so you already know one machine-learning method. The churn project's question ("which customers are likely to leave?") is a classification problem; this topic gives you the words to discuss it with a data scientist.

### Notice it in the wild

When a product claims "95% accurate AI", ask: accurate at what, and how common is the thing it is detecting?

### Reading

**Start here** (about 45 minutes)

1. **Watch · 13 min.** [A Gentle Introduction to Machine Learning](https://www.youtube.com/watch?v=Gv9_4yMHFhI) (StatQuest). Hand-drawn, light on jargon, and centred on judging a model with data it has not seen.
2. **Read · 20 min.** Google's *Intro to Machine Learning*: [What is ML?](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml) and [Supervised learning](https://developers.google.com/machine-learning/intro-to-ml/supervised). The course says plainly that it does not teach implementation; it uses diagrams, not maths. Skip the generative AI examples.
3. **Read · 10 min.** [A visual introduction to machine learning, part 1](https://r2d3.us/visual-intro-to-machine-learning-part-1/) (R2D3). A scrolling animation that shows training, testing, and overfitting. Better on a laptop than a phone.

**If you want more**

- **Read · 25 min, two sittings.** Google's *Machine Learning Crash Course*: [Thresholds and the confusion matrix](https://developers.google.com/machine-learning/crash-course/classification/thresholding), then [Accuracy, recall, precision, and related metrics](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall). Focus on the four outcomes and why accuracy misleads on imbalanced data; skip the F1 score, false positive rate, and the ROC/AUC page that follows.
- **Watch · 8 min.** [K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) (StatQuest). The method behind customer segmentation.
- **Read · 10 min.** [A visual introduction to machine learning, part 2](https://r2d3.us/visual-intro-to-machine-learning-part-2/) (R2D3), on the bias–variance trade-off.
- **Listen · 9 min.** [Artificial (not so) Intelligence](https://www.bbc.co.uk/programmes/p0847dp4) (BBC *More or Less*, 2020). Examples of AI learning the wrong lesson from its data, which is why analysts check model output.
- **Read · 10 min · NZ.** [Privacy and GenAI](https://standards.digital.govt.nz/nz/generative-ai-guidance-gcdo/privacy-and-genai/2025/en/) (NZ Government, *Responsible AI Guidance for the Public Service*, 2025) and the Privacy Commissioner's page on [generative artificial intelligence](https://www.privacy.org.nz/resources-and-learning/a-z-topics/ai/generative-artificial-intelligence/). The government guidance says information put into a public AI tool must already be public or acceptable to make public. The Commissioner says not to enter personal or confidential information unless it is confirmed the tool will not keep or disclose it.
