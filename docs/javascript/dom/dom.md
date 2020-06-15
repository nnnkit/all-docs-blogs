---
id: dom
title: Document Object Model
---

The Document Object Model, also known as DOM, plays a big role in making the website interactive. `DOM` is an interface that can be used to manupulate the contnet, style, structure or the behaviour of the web page using a programming language like JavaScript.

## What is DOM?

To understand HTML browser parses the HTML tags into an object, combines it with some ways of manupulating it and forms a object representation called DOM.

`<h1 class="heading" id="main">Hello World</h1>` is an HTML tag that can be converted into an object representation like

```js
{
  tagName: "h1",
  innerText: "Hello World",
  className: "heading",
  id: "main"
}
```

- For DOM every HTML tag is an object.
- Nested tags like `<div><p>Hello</p></div>` becomes `children` of the parent tag.
- HTML is converted into a tree representation also known as DOM tree.

**It also adds lots of other properties and ways of manupulating them.**

Example:

```html
<html>
  <head>
    <title>Learning DOM</title>
  </head>
  <body>
    <h1>DOM</h1>
    <p>Document Object Model</p>
  </body>
</html>
```

Create a `index.html` file add the above code and open it in the browser. Open console and try accessing these properties.

- `document` you will see whole HTML of the page. `document` entry point of the page.
- `document.head` gives you access to the `head` of the page.
- `document.body` gives you access to the `body` of the page.
- `document.title` gives you access to the title of the page.
- `document.body.style` gives you access to the style of the body.

Using any of the above property you can maupulate the DOM tree of the page.

```js
document.title = 'Learnign to maupulate the DOM';
document.body.style.color = 'tomato';
document.body.style.backgroundColor = 'black';
// There are two children of body
document.body.children[0].style.color = 'yellow'; // changes the color of the h1
document.body.children[1].style.color = 'blue'; // changes the color of the p
```

### DOM Nodes

DOM tree consists of multiple kind of nodes

1. Text Node
2. Element Node: All the HTML element like `div`, `p`, `span`, `input` are called element node.
3. Comment Node

To see the DOM Tree of of any HTML go to this [link](http://software.hixie.ch/utilities/js/live-dom-viewer/) and play around.
