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

### Function Component

```jsx
function Hello() {
  return <h1>Hello World!</h1>;
}
```

Function component with props.

```jsx
function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### Class Component

Class component gives your component some superpowers like

- You can define state
- You can use lifecycle

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

Class component with props

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
```

Let's take an example:

We were working on the article list website. Now you can break it down into components.

![document.createElement](/img/react/element-vs-component.jpeg)

### Props (properties)

In HTML element you can give extra attribute like for `<input type="text">` contains an attribute named `type` with a value of text. In React when we are creating a component we are creating a custom element so we can pass nay properties to the component.

Components are reusable piece of code but you can't reused it if you can't change the information. Like our component `Hello` prints `Hello World!` what if we want to print `Hello AltCampus`.

A component is a function so it can accept parameter. So you can pass parameter to your component like `Hello({name: "Arya"})`. To make it resemble like HTML in JSX we write like `<Hello name="Arya" />`. You can pass multiple parameter. In react all these parameter is called **props**.

> Props are read only. You can't update the props you can only read the value of props.

```jsx
function hello({ name }) {
  return <h1>Hello {name}</h1>;
}
Hello({ name: 'Arya' });
// JSX
<Hello name="Arya" />;
```

Let's take an example:

We want to show list of five movies. For that we nees name of five movies and how the component will look like. We will create a `Movie` component. The `Movie` component contains the name of the movie and a cross button. To use if multiple times we need call this will differen different movie names.

If you look into the `App` component we are using the same component multiple times with miltiple information.

```jsx
const Movie = props => (
  <li>
    <p>{props.movieName}</p>
    <span>x</span>
  </li>
);

const App = () => {
  return (
    <>
      <Movie movieName="Inseption" />
      <Movie movieName="Cast Away" />
      <Movie movieName="Mad max" />
      <Movie movieName="The Dark Knight" />
    </>
  );
};
```

### Using multiple components together

We have four components named `Header`, `Hero`, `Body` and `Footer`. Now we can compose theme together to make an App. `App` is our main components that contains all other components. Using ReactDOM.render we will render the `App` component.

The `Body` component is being used multiple times with different information.

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
function Body(props) {
  return (
    <div>
      <h1>Section {props.name}</h1>
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
      <Body name="Articles" />
      <Body name="Filtered Articles" />
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

### Looping through an array using JSX

Think about a similar app (movie listing app) like we made using props. But this time we have 200 movies. It will be very repetitive to call them again by again with different movies. So solve that problem in the list of movies the changing values are the name of the movie. We can have the name of the movies in an array like this.

Now your movies can also have some extra informations like yearReleased, director, genre etc.

> Inside JSX you can write JavaScript inside `{}`.

```js
let movies = [
  {
    title: 'Forest Gump',
    yearReleased: 1994,
    director: 'Robert Zemeckis',
    genre: 'Comedy',
    wasSuccessfull: true,
  },
  {
    title: 'Harry Potter',
    yearReleased: 2001,
    director: 'Mike Newell',
    genre: 'Fantasy Fiction',
    wasSuccessfull: true,
  },
  {
    title: 'Titanic',
    yearReleased: 1998,
    director: 'James Cameron',
    genre: 'Romance',
    wasSuccessFull: true,
  },
  {
    title: 'Best Worst Movie',
    yearReleased: 2009,
    director: 'Michael Stephen',
    genre: 'Comedy',
    wasSuccessfull: false,
  },
  {
    title: 'Troll 2',
    yearReleased: 2003,
    director: 'Shawn Black',
    genre: 'Horror',
    wasSuccessfull: false,
  },
];

const Movie = props => (
  <li>
    <p>{props.movieName}</p>
    <span>x</span>
  </li>
);

const App = () => {
  return (
    <>
      {movies.map(movie => (
        <Movie movieName={movie} />
      ))}
    </Movie>
  );
};
```

You can see above we have a variable named `movies` and two components `App` and `Movie`. In the app component we need multiple movie list. So to do that we need to use the movie array and map over if and for every movie we are returning a `Movie` component. We are also passing the title of the move into `Movie` component.

Along with name we can also use other informations like director, genre etc.

What's happening with this is we are taking a list of movies and converting them in an user interface.

After doing this if you look into the `console` you will see an error shying `Each child in a list should have a unique key prop`. It means, anytime you are rendering a list of react element you need to pass unique `key` props. It helps (internaly) React keep track of the elements in the list.

### Inline styling using style props

Let's take a look at inline styling HTML element.

```html
<h1 style="font-size: 24px; padding: 20px;">Hello World!</h1>
```

React element can also be inline styled.

```jsx
<h1 style={{ fontSize: '24px', padding: '20px' }}>Hello World!</h1>
```

The `style` prop of react element accepts an object and camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

#### Add className conditionaly

You can add class names to a react component conditionaly using something like this.

```jsx
function Button(props) {
  function getClassName(){
    if(props.size === "large"){
      return "btn large-btn"
    } else if(props.size === "small"){
      return "btn small-btn";
    } else {
      return "btn"
    }
    return "";
  }

  return <button className={getClassName()}>Click Me</button>;
}

<Button />
<Button size="large" />
<Button size="small" />
```
