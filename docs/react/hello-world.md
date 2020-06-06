---
id: hello-world
title: Hello World
---

Before writing `Hello World` with React we will try to do the same with just JavaScript. We are doing it with JavaScript because React is JavaScript.

To write `Hello World` using just HTML we will do something like this.

```html
<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

Creating static HTML is quite easy and declarative. But what if we have to create this dynamically. We will be using JavaScript to do this.

Let's create `Hello World` using JavaScript

HTML:

```html
<html>
  <body>
    <div id="root"></div>
  </body>
  <script>
    // Creating the element
    let rootContainer = document.getElementById('root');
    let heading = document.createElement('h1');
    heading.innerText = 'Hello World!';

    // Mounting to DOM
    rootContainer.append(heading);
  </script>
</html>
```

When we create the structure dynamically we need a place to mount the application in DOM. So, we are creating a `div` with the `id` of `root`. We will mount our application created using JavaScript into this `div` with id of `root`

After doing this you can see the page with `Hello World`. If you see the structure of the page it will look like

```html
<html>
  <body>
    <div id="root">
      <h1>Hello World!</h1>
    </div>
  </body>
</html>
```

`h1` mounted inside the `div` with id of `root`.

If you notice when we are creating the structure dynamically using JavaScript first we create the element i.e the `h1` element and mount it to the DOM using `append`.

### Let't do this using React

To make user interface using React we need two packages

- **React** For creating react elements (like in JS we used `document.createElement`)
- **ReactDOM** for interacting with the DOM (like we used `append` to add elements)

If you look at the code below you two scripts for React and ReactDOM is added. After adding those two scripts we can assess two variables in global named `React` and `ReactDOM`.

```html
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
</html>
```

#### `document.createElement` vs React.createElement`

**`document.createElement` accepts one parameter `type` and returns a DOM element of that type. You can pass types like `'a'`, `'p'`, `'div'` etc.**

![document.createElement](/img/react/dom.png)

**`React.createElement` accepts `type` of element `properties` of element in an object and `children`. It returns a new React Element of the given type. The passed type can be a string like `h1`, `'span'`, `'p'` etc.**

![React.createElement](/img/react/react.png)

Once both the scripts (React & ReactDOM) are added, we will add another `script` tag to add our JavaScript code.

To create `Hello World` we need to

- create a `h1` element with `Hello World!` as a children
- append `h1` to the `div` with id of `root`

To create an element in React provides `createElement` function similar to `document.createElement`. For creating `<h1>Hello World!</h1>` we need a `h1` tag and `Hello World!` as children. There is no properties.

To append/mount the React element created by `React.createElement` we will use `ReactDOM`. ReactDOM provides a method named `render` that accepts two parameter `what` to append and `where` like `ReactDOM.render()`

```html
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
  <script>
    // Creating the element
    let heading = React.createElement('h1', null, 'Hello World!');

    // Mounting React element to DOM
    ReactDOM.render(heading, document.getElementById('root'));
  </script>
</html>
```

No application is going to be this small so we will see how we will create a complex HTML structure using `React.createElement`.

```html
<ul class="all__todo">
  <li class="single_todo">
    <input type="checkbox" />
    <p>
      Learing React!
    </p>
    <span>x</span>
  </li>
</ul>
```

Let's convert above HTML into react element.

```js
React.createElement(
  'ul',
  { className: 'all__todo' },
  React.createElement('li', { className: 'single__todo' }, [
    React.createElement('input', { type: 'checkbox' }),
    React.createElement('p', null, 'Learning React!'),
    React.createElement('span', null, 'x'),
  ])
);
```

I get it, after taking a look at the above code you must be thinking How is it making our life easier as a developer?

I'll say don't worry the good news is you are not going to write code like this 😇. Than you will say way are learning this?

We are learning this so it does not look like magic.

Let me introduce you to a new thing called JSX (Your solution to the problem)

