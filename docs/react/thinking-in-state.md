---
id: thinking-n-state
title: Thinking In State
---

How do you decide what to put in state? Is state a place for storing whatever value you want to store? Is there any other place to store data?

General rule of thumb is you should only put data in state on which you UI (visual) depends on. Because every time your state changes the component re-renders.

> If changing the state doesnot change the UI that data should not go into state of the component.

### Things you can put in state

- User entered values in input boxes. (UI depends on those values)
- Data from server (user information, list of products, collection)
- Model open/closed state
- Sidebar open/closed state
- Current selected in tabs section

Other information that doesnot affect the UI can be stored into the `this` object available to you in `class` component.

## Should you update your state based on props

You should avoid copying props into state it creates multiple source of truth. But when you think about copying props into state think about it.

Component will re-render when the props of parent component changes. So you dont have to copy you props into state for the component to re-render.

```jsx
class BadCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  return <h1>The data is: {this.state.data}</h1>
}
```

In above example how will you keep the data in-sync when props will update. `constructor` only gets called once.

```jsx
class GoodCode extends React.Component {
  return <h1>The data is: {this.props.data}</h1>
}
```

Using props directly solves the problem because when parent component will change it will re-rerender. You will get new data.

> Don't think of this to be a anti-patter. You can do this when you need to initialize the state with data coming to you using props. Above example is just to remove some compilication that can be solved simply by using `props` directly in render.

---

In some cases you would want to initialize the state with pre-filled data coming from server

```jsx
function Counter(props) {
  return <h1>{props.count}</h1>;
}
```
