---
id: selecting-element
title: Selecting Element In DOM
---

To manupulate anything in the DOM we need to first select the specific element first. Only after selecting it we can manupulate it.

```html
<html>
  <head>
    <title>Learning DOM</title>
  </head>
  <body>
    <div id="main">
      <h1 class="heading">DOM</h1>
      <p>Document Object Model</p>
    </div>
  </body>
</html>
```

The structure of the `document` will look something like this.

```js
{
  children: [
    {
      tagName: 'HTML',
      children: [
        {
          tagName: 'HEAD',
          children: [{ tagName: 'TITLE', innerText: 'Learning DOM' }],
        },
        {
          tagName: 'BODY',
          children: [
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'H1',
                  innerText: 'DOM',
                },
                {
                  tagName: 'P',
                  innerText: 'Document Object Model',
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
```

So how do you select any element you want to change like if we have to select `h1` element and change the `innerText` of "DOM" or "What is DOM?". So to do that we will first select

- `document` beacuse it is the entry point of the DOM.
- `document` has one children `html`
- `html` has two children head and body
- we care about `body` and it has one children `div`.
- `div` has two children `h1` and `p`
- we need `h1`

In code it will look something like this:

```js
let html = document.children[0];
let body = html.children[1];
let div = body.children[0];
let h1 = div.children[0];
// To maupulate the innerText of h1 (h1 is an object)
h1.innerText = 'What is DOM?';
```

But selecting a DOM node like this not going to work for complex structure. So `document` has given us some predefined methods to smake our life easier. Those methods are

### querySelector

`document.querySelector()` accepts a string parameter and returns a single element you are selected.

- `document.querySelector('h1');` You are selecting the first `h1` tag in the document.
- `document.querySelector('.heading');` You are selecting the first element with class `heading` in the document.
- `document.querySelector('#main');` You are selecting the first element with id `heading` in the document.
- `var el = document.querySelector("div.user-panel.main input[name='login']");` Selectors can also be really powerful. Here, the first `<input>` element with the name `"login"` (`<input name="login"/>`) located inside a `<div>` whose class is `"user-panel main"` (`<div class="user-panel main">`) in the document is returned:

- It can accept any parameter you write while selecting element in `CSS`.
- It will return `undefined` if the element you are selecting does not exsit.

### querySelectorAll

`document.querySelectorAll()` behaves similar to `querySelector` but instead of one element it returns collection of elements in an Array like structure.

- For maupulating you need to select the element from the array that `querySelectorAll` returns.

**`querySelector` return a element and `querySelectorAll` returns a collection of elements. You manupulate element not the collection**

## Walking the DOM

C0nsider this example:

```html
<html>
  <head>
    <title>Learning DOM</title>
  </head>
  <body>
    <nav></nav>
    <div class="container">
      <main>
        <div id="main">
          <h1 class="heading">DOM</h1>
          <p>Document Object Model</p>
        </div>
      </main>
      <footer>
        2020 All right reserved.
      </footer>
    </div>
  </body>
</html>
```

After selecting the element you can walk to the parent, child, sibling or other element.

![Walking DOM](../assets/walking-dom.png)

## TODO add task for walking the DOM and selecting the elements
