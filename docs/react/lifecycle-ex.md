---
id: lifecycle-ex
title: Lifecycle Exercise
---

## Gizmo App

Noone uses an app not updating their data. That is exactly what we are doing in our app. Now using lifecycle we are going to get the article informations from NewsAPI.

Go through the documentation [Getting Started](https://newsapi.org/docs/get-started)
to understand how to use the api, and filter the api in such a way to get only news in `English` language.

- [News API](https://newsapi.org/docs/)

Use the above api and update the gizmo app to UI like given below.

![Dynamic Gizmo](/img/react/gizmo-filter.png)

#### STAGE 1

- In header you should have news sources (like ABC News, Coin desk etc), the first sources will be 'all'. All will be active in start.(`https://newsapi.org/v2/sources`)
- Sidebar will have all the news from top headlines. (`https://newsapi.org/v2/top-headlines`)
- Main body will have one post to as feature post (`https://newsapi.org/v2/everything`)
- TOP STORIES will contain top six stories getting from `/everything`.
- FEATURED SOURCE will have all stories from a specific source. (You can choose any source) Display 3 news.

#### STAGE 2

- Clicking on header should change the news in main section.
- Make the Sources button random in HEADER (the sequance should not be fixed)
- Make the Featured to show random post on every refresh.
- Make sure the post feature in should not be visible in TOP STORIES

## Github Profile and Repo
