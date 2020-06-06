---
id: component
title: Components and Props
---

Components let you break down the complex UI into small independent, reusable or a single responsibility pieces. Technically it is a function or a class that accepts parameter (optional) and returns a react element. React elements describes the user interface that appears on the screen.

```jsx
function hello() {
  return <h1>Hello World!</h1>;
}
```

It's a Component named `hello` that doesn't accept any parameter and returns `h1` tag with `Hello World` text. `h1` is a react element. But because `hello` is a function you can call the function like `hello()` but it doesnot resemble the declarative nature of HTML so we call a Component in JSX like `<hello />`.

```jsx
function hello() {
  return <h1>Hello World!</h1>;
}
React.createElement("hello", {className: "container"}, "Hello World");

ReactDOM.render(<hello/>, document.getElementById('root');
```

If you run this code you will get an error saying `<hello />` is unrecognized. But why is it happening? To understand this error we need to understand how react element or a component is created. If you remember, to create a `div` element in react `React.createElement('div', {})` and to convert `hello` component into react element it will `React.createElement('hello', {})`. React dould not differentiate between a react element and a component. So as a convention you need to start the name of a component with an uppercase letter like `Hello` not `hello`. Now react will create element like `React.createElement(Hello, {})`.

![document.createElement](/img/react/element-vs-component.jpeg)

### Props

Components are reusable piece of code but you can't reuse it if you cannot change the information. Like our component `Hello` prints `Hello World!` what if we want to print `Hello AltCampus`.

A component is a function so it can accept parameter. So you can pass parameter to your component like `Hello({name: "Arya"})`. To make it resemble like HTML in JSX we write like `<Hello name="Arya" />`. You can pass multiple parameter. In react all these parameter is called **props**.

```jsx
function hello({ name }) {
  return <h1>Hello {name}</h1>;
}
Hello({ name: 'Arya' });
// JSX
<Hello name="Arya" />;
```

Let's take an example:

We were working on the article list website. Now you can break it down into components.

![document.createElement](/img/react/components.png)

### Using multiple components together

We have four components named `Header`, `Hero`, `Body` and `Footer`. Now we can compose theme together to make an App. `App` is our main components that contains all other components. Using ReactDOM.render we will render the `App` component.

```jsx
function Header() {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </header>
  );
}
function Hero() {
  return <div>Hero Section</div>;
}
function Body() {
  return (
    <div>
      <h1>Main Body</h1>
    </div>
  );
}
function Footer() {
  return <small>Copyright AltCampus</small>;
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </>
  );
}
ReactDOM.render(<App />, document.getElementBuId('root'));
```

To enhance all these component we can also pass some props.

> You can only return one parent element form a react component. You can also use a special component provided by React named `React.Fragment` to wrap multiple parent element if you have.

Example:

```jsx
// bad (multiple parent element header and nav.)
function Header(){
  return (
    <header></header>
    <nav></nav>
  )
}
// Good wrap them in another parent element
function Header(){
  return (
    <div>
      <header></header>
      <nav></nav>
    </div>
  )
}
// Good (if you don't want an extra div wrap them in Fragment)
function Header(){
  return (
    <React.Fragment>
      <header></header>
      <nav></nav>
    </React.Fragment>
  )
}
// Good (<> is a shorthand for <React.Fragment>)
function Header(){
  return (
    <>
      <header></header>
      <nav></nav>
    </>
  )
}

```
