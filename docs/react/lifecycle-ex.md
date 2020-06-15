---
id: lifecycle-ex
title: Lifecycle Exercise
---

## Gizmo App

Noone uses an app not updating their data. That is exactly what we are doing in our app. Now using lifecycle we are going to get the article informations from NewsAPI.

Go through the documentation to understand how to use the api, and filter the api in such a way to get only news in `English` language.

- [News API](https://newsapi.org/docs/)

Use the above api and update the gizmo app to UI like given below.

![Dynamic Gizmo](/img/react/gizmo-filter.png)

- In header you should have news sources (like ABC News, Coin desk etc), the first sources will be 'all'. All will be active in start.
- CLicking on header should change the news displayed.
- Sidebar will have all the news from top headlines.
- Main body will have one post to as feature post (`https://newsapi.org/v2/top-headlines`)
- TOP STORIES will have all the other stories.
- FEATURED SOURCE will have all stories from a specific source. (You can choose any source)

#### BONUS

- Make the Sources button random in HEADER
- Make the Featured to show random post on every refresh.
- Make sure the post feature in should not be visible in TOP STORIES
