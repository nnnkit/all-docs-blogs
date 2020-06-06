---
id: state
title: State
---

You app needs a place to show time. To make that happen you do something like this.

```jsx
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);
```

We call `ReactDOM.render()` to change the output using `setInterval` every second. But this is not the right way of doing this because if we have any other value tha is changing we will have to keep calling `ReactDOM.render` to update the UI.

We will fix this problem but before that let try understanding state.

### What is state?

State in general terms means the current visual representation of the app. For example think about any app when you fill your login credentials and click on login button. It shows the loading spinner it means the app is in loading state. As soon as data is loaded the app changes it's state to loaded. Sometimes if any error happens your app goes into error state and shows error.

- In react state means a piece of data in special object that can change.
- State belongs to a component
- When state chnages react will re-render the component.

To define state you need to convert the functional component to a class component. To do that you need to perform these five steps.

- Create an ES6 `class`, with the same name, that extends `React.Component`.
- Add a single empty method to it called render().
- Move the body of the function into the render() method.
- Replace props with this.props in the render() body.
- Delete the remaining empty function declaration.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);
```

We have date in `Clock` component's props. We need to move it to the state of the component. To do that

- Add a constructor in Clock component
- Every `constructor` need to call `super()`
- Assign the initial `this.state = {}` inside the constructor
- Replace `this.props` to `this.state`

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
```

We are not fully done yet. The clock component contains the state `date` but it doesnot change every second. We need to update the state.

### Updating the state

We know a state is a piece of data that can change. To change the state we use special function called `this.setState`.
