---
id: state
title: State and Event
---

To understand state we will be making a counter app. That will have three buttons `Increment`, `Decrement` and `Reset`.

![Counter](/img/react/counter.png)

```jsx
function Counter() {
  return (
    <div>
      <h1>1</h1>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

Looking at above app we can understand the value `1` will change when event happens on the button. Everytime the value changes we would want to update the UI. To fix this we need to understand state in react.

### What is state?

- In react state means a piece of data that can change.
- State belongs to a component
- When state changes react will re-render the component.

To define state:

1. you need to convert the functional component into a class component.
2. Add a `constructor` method in your component

To convert the component you need to perform these five steps.

- Create an ES6 `class`, with the same name, that extends `React.Component`.
- Add a single empty method to it called render().
- Move the body of the function into the render() method.
- Replace props with this.props in the render() body.
- Delete the remaining empty function declaration.

```jsx
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>1</h1>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

Defining state inside the constructor:

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

We defined a special function called `constructor` inside that initialized the state by `this.state = {}`. Inside the object you can put your initial state with the key. For this example the initial value of count is 1. To access the value in class we use `this.state.[keyname]`. Your app will show the value 1 inside `h1`.

We are done defining the state. Only when you update the state your component will re-render.

### Updating the state

We know a state is a piece of data that can change. To update the state we use special function called `this.setState()`.

To update the `count` to 2 we can `this.setState({count: 2})`.

`this.setState()` accepts an object with the key you want to update and the value you want to update with.

```js
this.setState({ count: 2 });
this.setState({ name: 'Counter App' }); // adding a new key name with value "Counter App"
this.setState({ count: 10 }); // updating count to 10
```

We learnt about defining a state in component and updating the state. Our application need to update only when you click on the button. This is the last piece before completing the app.

### Handeling Event

We need to only update the value of count when we click on any of these buttons.

- Increment will add 1 to the value.
- Decrement will substract 1 to the value.
- Reset will make the value 0.

We needs to change the value of count when you click on the button. To handle the click on the button we need to understand events in React. Event in React is similar to handeling event in pure HTML.

Like if in HTML `<button onclick="handleClick()">Click me</button>` adds a event of type `click` on the element. When that happens `handleClick` will be called. Similarly in react you do something like `<button onClick={handleClick}>Click me</button>`.

- Events are named in camelCase like `onClick`, `onSubmit`, `onKeyDown` etc.
- HTML event requires function call React event needs function reference (you don't call the function)
- React element can respond to almost every event that HTML suppots.

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  handleIncrement = () => {
    // update state of count to 2
    this.setState({ count: 2 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

We will add a event handeler of type `click` to increment button. When that happens it will call a function named `handleIncrement`. Inside the function we need to do two things

- Change the value of count form 1 to 2.
- And we know when the value of state change the component re-renders.

Now our app is functional, this is what is happening in our application:

1. We have 1 as the initial value of the count and in UI we have 1
2. We click on the increment button
3. Increment button has a event handeler of type `click`
4. When the event happens `handleIncrement` function is called.
5. `handleIncrement` using `this.setState` update the count to 2.
6. When state changes the component will re-render

![Counter](/img/react/state-update.png)

Our app is working for first click but not after that. Because we fixed the value to 2. What we need is update the by 1 everytime user click on the button. To make that happe we need to use the previous value of the count.

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

Now we are using the previous value of the count to calculate the next value of the count. `this.state.count` gives the old value and we add one to it. Now app will work properly.

Now it's your turn to complete the other two buttons `decrement` and `reset`. Go ahead and finish the app by implementing `handleDecrement` and `handleReset` function. Complete the app below.

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  handleIncrement = () => {
    // update state of count to 2
    this.setState({ count: 2 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```
