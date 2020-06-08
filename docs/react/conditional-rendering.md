---
id: conditional-rendering
title: Conditional Rendering
---

Conditional rendering is showing different component based on certain condition or the state of the application. It works similar to how condition works in JavaScript using something like `if` statement. It can be useful in conditions like showing or hiding different elements, implementing authentication etc.

Here's an example:

```jsx
function User(props) {
  return <h1>Welcome John!</h1>;
}

function Guest(props) {
  return <button>Log In</button>;
}

function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <User />;
  }
  return <Guest />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

In above code we have three components `User`, `Guest` and `App` component. We need to render `User` if the user logged or else render `Guest`. To make that happen in out `App` component we are returing specific componnet base the value of `isLoggedIn`.

### Ways of conditional rendering

1. **Prevent rendering with `null`**

You can return `null` if you want noting to show on the screen.

2. **if/else**

```jsx
function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <User />;
  }
  return <Guest />;
}
```

- Use it when you need the condition on the top leval.
- `if/else` is statement you cant put it in `{}` in JSX

3. **ternary operator**

```jsx
function App(props) {
  return props.isLoggedIn ? <User /> : <Guest />;
}
```

- Ternary is an expression. `{}` in JSX only accepts expression.
- Use it when need to dondition inside JSX

4. **&&**

You should use it when you have to render the **element** or **nothing**. For example you want to show "Loading ..." when `isLoading` is `true` or else nothing.

You can do that using ternary operator like this.

```jsx
function App() {
  return isLoading ? <p>Loading...</p> : null;
}
```

Using `&&` is sorter to use for the same purpose.

```jsx
function App() {
  return isLoading && <p>Loading...</p>;
}
```

- Use it when you want to return either element or null.
- Can be used inside JSX

5. **switch**

Sometimes there are multiple conditions on which you have to return certain component. Like in case of a Notification component that accepts a type props and returns specific component based on that. You can do it using `if/else` like this.

```jsx
function Notification({ text, type }) {
  if (type === 'info') {
    return <Info text={text} />;
  }

  if (type === 'warning') {
    return <Warning text={text} />;
  }

  if (type === 'error') {
    return <Error text={text} />;
  }

  return null;
}
```

More than two if becomes harder to read. Better approche is to use `switch` for these cases.

```jsx
function Notification({ text, type }) {
  switch (type) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}
```

- Use it when you have lot of conditions, make the component more readable.
