# Thinking in time series

**Builds on:** Advanced SQL (window functions) · **Helps with:** Power BI (DAX time intelligence), Python for Data Analysis (dates), Project: E-Commerce Funnel Analysis

## Why this is worth reading

Most dashboards have a date on the x-axis, and most stakeholder questions are about change: are we up, down, or normal for this time of year? Time-based data has patterns of its own, such as seasons, holidays, and inflation, that can make a normal month look alarming or hide a real problem. A handful of concepts lets you read these charts correctly.

## Key ideas

- **The components:** **trend** is the long-run direction. **Seasonality** is a pattern that repeats every year, week, or day. **Cycles** are longer, irregular rises and falls, such as economic booms and slowdowns. **Noise** is the random variation left over.
- **The NZ calendar:** retail peaks in December, and January is quiet for many businesses because of summer holidays. Easter moves between March and April, so comparing this March with last March can mislead. Years differ too: the NZ tax year runs April to March, the government's financial year runs July to June, and many companies choose their own. Check which one a report uses.
- **Moving averages:** averaging each point with its neighbours, such as a 7-day or 12-month rolling average, smooths out noise so the trend shows. You have already written one in SQL: `AVG(x) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)`.
- **Choosing a comparison:** month-on-month mixes trend with seasonality, so December against November says more about Christmas than about performance. Year-on-year (this December against last December) removes most seasonality but reacts slowly and is distorted by moving holidays. Choose deliberately and label which one you used.
- **Seasonal adjustment:** statistical agencies remove the regular seasonal pattern so that movements from one period to the next reflect real change. Stats NZ publishes many series both as actual and as seasonally adjusted figures, and headline numbers such as quarterly GDP growth and the unemployment rate are seasonally adjusted.
- **Index numbers:** a series rescaled so that a chosen base period equals 100. This lets you compare the growth of things measured in different units, such as rents and wages.
- **Nominal vs real:** a 3% rise in sales during a year with 4% inflation is a fall in real terms. To compare money across years, adjust it using the Consumers Price Index (CPI).
- **Do not over-read one point:** a single bad week is usually noise. Look for a run of points, or a break from the usual seasonal pattern, before raising an alarm.

## How it connects

`LAG()` and running totals from Advanced SQL are the building blocks of period-over-period comparisons. In Power BI, DAX time-intelligence functions such as `SAMEPERIODLASTYEAR` do the same job, and this topic tells you when each comparison is the right one.

## Notice it in the wild

When a headline says something "rose 2% last month", check whether it says "seasonally adjusted". If it does not, ask whether that month is always higher.

## Reading

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
