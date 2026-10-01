# Distributions, outliers and robust statistics

**Builds on:** Data Quality, SQL aggregation · **Helps with:** Statistics Foundations, Data Cleaning & Transformation, Project: Customer Churn Analysis

## Why this is worth reading

A single summary number hides the shape of the data. Two support teams can have the same average response time while one is consistent and the other is a mix of instant replies and week-long waits. Looking at the distribution first tells you which summary to trust and which values deserve a second look.

## Key ideas

- **A distribution is the pattern of values:** where they cluster, how widely they spread, and whether they lean to one side. A histogram shows it at a glance.
- **Skew:** a long tail stretching one way. Incomes, house prices, order values, and waiting times are almost always right-skewed: most values are modest and a few are very large.
- **Mean vs median:** the mean is pulled toward the tail and the median is not. That is why NZ house prices and household incomes are usually reported as medians.
- **Spread:** the **range** (maximum minus minimum) depends on just two values, so one extreme distorts it. The **standard deviation** is the typical distance from the mean and is also sensitive to extremes. The **interquartile range (IQR)** covers the middle 50% of values, from the 25th to the 75th percentile, and barely moves when one value is wild.
- **Box plot:** a picture of the median, the IQR (the box), and any points far outside it. By convention, points more than 1.5 × IQR beyond the edges of the box are flagged as potential outliers.
- **z-score:** how many standard deviations a value sits from the mean. Values beyond about ±3 are unusual when the data are roughly bell-shaped. On skewed data z-scores mislead, so prefer the IQR rule there.
- **An outlier is a question, not a verdict:** a $40,000 order might be a typo for $400.00, or it might be your largest corporate client. Investigate first, then decide whether to fix it (a confirmed error), exclude it (and say so), or keep it and report it separately. Write down what you did and why.
- **Robust statistics:** the median and IQR are called robust because one wild value barely moves them. Prefer them when data are skewed or not yet cleaned.
- **Kurtosis:** describes how heavy the tails of a distribution are. You will rarely need it; recognising the word is enough.

## How it connects

In SQL, `AVG()` is one keyword away, while a median usually needs `PERCENTILE_CONT(0.5)`. That convenience is one reason averages get reported by default even when a median would be more honest. In the churn project you will draw histograms of monthly charges; this topic tells you what to look for in them.

## Notice it in the wild

When a news story quotes an "average" salary or house price, check whether it is a mean or a median. On skewed data the two can differ by tens of thousands of dollars.

## Reading

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
