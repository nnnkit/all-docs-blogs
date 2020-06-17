---
id: alert-prompt
title: Predefined Utilities
---

There are few predefined functions present in browser to help us interaction and debugging. We can use these utility functions to show any message, take input from user etc.

### console

Using `console.log` you can log any message in the developer tools console. We use it to debug the application if anything goes wrong. We will learn much more about `console` in debugging section.

```js
console.log("Hello World!");
```

### `alert`

Alert is used to display any message to user. It accepts any message in `string` data type. You have to click on `Ok` or press `Enter` to dismiss the message box.

```js
alert("Hello World!");
alert("Hello" + " " + "World!");
```

### `prompt`

Prompt is used to accept any input from the user. Prompt will open a diolog box with an input field where user can enter any value and press enter. You can store the value entered by user. Prompts always return `"srting"` data type.

```js
let username = prompt("What is your name?");
let age = prompt("What is your age?"); // "21"
```

Now if check the data type of the variable defined above i.e `username` and `age`. You will find out the both username and age is `"string"`. Even if user submits a number prompt will convert the entered value into string data type.

### `confirm`

It accepts a string data type as argument and shows a modal window in the browser with two buttons i.e `ok` and `cancel` . It returns `true` if user clicks `ok` or `false` if user click `cancel`

```js
confirm("Do you want to close is?"); // true
confirm("Is your age above 18?"); // true
```

## Exercise

---

#### Using alert, prompt, confirm

1. Do the following using `alert` function. When you find any square bracket change that to the real value of the variable.

```js
let num1 = 21;
let num2 = 32;
```

- Create a variable named `language` and store teh value of `JavaScript` in it.
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`

2. Do the following using `alert`, `prompt` and `confirm`

- Using prompt accept the name of the user and store it a variable names `userName`
- Using prompt accept the profession of the user and store it a variable names `userProfession`
- Using confirm check if user is adult or not and store the value in `isAdult`
- Alert message `I am [userName] a [userProfession]`

3. Addition using prompt

- Accept two number values form user and store them in `numA` and `numB`.
- Alert the sum of both numbers. [numA + numB]
- Alert [numA - numB]
- Alert [numA * numB]
