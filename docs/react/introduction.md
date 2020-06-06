---
id: introduction
title: Why React
---

When you're learning something new the first question you should always ask is What problem does it solve?

So before going into React let's try to understand the problem it solves. To do that we will be making a small application using vanilla JavaScript.

We will be making a small "Movie Watch List App".

![Movie Watch List](/img/react/movie-watch.png)

#### Requirements

- User can enter a movie name
- Default status will be `To Watch`
- Clicking on button should change the state form `To Watch` to `Watched` or vice versa.

Your time starts now.

**Find the solution in (projects/movie-list)**

### Static vs Dynamic Structure (HTML)

There are two ways of creating HTML for any project Static and Dynamic. **Static** remains unchanged while **Dynamic** can change.

Static HTML

```html
<li>
  <p>Inception</p>
  <button>Watched</button>
</li>
```

You need to create dynamic structure on the basis of any user action. Like in our `movie list` app we need to create dynamic structure whenever user add new movie. So, to create it dynamically you will be using something like JavaScript. Let's see how creating structure with JS looks like:

```js
let li = document.createElement('li');
let p = document.createElement('p');
p.innerText = movie.name;
let button = document.createElement('button');
button.innerText = movie.isWatched ? 'Watched' : 'To Watch';
button.setAttribute('data-id', index);
li.append(p, button);
ul.append(li);
```

Now let's compare them:

- Creating static structure with HTML is **readable**, **easy to maintain** and **declarative**
- Creating dynamic structure using JS is **hard to read**, **lots of boilerplate code** and **hard to maintain**
- You can create using dynamic structure using `innerHTML` that can be more readable but can also cause Cross Site Scripting bugs.
- If you think about complex dynamic structure that will be worse.

---

**BONUS**: I challenge you to try making this structure using JavaScript.

| Keyword |      Scope      | Can Be Reassigned | Can Be Redeclared |
| ------- | :-------------: | ----------------- | ----------------- |
| `var`   | function scoped | yes               | yes               |
| `let`   |  block scoped   | yes               | no                |
| `const` |   block scope   | no                | no                |

---

After knowing the problem what do you think is the solution of this problem.

We don't have to re-invent the wheel. We are happy writing HTML to create structure but not happy using JS. What if we ca write dynamic HTML using JS in the same way we write static HTML.

---

Let's take a example:

```html
<div class="container">
  <ul class="lists">
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</div>
```

Making it using JavaScript

```js
const div = document.createElement('div');
div.className = 'container';
const ul = document.createElement('ul');
ul.className = 'lists';
const li1 = document.createElement('li');
li1.innerText = 'one';
const li2 = document.createElement('li');
li2.innerText = 'two';
const li3 = document.createElement('li');
li3.innerText = 'three';

div.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(div);
```

Let's break down above problem. HTML element consists of three important things:

- Name of the element
- Attributes of the element like `class`, `id`, `type` etc
- Children

![HTML Structure](/img/react/html-structure.png)

- `type` can be `div`, `span`, `p`
- `attributes` needs to key value pair and there can be multiple attributes.

```js
{
	class: "container",
    id: "main",
}
```

- For `children` we will keep our approach simple. Anything wrapped into element will be child.

  ```html
  <h1>Hello</h1> <!-- Hello is children of h1 -->
  <div>
    <h1>
      Children <!-- <h1>Hello</h1> is children of div -->
      </h1>
    </h1>
  </div>
  ```

In DOM `Hello` is considered as `innerText` (attribute) but we will consider that as a children. We will get two different kind of child. One of type `string` another an element of type `object`. Note: There can be multiple children to an element.

#### Let' create a createElement function

1.  It takes `type` and returns a DOM element.

```js
function createElement(type) {
  return document.createElement(type);
}
// Example
let h1 = createElement('h1');
```

2. also accepts a `attributes` object and add those attributes to DOM element

```js
function createElement(type, attr = {}) {
  let elm = document.createElement(type);
  for (key in attr) {
    elm[key] = attr[key];
  }
  return elm;
}
// Example
let h1 = createElement('h1', { className: 'heading' });
```

