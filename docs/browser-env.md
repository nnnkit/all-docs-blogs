---
id: browser-env
title: Browser Environment
---

To understand the DOM we need to first understand the browser environment. We will try to understand the environment provided by browsers that a developer can use for their purposes. JavaScript language was initially created for the browsers. But now you can use it on different platforms like server, drone, even a washing machine. We will try to understand how this all environment works.

A platform like browser, web-server, drone or wassing machine is called the host environment. An environment where JS will run. The job of the host is to provide the platform-specific functionalities. Like think of it like

- A browser needs to `alert`
- A washing machine needs a way to change washing mode.
- A web-server needs to access database
- A drone needs a to change direction.

Above mentioned functionalities needs to be provided by what is called as a Host environment. So, browser is a host environment. It provides functionalities like:

- loaction access
- history of the browser
- a way to get data from server
- alert
- log into console (console.log)

The structure of the browser broadly looks like this:

![window](./assets/window.png)

`window` is a global object and also known as the root of the browser. The window object contains all the properties needed for the browser. It can be categorised into thress parts.

For example:

When you define a function in browser it is stored in the `window` object. So you can access it like `window.add()` look at the example below. Or you can access the history of the browser like `window.history`.

```js
function add(a, b) {
  return a + b;
}

window.add();
```

- `DOM`: It stands for Document Object Model. It represents all the content on the page that is visible in the form of an object which can be modified or manupulated. It means whenever you want to change anything that is visible on the page you will have to change the DOM. In `window` exists another object named `document` which is the entry point to the visible page. On any page you can try accessing it but typing `window.document` or only `document`. If you want to manupulate the object you can change the values.

  ```js
  document;
  document.body.style.backgroundColor = 'tomato';
  ```

  In obove code we used the `backgroundColor` property to change the background color the whole page. You can do a lot more.

- `BOM`: It stands for Browser Object Model. It represents the features provided by the Host environment that is a browser for now. So features like

  - `location` gives you access to the location of the user.
  - `history` gives you access to the history of the web browser.
  - `navigator` gives you access to the basic info about the browser.
  - `screen` give you access to the screen size of the browser.
  - `XMLHttpRequest` give you way to get data form any other server.

There are many other functionalities provied by browsers.

- `JavaScript`: In browser you can write any JavaScript that you want

  ```js
  let username = 'Arya';
  let lastname = 'stark';

  function fullName(fn, ln) {
    return fn + ln;
  }
  let userFullName = fullName(firstname, lastname);
  ```
