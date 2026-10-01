# Types of data

**Builds on:** Dimensions, Measures & Granularity · **Helps with:** Statistics Foundations, Excel Advanced, Power BI

## Why this is worth reading

Before you choose an average or a chart, you need to know what kind of values a column holds. A column of numbers is not always a number: postcodes, customer IDs, and 1–5 survey ratings look numeric but behave very differently. Knowing the type tells you which calculations mean something, and it explains why Power BI sometimes offers you "Sum of Year".

## Key ideas

- **Nominal:** categories with no order, such as region, product category, or payment method. You can count them and find the most common one (the mode), and that is all.
- **Ordinal:** categories with an order but uneven gaps, such as survey ratings from 1 to 5, education level, or low/medium/high. You can rank them and take a median. Averaging them assumes the gap between 1 and 2 equals the gap between 4 and 5, which nobody promised. Averaged ratings are common in practice; just know you are making that assumption.
- **Interval:** numbers with equal gaps but no true zero, such as temperature in °C or calendar years. Differences make sense; ratios do not. 20°C is not twice as hot as 10°C.
- **Ratio:** numbers with a true zero, such as revenue, age, quantity, or duration. Every calculation works, including "twice as much".
- **Numbers that are really labels:** postcodes, phone numbers, IDs, and years used as categories. Treat them as text. In Power BI, set these columns to **Don't summarize**, or you will get "Sum of Postcode".
- **Discrete vs continuous:** counts (number of orders) vs measurements (weight, time taken). This shapes chart choice: bars for categories and counts, histograms for continuous measurements.
- **Data shapes:** **cross-sectional** data describes many things at one point in time (a customer snapshot). A **time series** describes one thing over many points in time (monthly revenue). **Panel** or longitudinal data describes many things over time (every customer's monthly spend). Panel data is common in NZ government work: Stats NZ's Integrated Data Infrastructure (IDI) links de-identified records about people across agencies and years.
- **Tidy data:** each variable is a column, each observation is a row, and each kind of thing gets its own table. This is the same idea as grain: decide what one row represents. A spreadsheet with one column per month is untidy and needs **Unpivot Columns** in Power Query before you can analyse it.

## How it connects

Nominal and ordinal columns are usually your **dimensions**; interval and ratio columns are usually your **measures**. If the Phase 0 topic on dimensions and measures made sense, this is the next layer of the same idea.

## Notice it in the wild

When a survey result says "average satisfaction 3.8 out of 5", ask what the median and the spread were. Two very different groups of customers can produce the same 3.8.

## Reading

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