3. It also accepts children that can be an `object` , a `string` or multiple children. We need to support multiple children for that we will use [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

```js
function createElement(type, attr = {}, ...children) {
  let elm = document.createElement(type);
  for (key in attr) {
    elm[key] = attr[key];
  }
  children.forEach(child => {
    // elm can be a string or an object. We need to createTextNode when it's string append when object.
    if (typeof child === 'string') {
      let childElm = document.createTextNode(child);
      elm.append(childElm);
    } else if (typeof child === 'object') {
      elm.appennd(child);
    }
  });
  return elm;
}
// Example
let h1 = createElement('h1', { className: 'heading' }, 'Hello');
let div = createElement(
  'div',
  { className: 'main' },
  createElement('span', null, 'Check Passed! ✅')
);
```

---

Now let's use this function to create structure dynamically.

```html
<div class="container" id="main">
  <ul class="lists">
    <li class="list">one</li>
    <li class="list">two</li>
    <li class="list">three</li>
  </ul>
</div>
```

```js
const div = createElement(
  'div',
  { className: 'container', id: 'main' },
  createElement(
    'ul',
    { className: 'lists' },
    createElement('li', { className: 'list' }, 'one'),
    createElement('li', { className: 'list' }, 'two'),
    createElement('li', { className: 'list' }, 'three')
  )
);
```

---

**BONUS:** Try creating the table you created using `createElement`

---

Full code will look something like this:

```html
<body>
  <div id="root"></div>
  <script>
    function createElement(type, attr = {}, ...children) {
      let elm = document.createElement(type);
      for (key in attr) {
        elm[key] = attr[key];
      }
      children.forEach(child => {
        if (typeof child === 'string') {
          let childElm = document.createTextNode(child);
          elm.append(childElm);
        } else if (typeof child === 'object') {
          elm.appennd(child);
        }
      });
      return elm;
    }

    // creating the element
    const mainElm = createElement(
      'div',
      { className: 'container', id: 'main' },
      createElement(
        'ul',
        { className: 'lists' },
        createElement('li', { className: 'list' }, 'one'),
        createElement('li', { className: 'list' }, 'two'),
        createElement('li', { className: 'list' }, 'three')
      )
    );
    // mounting to DOM
    let root = documnet.getElementById('root');
    root.append(mainElm);
  </script>
</body>
```

---

React provides a function that acts similar to `createElement` with the same name. So we will add two library named React and ReactDOM using script tag.

- **React** for creating react elements (like in JS we used `document.createElement`)
- **ReactDOM** for interacting with the DOM (like we used `append` to add elements)

To create an element in React provides `createElement` function similar to `document.createElement`. For creating `<h1>Hello World!</h1>` we need a `h1` tag and `Hello World!` as children. There is no properties.

To append/mount the React element created by `React.createElement` we will use `ReactDOM`. ReactDOM provides a method named `render` that accepts two parameter `what` to append and `where` like `ReactDOM.render()`

Delete `createElement` and change it to `React.createElement`

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
  <script>
    // creating the element
    const mainElm = React.createElement(
      'div',
      { className: 'container', id: 'main' },
      React.createElement(
        'ul',
        { className: 'lists' },
        React.createElement('li', { className: 'list' }, 'one'),
        React.createElement('li', { className: 'list' }, 'two'),
        React.createElement('li', { className: 'list' }, 'three')
      )
    );
    // mounting to DOM
    let root = document.getElementById('root');
    ReactDOM.render(mainElm, root);
  </script>
</body>
```

Our `createElement` is very very similar to `React.createElement` function. [Link](https://github.com/facebook/react/blob/5fe97dbe19917b4c49618073ccc5632b593ec9fa/packages/react/src/ReactElement.js#L304).\*\*

#### `document.createElement` vs `React.createElement`

`document.createElement` accepts one parameter `type` and returns a DOM element of that type. You can pass types like `'a'`, `'p'`, `'div'` etc.

![document.createElement](/img/react/dom.png)

`React.createElement` accepts `type` of element `properties` of element in an object and `children`. It returns a new React Element of the given type. The passed type can be a string like `h1`, `'span'`, `'p'` etc.

![React.createElement](/img/react/react.png)

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

Convert above HTML into react element.

```js
// Your code goes here
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

You can think of React as HTML for dynamic content.

![](/img/react/HTMLvsReact.png)

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

![JSX](/Users/ankit/Documents/work/js_altcampus/react-docs/hello-world/assets/compiled.png)

There are few thing you need to keep in mind when you are writing JSX in comparision to HTML.

![JSX vs HTML](/Users/ankit/Documents/work/js_altcampus/react-docs/hello-world/assets/jsx-vs-html.png)

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

Even writing the UI using createElement for complex UIs will be a challange so instead of this we want to write similar to how we write in HTML so using `babel` we can write in the structure similar to HTML. That is called `JSX`.

### Keeping the UI in sync with the state is very hard.
