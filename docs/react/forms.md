---
id: forms
title: Forms
---

Input fields, checkboxes, radio buttons or text areas is makes taking input from user very handy. These are input elements of different types. All these elements maintains their own state. Like when you type someting in an input field it holds the value in `element.value` property. Similarly other elements like checkboxes or radio buttons also holds their state in DOM.

Sample form:

```jsx
<form>
  <label htmlFor="email">Email</label>
  <input type="email" id="email" />
</form>
```

Handeling a form is one of the most common part of making any application or web pages. There are different ways of handeling forms in React we will learn about two ways of doing that:

1. Controlled Component (control the state of element using react state)
2. Uncontrolled Component (traditional HTML form use `ref` to get the value)

## Controlled Component

In HTML elements like `input`, `textarea`, and `select` maintains their own state and update it based on user input. Like think about an input element you type something and you can see what you are typing in the field. In React application we can have our own state. We can put the value of the input in component `state` and when state changes using `setState` it will re-render. In that way you can control the input of the form.

Controlled component is when you controls the state of an d`input`, `textarea` or `select` using the react's state. As the value changes in input you save the value in react state.

In this way of handeling forms component can respond to the input immediately like for validation, disabiling the button unless all fields are valid etc.

```jsx
class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }
  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
```

In above example you can see

- We are storing the input value in out state `inputText`.
- When user is typing using `onChange` event handeler we are calling the function `handleChange`.
- Using the event object we are updating state `inputText` using `setState`.
- When state updates the component re-renders and we bing the value of the input field usign `value` attribute of input element.

This is how you make a controlled component for input field. We will see example of other elements like `checkbox`, `select` etc.

### textarea element

```jsx
class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write something.',
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

### select element

```jsx
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'football' };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert('Your favorite sports is: ' + this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite sports:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="hockey">Hockey</option>
            <option value="cricket">Cricket</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Handeling Multiple Elements

```jsx
class UserLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form>
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Password</label>
        <input
          type="email"
          id="email"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

In above example we are add `name` property to both the input element. Using the name property of different forms we are updating the state. When state is changing the component is re-rendering and the value of the form is updating.

### file input

Input type file `<input type="file" />` let's you choose one or multiple files from you system to be uploaded. You can't set the value of if programmatically like we were doing in other element using `value` attributes. This is for security reasons.

You cannot set the value of a file picker from a script — doing something like the following has no effect:

```js
const input = document.querySelector('input[type=file]');
input.value = 'foo';
```

So, if we can't se the value of an element we can't make it controlled component. For these situations we use something called as Uncontrolled component (you can't control the value of input programmatically).

In these situations we use something called as `ref` and store the value in an special box created using `createRef`.

1. `createRef` creates a box and initializes with an object `{current: undefined}`.
2. When you do `ref={this.fileInput}` the DOM object of the input element is put into `{current: input}`. Similar to how you select an element using `querySelector` in DOM.

```jsx
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(this.fileInput.current.files[0].name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" ref={this.fileInput} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
