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

Handeling a form is one of the most common part of making any application or web pages. There are different ways of handeling forms in React we will learn about two ways of doing that 1. Controlled Component 2. Uncontrolled Component.

## Controlled Component

In HTML elements like `input`, `textarea`, and `select` maintains their own state and update it based on user input. Like think about an input element you type something and you can see what you are typing in the field. In React application we can have our own state. We can put the value of the input in component `state` and when state changes using `setState` it will re-render. In that way you can control the input of the form.

Controlled component is when you controls the state of an d`input`, `textarea` or `select` using the react's state.

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
