---
id: error-boundary
title: Error Boundary
---

Error Boundary is based on this idea that an error in a part of UI should not break the whole app. It helps you to log the error or display a fallback UI for any error. It catches the error while rendering the app.

Like say you are accessing a key that doesn't exist in the object or HTTP request fails. Take this example of a counter app.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    if (this.state.count > 3) {
      throw new Error('Error occured while updating the state.');
    }
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h1>The count is: {this.state.count}</h1>
        <button onClick={this.handleClick}>+</button>
      </>
    );
  }
}
```

The above counter app will break when the value of count is more than 3. As soon as error happens the component will unmount it-self and user is left with a blacnk scree. The user doesn't know what to do.

To deal with this common issue of handeling error properly React introduced two lifecycle methods `getDerivedStateFromError` and `componentDidCatch`.

## Erorr Handeling Phase

We learnt about different phases of component lifecycle as `Mounting`, `Updating`, `Unmounting` there is another phase `Error handeling`.

Error handeling phase kicks in when any error happens in the code. These methods are invoke when any error occures in the **decendent** (child) components. To use these methods we will make a `ErrorBoundary` component.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }
  render() {
    return null;
  }
}
```

### `static getDerivedStateFromError()`

Whenever error occures this method is called and the error is passed as an argument. The object returned form this method is used to update the state of the component. Looking at above example you can see when any error will happen the state will be updated with `{hasError: true}` and the error will be logged in console.

Use this to render the fallback UI after error.

### `componentDidCatch`

This method is also called when any error is thrown in any decendent component. It is passed two arguments `error` and `info` (information about the error). Unlike `getDerivedStateFromError` this method allows for side effect like reporting the error to any external service.

Use this to show the error in `console` or report to third party api.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.errro(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

## Uses

```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

You can update your counter app like this.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    if (this.state.count > 3) {
      throw new Error('Error occured while updating the state.');
    }
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <ErrorBoundary>
        <h1>The count is: {this.state.count}</h1>
        <button onClick={this.handleClick}>+</button>
      </ErrorBoundary>
    );
  }
}
```

Error boundaries work like a JavaScript `catch {}` block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.

[Learn More](https://reactjs.org/docs/error-boundaries.html)
