---
id: render-and-commit
title: Render and Commit
---

The core of react is to track the changes in component (including state) and show the updates on the screen. To make these change happen react does it in two phases:

- Render Phase (computes the changes)
- Commit Pahse (show the updates on the screen)

## Render Phase

In this phase react compares latest render view with previous render view to figure out the changes in UI. These methods are called in this phase.

- `constructor`
- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`
- `getDerivedStateFromProps`
- `shouldComponentUpdate`
- `render`
- `setState`

## Commit Pahse

In this phase react adds the changes computed in the render phase to the DOM. This is where the actual change is pushed to DOM.

- `componentDidMount`
- `componentDidCatch`
- `componentDidUpdate`

> For a change render phase methods can be called multiple times, but the commit phase methods are called only once in production mode. This means that side-effects like data fetching, subscription or manually changing the DOM.
