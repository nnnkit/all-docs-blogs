---
id: events
title: Events
---

Event are actions like click, moving mouse, type performed by the user or the browser itself. These are some common events

- User clicking on a button or other element `click`
- User typing in the input box `keydown` and `keyup`
- User hover over button or move the cursor `mouseover`, `mouseout`, `mouseup`, `mousedown`
- User sbumits a form `submit`
- User focus the form `focus`
- The page of the content is fully loaded `DOMContentLoaded`
- When css transition ends `transitionend`

When user performs any of the above listed action you can react to that specific action by manupulating the DOM. Like

- When user click on the `button` change the background of the page.
- When user presses `enter` add content to list.
- When you hover over button change the border of the box. etc

So, to react to the event you need a event handeler. Handeler is a function that will executes on event. You can set the event handeler on the HTML element.

```html
<button onclick="alert('You clicked me!')">Click Me!</button>
```

```html
<button>Click Me!</button>
<script>
  let button = document.querySelector('button');
  button.onclick = function () {
    alert('You clicked me!');
  };
</script>
```

The most important thing to understand when using `button.onclick` assign a function reference not function call. Because the function needs to be called when click happens and `onclick` is responsible for calling the function not you.

Adding multiple event on same element replaces the old event.

```js
button.onclick = function () {
  alert(1);
};
button.onclick = function () {
  alert(2);
}; // replaces the previous handler
```

This way of assigning a handler to is not the best way to handle. The code is not very readable, maintainable. To know more about wny not to use inline read [here](https://robertnyman.com/2008/11/20/why-inline-css-and-javascript-code-is-such-a-bad-thing/).

So we will learn about another approche. `addEventListener`

### `addEventListener`

Understanding some of the limitations with inline event handeler. `addEventListener` and `removeEventListener` is a way to solve those problems.

Syntex: `element.addEventListener(event, handler,[options]);`

- `event`: Type of even like `click`, `keyup`, `keydown`, `mousemove` etc.
- `handler`: Function reference that will be called on event
- `options`: Additional options for event

  - `once`: if true, then the listener is automatically removed after it triggers.

  - `capture`: the phase where to handle the event, to be covered later in the chapter Bubbling and capturing.
  - `passive`: if true, then the handler will not call preventDefault(), we’ll explain that later in Browser default actions.

`addEventListener` is a higher order function that accepts two parameter the type of event like 'click', 'mousemove', 'keyup' etc and a function reference that will be called when event happens.

Example:

```html
<button>Click Me!</button>
<script>
  let button = document.querySelector('button');
  function handleClick() {
    alert('You clicked me!');
  }
  //Using addEventListener (handleClick is a function reference not function call)
  button.addEventListener('click', handleClick);
</script>
```

To remove a event handler you use `removeEventHandler`

Syntex: `element.removeEventListener(event, handler, [options]);`

`removeEventListener` need the same function passed to `addEventListenr`

```js
function handleClick() {
  alert('You clicked me!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```
