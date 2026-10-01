# Regression, explained without code

**Builds on:** Statistics Foundations (correlation, hypothesis testing) · **Helps with:** Project: Customer Churn Analysis, Types of Analytics (predictive), Machine-learning vocabulary

## Why this is worth reading

Correlation tells you that two things move together; regression puts a number on how much. It is the most widely used model in business and government analysis. Even if you never build one yourself, you will be asked to read one: in a report, from a data scientist, or in a job interview. The aim here is to understand the output, not the maths.

## Key ideas

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

## How it connects

Statistics Foundations warns that correlation is not causation; this topic shows how analysts try to get closer to the truth anyway, and where the method stops. In the churn project, the t-test compares two groups; regression is the natural next question: how much does each factor matter once the others are accounted for?

## Notice it in the wild

When a report says "X is linked to Y", ask what else could be driving both.

## Reading

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
