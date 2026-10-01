# Machine-learning vocabulary for analysts

**Builds on:** Regression, explained without code · **Helps with:** Types of Analytics (predictive and prescriptive), Data Ethics & Privacy, Bias in Data, Project: Customer Churn Analysis

## Why this is worth reading

You do not need to build models to be a strong analyst, but job descriptions increasingly mention AI and automation, and you will work alongside people who do build them. Knowing the vocabulary lets you follow the conversation, ask good questions, and catch a model that looks impressive but is not. The goal is literacy, not engineering.

## Key ideas

- **A model is a learned rule:** it finds patterns in past data and applies them to new data. The inputs are **features** (tenure, contract type, monthly charge). The thing being predicted is the **label** or target (churned: yes or no).
- **Supervised learning:** learning from examples where the answer is already known. **Regression** predicts a number, such as next month's sales. **Classification** predicts a category, such as whether a customer will churn.
- **Unsupervised learning:** finding structure without known answers. **Clustering** methods such as k-means group similar customers into segments; an analyst then names and interprets those segments.
- **Training and test data:** a model is fitted on one portion of the data and judged on a portion it has not seen. Judging it on its own training data is like marking your own exam with the answer sheet open.
- **Overfitting:** a model that memorises its training data, noise included, and then performs badly on new data. Simpler models often generalise better.
- **Confusion matrix:** a two-by-two table counting true positives, false positives, true negatives, and false negatives.
- **Accuracy misleads on imbalanced data:** if 5% of customers churn, a model that predicts "nobody churns" is 95% accurate and useless. **Precision** asks: of the customers we flagged, how many really churned? **Recall** asks: of the customers who churned, how many did we flag? Which matters more depends on the cost of each kind of mistake.
- **Where the analyst fits:** preparing and checking the input data, sanity-checking outputs against what you know about the business, and explaining results to stakeholders in plain language. Biased or dirty training data produces biased or wrong predictions, which is why the Data Quality and Bias topics matter here.
- **Generative AI at work:** assistants such as ChatGPT or Microsoft Copilot can help you write and explain SQL or DAX. Never paste personal or confidential data into a tool your organisation has not approved, and check every output before you use it.

## How it connects

Logistic regression from the previous topic is itself a classification model, so you already know one machine-learning method. The churn project's question ("which customers are likely to leave?") is a classification problem; this topic gives you the words to discuss it with a data scientist.

## Notice it in the wild

When a product claims "95% accurate AI", ask: accurate at what, and how common is the thing it is detecting?

## Reading

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
