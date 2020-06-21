---
id: function-expression
title: Function Expression
---

### Function Expression

```js
let number = 21;
```

In above example we are storing `21` into a variable named `number`. You can only store a `value` in a variable. Let's see what are the possible values we can store in a variable.

We can store these values:

- Any numbers - (`21, 21.23, NaN, Infinity`)
- Any Strings - (`a, "hello", etc`)
- Boolean
- `null`
- `undefined`
- Object
- Function (function is an object in JavaScript)

```js
let add = function sum(a, b) {
  return a + b;
};
```

In JavaScript function is an object. So if an object is a value function is also a value. If function is a value we can store them in a variable. In above example we are storing the function named `sum` into a variable named `add`. A function defination stored in a variable is called **Function Expression**.

```js
let add = function (a, b) {
  return a + b;
};
```

In above example we are storing a function with name `sum` in a variable called `add` so we will be accessing it through the variable name `add` so function name can be anonymous. In function defination name is optional. A function without name is called as **Anonymous function**.

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
let toSting = (num) => {
  return String(num);
};

// Arrow function without curly brackets (Implicit Return)
let toSting = (num) => String(num);
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

## Exercise:

---

#### Define a fucntion in different function types.

- Function declaration
- Named function expression
- Anonyomous function expression
- An arrow function
- Arrow function with curly brackets.

![Function Terms](https://github.com/AltCampus/js_function/blob/master/assets/function.jpg)
