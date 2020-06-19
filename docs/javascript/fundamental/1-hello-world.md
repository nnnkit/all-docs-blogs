---
id: hello-world
title: Hello World!
---

While learning any programming language we need to know how to run the code that we write? To execute, we need an environment that understands the language we are learning. Best thing about JS is browsers can understand it. So, we will use that to execute the code.

Let's start by writing our first JavaScript program to show `Hello World!`.

The program in JS is called **script**. We can write JS directly in an HTML using a special element `script`. When browser loads the HTML file and encounters the `script` tag, code inside it gets executed automatically.

To write our first program:

- We will use `script` tag to add JavaScript.
- To show `Hello World` in browser, we will use a special command provided by browser called `alert`.
- You also need to pass some message to alert, like in this case it's `Hello World!`.

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

If we have lots of JavaScript, we can put the code into a separate file. To add that file in our HTML, we will use the same `script` tag with a `src` attribute like shown below. We use `.js` extension to define a JavaScript file.

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

### Developer console

Now, we can execute JavaScript using `script` tag in `html` file. What if I tell you this is not the simplest way of testing any JavaScript code.

You can also use the `console` tab in developer tools of any browser. Like I am using `Chrome Browser`. In that you can right click on any page and click on `inspect`.There, in the opened panel, you can see `console`. You can type JavaScript code and it will be executed. Try the code below.

```js
alert("Hello World!");
```

![Table](/img/value/dev-tools.png)

# Exercises

## JavaScript in HTML file

1. Create an html file.
2. Using script tag, add JavaScript to your HTML file.
3. Use `alert` command and show the message `Hello [Your Name]`

## External JavaScript file

1. Create an html and a javascript (.js) file.
2. Using script tag and `src` attribute, add JavaScript to `alert` your name.
