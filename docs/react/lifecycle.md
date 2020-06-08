---
id: lifecycle
title: Lifecycle In React
---

Lifecycle refers to the series of changes in the life of an organism. Like child, adult and old. Similarly react component also goes through series of change like mount, updating and unmount.

To understand this let us use below component.

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

When the component is rendered on the screen it will look something like `Hello Wordld!`. To display this on screen the component has gone through some phases also referred as component lifecycle. Like how a human goes through being a child, teenage, adult old. A component goes through mounting, updating and unmounting.

- `Mounting` is when the component is displayed on the screen for the first time. It happens only once.
- `Updating` when a state or props changes the component is in this pahse. Updatinf is when change happens. They can go through this phase multiple times.
- `Unmounting` is the final phase when component job is done and is removed from DOM.

![Lifecycle](/img/react/lifecycle.png)

For further reference you can also look at [link](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Knowing the phases is important to understand the concept. To use those phases React provides some methods known as **component lifecycle methods**.

The order of call of the methods are:

#### Mounting Phase

1. `constructor`

This is the first method that gets called. This helps in initiating the state and props of the component. This methods gets called even before the component is mounted on the DOM.

2. `render`

After the constructor is called the `render` method of the class gets called. Your render method contains the UI of the component.

3. `componentDidMount`

After render is called the component UI is mounted on DOM. This function is invoked immediately after the component is mounted so it's called component did mount.

Uses:

- Make network request to get any data.
- Select any element form DOM in this method.
- Setup any timer like `setTimeout` etc

#### Updating Phase

4. `shouldComponentUpdate`

This lifecycle method decides wether you want your component to update or not. The default behavior is to re-render on every state or prop change. If you want you can control this behaviour using this method.

You can return `true` or `false` to control the re-rendering of the component.

> This lifecycle is mostly used in performace optimization. React provides `PureComponent` that doesnot re-render when the props or state changes.

5. `render`

After `shouldComponentUpdate` render method is called again.

6. `componentDidUpdate`

This method will be called as soon as the update UI is pushed to DOM.

#### Unmounting

7. `componentWillUnmount`

This method is invoke just before the component is going to be unmounted. This place is ideal from doing cleanups like removing event listener, cancelling network request or cleaning intervale etc.

```js
// add event listener or interval
componentDidMount() {
  //addEventListener()
  // setInterval()
}

// remove event listener or interval
componentWillUnmount() {
  //removeEventListener()
  // clearInterval()
}
```
