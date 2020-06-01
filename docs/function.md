---
id: function
title: Function
---

## What is function?

- Function is a store of steps you take to perform any specific task.
- You can execute a function by adding `()` in-front of function name.
- It can "take in" data, process it and return a result.
- Function can only 'take in' a **value** and return a **value**.
- Once you define a function you can call it multiple times.
- Values can be passed into functions and used within the function.
- Functions always return a value. In JavaScript, if there is no return statement it will return `undefined`
- **Functions are objects.**

For example you want a function to take two input from user and convert the value in number and sum them. So the steps to do this would be

1. Take a number using `prompt` from user and store them in variable named `numA`
2. Take another number and store them in variable called `numB`
3. Prompt the sum of the `numA + numB`

In code it will be:

```js
let numA = Number(prompt('Enter first number.'));
let numB = Number(prompt('Enter second number.'));
let sum = numA + numB;
alert(sum);
```

Using function we can wrap the steps so we can call it multiple times. To define a `function` we use `function` followed by the name of the function. You should choose a name that is readable.

```js
function nameOfTheFunction(parameters) {
  // function body
  // steps
}
```

In the body we can add the steps from above:

```js
function add() {
  let numA = Number(prompt('Enter first number.'));
  let numB = Number(prompt('Enter second number.'));
  let sum = numA + numB;
  alert(sum);
}
```

To call the function we use `()` after the function name. It's also called function invocation or function call. Once you invoke the function all the steps will be executed.

```js
add();
```

### `return` statement

Function always return a value and we use the `return` keyword to return a vlue from function. If you are not using `return` statement the function returns `undefined` by default.

```js
function answerToLife() {
  return 42;
}
```

When we call the above function (`answerToLife()`) it will return `42` as a value.

### Parameters vs. Arguments.

Parameters are used while defining a function to create placeholders inside a fucntion. You can define multiple placeholders seperated by comma. In the below example you `numA` and `numB` is the **parameters**.

```js
function add(numA, numB) {}
```

When you call the above function like `add(21,22);` you pass the value i.e 21, 22 for the placeholder `numA` and `numB`. The value you pass while executing the funtion is called **Arguments**.

**You can only pass a `value` (Expression) as an arguments while calling function and a function can only return a `value`(Expression) not statement like `if` `while` or `for` etc.**

## Function-writeCode

Define a function that does the following:

- Let user enter a name using `prompt`
- Using alert display `Hello Name`
- Now convert the name to `uppercase` letter using `.toUpperCase()` function like `"hello".toUpperCase()`
- If the name of user is `Sam` instead of `Hello Sam` say `Welcome Sam`.

### Function Expression

You can store `value` in a variable and function in JS are objects and object is value. So you can also store a function in a variable. This kind of function where you store them like an expression in a variable is called _function expression._

Example:

```js
var add = function sum() {
  return 21;
};
```

In above example you are storing a function with name `sum` in a variable called `add` so you will be accessing it through the variable name `add` so function name can be anonymous.

```js
var add = function () {
  // function with no name (anonymous function)
  return 21;
};
```

There are multiple forms of function expression

### Arrow Function Expression

```js
var add = () => {
  return 21; // explicit return
};
```

Arrow function is always a anonymous function.

```js
var add = () => 21; // implicit return
```

### Fucntion Types:

Read through the below example to understand different types of functions.

Define a function that accepts a `number` and `returns` string converting the number into string.

```js
// Function Declaration
function toString(num) {
  return String(num);
}

// Named Function Expression (you call the function with the variable name not function name)
let toSting = function convertToString(num) {
  return String(num);
};

// Anonyomous Function Expression (no name to function, call it by variable name)
let toSting = function (num) {
  return String(num);
};
// Arrow function with curly brackets (Arrow functions are always ananyomous)
let toSting = num => {
  return String(num);
};

// Arrow function without curly brackets (Implicit Return)
let toSting = num => String(num);
```

## Function Types-writeCode

```js
function addOne(num) {
  return num + 1;
}
let twenty = addOne(19);
```

Convert the above function into the following function expressions.

- Named function expression
- Anonyomous function expression
- An arrow function
- Arrow function with curly brackets.

## Function Types-writeCode

Define a fucntion in different function types.

- Function declaration
- Named function expression
- Anonyomous function expression
- An arrow function
- Arrow function with curly brackets.

![Function Terms](https://github.com/AltCampus/js_function/blob/master/assets/function.jpg)
