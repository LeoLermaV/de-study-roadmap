# Choosing and designing charts

**Builds on:** Accessibility in Data Communication · **Helps with:** Power BI — Dashboards & DAX, Data Storytelling & Communication, Project: Retail Sales Deep-Dive

## Why this is worth reading

Power BI will draw any chart you click. Choosing the one that answers the stakeholder's question, and removing everything that does not help, is the difference between a dashboard people use and one they glance at once. Reading this before Power BI means your first dashboards are designed rather than left on the defaults.

## Key ideas

- **Start from the question, not the chart:** comparison calls for a bar chart, change over time for a line chart, part-to-whole for a stacked bar (or occasionally a pie), distribution for a histogram or box plot, and relationship for a scatter plot.
- **Bar charts start at zero:** a bar's length is its value, so a cut-off axis exaggerates differences. Line charts may start elsewhere because they show change rather than size.
- **Pie and donut charts:** people judge angles and areas poorly. Use them only for two or three parts of a whole; otherwise a sorted bar chart is easier to read.
- **Stacked charts:** only the bottom segment and the total are easy to compare, because the middle segments float. If the middle segments matter, use side-by-side bars or small multiples instead.
- **Dual axes:** two y-axes let you make almost any two lines look related by rescaling one of them. Prefer two charts stacked one above the other on the same time axis.
- **Small multiples:** the same small chart repeated for each category, such as one line chart per region, is often clearer than one crowded chart with ten coloured lines. Many Power BI visuals have a small multiples option.
- **Declutter:** remove heavy gridlines, borders, 3D effects, and legends you can replace with labels placed directly on the data. Sort bars by value rather than alphabetically, unless the categories have a natural order such as months.
- **Put the takeaway in the title:** "Auckland drove 60% of Q3 growth" tells the reader what to see; "Sales by region" makes them work it out.
- **Colour with purpose:** grey for context and one accent colour for what matters. Never rely on colour alone (see the Accessibility topic).

## How it connects

The Data Storytelling topic gives you the narrative structure; this topic gives you the visual vocabulary for each slide or dashboard page. The Retail Sales project asks for two or three charts: use it to practise one deliberate choice per chart.

## Notice it in the wild

When you see a chart in the news, cover the title and ask what question it answers. Then check whether a bar chart's axis starts at zero.

## Reading

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
