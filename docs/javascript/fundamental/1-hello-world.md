---
id: hello-world
title: Hello World!
---

While learning any programming language we need to know how to run the code that we will write? To execute we need environment that understands the language we are learning. Best thing about JS is browsers can understand it so we will use that to execute the code.

Let's start by writing our first JavaScript program to show `Hello World!`.

The programs in JS is called **scripts**. We can write JS directly in a HTML using a special element `script`. When browser loads the HTML file and encounters the `script` tag code inside tag gets executed automatically.

To write our first program:

- We will use `script` tag to add JavaScript.
- To show `Hello World` in browser we will use a special command provided by browser called `alert`.
- You also need to pass any message for alert to show like in this case it's `Hello World!`.

```html {6-8} title="index.html" live
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <script>
      alert("Hello World!");
    </script>
  </body>
</html>
```

### External file

If we have lots of JavaScript we can put the code into a seprate file. To add that file in our HTML we will use the same `script` tag with a `src` attribute like shown below. We use `.js` extension to define a JavaScript file.

```js title="index.js"
alert("Hello World!");
```

```html {6} title="index.html"
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <script src="./[filename].js"></script>
  </body>
</html>
```

> Browser optimizes the external files by caching it.

# Exercises

## JavaScript in HTML file

1. Create a html file.
2. Using script tag add JavaScript to your HTML file.
3. Use `alert` command and show the message `Hello [Your Name]`

## External JavaScript file

1. Create a html and a javascript (.js) file.
2. Using script tags and `src` attribute add JavaScript to `alert` your name.
