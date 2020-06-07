---
id: error-boundry
title: Error Boundry
---

We learnt about different phases of component lifecycle as `Mounting`, `Updating`, `Unmounting` there is another phase `Error handeling`.

Error handeling phase kicks in when any error happens in the code. These methods are invoke when any error occures in the **decendent** component. To use these methods we will make a `ErrorBoundary` component.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    console.log(`error: ${error}`);
    return { hasError: true };
  }
  render() {
    return null;
  }
}
```

`static getDerivedStateFromError()`

Whenever error occures this method is called and the error is passed as an argument. The object returned form this method is used to update the state of the component. Looking at above example you can see when any error will happen the state will be updated with `{hasError: true}` and the error will be logged in console.

`componentDidCatch`

This method is also called when any error is thrown in any decendent component. It is passed two arguments `error` and `info` (information about the error). Unlike `getDerivedStateFromError` this method allows for side effect like reporting the error to any external service.