## JSX

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.

In simple words JSX let's you write HTML like code inside JavaScript. Let me show you a example of comparision with other syntex like `html` and `js`

- HTML

  ```html
  <div>
    <h1>
      Hello World!
    </h1>
  </div>
  ```

- JavaScript

  ```js
  let div = document.createElement('div');
  let heading = document.createElement('h1');
  hheading.innerText = 'Hello World!';
  div.append(heading);
  ```

- React Element

  ```js
  React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello World!')
  );
  ```

- JSX 🤪

  ```jsx
  <div>
    <h1>Hello World!</h1>
  </div>
  ```

JSX look exactly like HTML. YES it is very very similar, there are some small differences we will talk about that in a while.

Using HTML you can write static structure but if you want to add structure dynamically you need JavaScript so now you can write JSX (similar to HTML) in JS. Isn't it full circle.

**Using JSX you can write HTML like syntex to add Dynamic structure**

Let's test JSX in our code.

```html
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
  <script>
    // Creating the element
    // let heading = React.createElement('h1', null, "Hello World!");
    let heading = <h1>Hello World!</h1>;
    // Mounting React element to DOM
    ReactDOM.render(heading, document.getElementById('root'));
  </script>
</html>
```

If you try to run the above code you will see an error in browser. Why?

\*Browsers only understand HTML, CSS and JS not **JSX\***

So we need the help of some tool that can help browser understand JSX.

> I am `babel`. I can help you with this.

Babel can convert the JSX into JS so browser can understand it. You can play with babel [here](https://babeljs.io/repl). Try writing JSX like `<div></div>` it will be wonverted to `React.createElement('div', null)`.

![Babel JSX to JS](/img/react/babel.png)

We will add babel to our code. **Now when you will write JSX inside script tag remember to add `type` attribute `type ="text/babel"`.** With this you can indicate `bable` to transpile the code.

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
    <script type="text/babel">
      // Creating the element
      //let heading = React.createElement('h1', null, 'Hello World!');
      let heading = <h1></h1>;

      // Mounting React element to DOM
      ReactDOM.render(heading, document.getElementById('root'));
    </script>
  </body>
</html>
```

When you write the JSX code babel will compile it and put it in your code. You can see the the compiled code as shown below.

![JSX](/img/react/compiled.png)

There are few thing you need to keep in mind when you are writing JSX in comparision to HTML.

![JSX vs HTML](/img/react/jsx-vs-html.png)

If you want to show two elements like a `p` and a `span` how will you do it?

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
    <script type="text/babel">
      let heading = <p>Hello World!</p><span>I'm Span</span>;
      ReactDOM.render(heading, document.getElementById('root'));
    </script>
  </body>
</html>
```

The code above will not work the rule is you need to have only one parent element. But here as you can see there are two parent element `p` and `span`. So the solution is to wrap them into one parent element like a div like `<div><p>Hello World!</p><span>I'm Span</span></div>` or if you don't want to add extra div you can use `React.Fragment`.

_`React.Fragment` let's you wrap multiple children into one parent node without adding extra node._ Like

`<React.Fragment><p>Hello World!</p><span>I'm Span</span></React.Fragment>`. There is a shorthand for React.Fragment in JSX i.e `<></>` just one and close bracket.

#### You can also use JS inside JSX

The benefits of writing of JSX is that you can write JavaScript if you want. For writing JS you have to put it into `{}` like `{1+1}` . **_You can only put expression inside curly brackets._** It means you put anything that results into a value. You can't puth `for`,`if`,`switch`, `variable defination` etc.

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
    <script type="text/babel">
      let username = 'Arya Stark';
      let headingClass = 'main__heading';
      let heading = <p className={headingClass}>Hello {username}!</p>; // Hello Arya Stark!
      ReactDOM.render(heading, document.getElementById('root'));
    </script>
  </body>
</html>
```

**Do Project Card and homepage**
