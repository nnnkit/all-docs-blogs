---
id: hello-world
title: Hello World!
---

To run any piece of code we need specific environment. Browsers understand JS so we ca directly write JavaScript code in browser. Let's do this.

To add JavaScript code in out HTML file we need a `script` tag. As soon as you open the html file it will load the JS from the `script` tag and execute it.

```html
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <script>
      // Your JavaScript
      alert('Hello World!');
    </script>
  </body>
</html>
```

If we have lots of JavaScript we can put the code into a seprate file. To add that file in our HTML we will use the same `script` tag with a `src` attribute like shown below. We use `.js` extension to define a JavaScript file.

```js
alert('Hello World!');
```

```html
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

## writeCode

1. Create a html file.
2. Using script tag add javascript to `alert` your name.

## writeCode

1. Create a html and a javascript (.js) file.
2. Using script tags and `src` attribute add JavaScript to `alert` your name.
