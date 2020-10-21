---
id: function
title: Function
---

## What is a function?

Functions are the building block of JavaScript programming. The concept of wrapping a series of steps to perform a specific task or returns a value is very powerful. Once wrapped, you can call it numerous times. This helps us in structuring our app without repeating making the app more modular and efficient.

Imagine you want to brush your teeth to do that you will have to perform these steps::

1. Walk to the basin
2. Pick up your tooth brush
3. Take the lead off the toothpaste 
4. Squieeze the toothpaste on to your brush
5. Brush your teeth

In short you name this series of steps as "Brush yout teeth". Now in future whenever someone says brush your teeth you know what steps you have to take to perform the task. This is exactly what a function is.

#### Function syntax

Syntax of defining a function

```js
function nameOfFunction() {
  // function body
}
// Executing a function
nameOfFunction();
```

- `function` is a keyword that inform JavaScript that you want to store series of steps.

- `functionName` is the name of the function. In the example given above, the function name could be `brushYourTeeth`.

- `function body` will contain the series of steps.

- `nameOfFunction()` this is how you execute a function. Executing a function is like as soon as someone says brush your teeth you go ahead and execute the series of steps we mentioned above.

---

We can take a another example from programming world. Let's try adding two numbers

1. Take first number from user
2. Take second number from user
3. Store the sum of number one and number two.
4. Alert the value of sum

Let us convert the steps into code:

```js
// 1. Take first number from user
let num1 = prompt("Enter first number");
// 2. Take second number from user
let num1 = prompt("Enter second number");
// 3. Store the sum of number one and number two.
let sum = Number(num1) + Number(num2);
// 4. Alert the value of sum
alert(sum);
```

What if we want to perform the same task again and again. Wouldn't it be good if we can give a name to the series of steps? Functions let you do exactly that.

#### Declaring functions

```js
function sum() {
  let num1 = prompt("Enter first number");
  let num1 = prompt("Enter second number");
  let sum = Number(num1) + Number(num2);
  alert(sum);
}
```

You create a function using the keyword `function` followed by the name of the function (`sum`). Between the opening and closing brackets `{}` is the body of the function. In the body of the function you put the series of steps.

#### Using a function

To use a function you will have to execute to execute or call or invoke it. To call a function you have to add `()` in-front of the function name.

```js
sum();
```

As soon as you call/execute a function. The series of steps stored in the body will be executed. It will prompt for first numbet tham second number sum them and alert the value of sum.

### Takeaway points:

- Function is a store of steps you take to perform any specific task.
- You define a function usinf `function` keyword.
- Every function requires a name to label it.
- You can execute a function by adding `()` in-front of function name.
- Once you define a function you can call it multiple times.

### Understanding Scope

#### Variable inside the function

Variable defined inside the function body can only be accessed from the function. We can't access it from outside.

```js {2,3,6}
function sum() {
  let num1 = 21;
  let num2 = 200;
}

console.log(num1, num2); // num1 and num2 can not be accessed
```

We can define variable inside the function body, like in above example we defined `num1` and `num2`. **The variable defined inside the function body can not be accessed from outside**

#### Variable outside the function

Variable defined ouside of the function can be accessed from the function body.

```js {1,3}
let user = "Sam";
function sum() {
  console.log(user); // user can be accessed
}
```

Function body can access the variable defined outside. Like in above case we can access the variable `user` defined outside the funciton.

### Same variable outside and inside

```js {3, 4, 7}
let user = "Sam";
function sum() {
  let user = "AltCampus";
  console.log(user); // user is "AltCampus"
}

console.log(user); // user is "Sam"
```

If the name of the variable outside the function is same as the variable inside the function (`user`), the value inside the function will be `"AltCampus"` and outside it will be "Sam".

### Function parameters

```js
function fullName(firstName, lastName) {
  alert(firstName + lastName);
}

fullName("Arya", "Stark");
```

We can make funciton more powerful by passing values to function using parameter. In the example above the function `fullName` has two parameter `firstName` and `lastName`. `firstName` and `lastName` are placeholders. The real values will be assigned to placeholders when the function will be executed.

When the function is executed `fullName("Arya", "Stark")` the value passed while calling the function will will assigned to `firstName` and `lastName`. firstName will become `Arya` and lastName will become `Stark`.

A JavaScript function can have any number of parameter. In below example you can see the example of function accepting 0, 1, and 2 parameters.

```js
// Zero parameter
function noParam() {
  alert("No Parameter");
}
// One parameter
function oneParam(message) {
  alert("One parameter", message);
}
// Two Parameter
function fullName(firstName, lastName) {
  alert(firstName + lastName);
}

noParem(); // "No Parameter"
oneParam("Hello"); // "One Parameter" "Hello"
fullName("Arya", "Stark"); // "AryaStark"
```

The value passed while calling the function `oneParam("Hello")` is known as **Parameters**.
`message`, `firstName`, and `lastName` are parameters.
`"Hello"`, `"Arya"`, and `"Stark"` are arguments.

> The placeholders (`message`, `firstname`) are called parameter. But the real values (`"Hello"`, `"Arya"`) are called arguments.

```js
function fullName(firstName, lastName) {
  alert(firstName + lastName);
}

fullName("John"); // "Johnundefined"
```

In above example we are passing only one argument (`"John"`) but we are accepting two parameter (`firstName` and `lastName`). In this case the value of `lastName` will be initialized with `undefined`.

`firstName` is `"John"`
`lastName` is `undefined`

`firstName + lastName` will be `"John" + undefined` output will be `"Johnundefined"`.

That was not something that we were expecting, Right? Let's fix this.

### Default Parameter

To fix the problem we faced above we can use default parameters.

```js {1}
function fullName(firstName = "", lastName = "") {
  alert(firstName + lastName);
}

fullName("John"); // "John"
```

In the function defination now we are doing `firstName = ""`, which makes the `firstName` parameter default to `""` empty string when the value is not passed. In our case `fullName("John")` we are not passing the value for `lastName` so the output it will default to `""` (empty string)

So now the output will be `"John"` mush better than `"Johnundefined"`.

```js
function sum(firstNum = 0, secondNum = 0) {
  return firstNum + secondNum;
}

sum(200); // 200
sum(undefined, 200); // 200
sum(undefined, undefined); // 0
```

### Function Return

```js
function fullName(firstName, lastName) {
  return firstName + lastName;
}

let arya = fullName("Arya", "Stark");
let john = fullName("John", "Snow");
```

A function can also return a value using the `return` keyword. In above example we are returning the `firstName + lastName` from the function. When the function execution reaches the `return` keyword it evaluates whatever is on the right hand side of `return` and and evaluated value is returned.

- When function is called `fullName("Arya", "Stark")` the value `Arya` and `Stark` will be assigned to the placeholder `firstName` and `lastName`.
- When ececution reahes the return keyword `firstName + lastName` will be evaluated to `AryaStark`.
- The return keyword will return the value `AryaStark`
- The function execution resulted into `AryaStark`
- `AryaStark` will be assigned to the variable `arya`.

### Thinking in function

![Function](/img/value/toaster.jpg)

A toaster is like a function, It accepts a slice of bread as input (argument), toasts your bread(function body) and returns the toasted bread as output (return keyword).

A function accetps an input, process it and returns an output.

```js
function add(num1, num2) {
  alert(num1 + num2);
}
```

In above example there is no return keyword. So the function returns `undefined` by default.

> Every function execution return a value. If there is no return keyword it returns `undefined` by default.

### Takeaway Points:

- Values can be passed into functions using arguments and used within the function body.
- Function can have any number of parameters.
- Functions can return a value using `return` keyword.
- Function can only 'take in' a **value** and return a **value**.
- **Functions are object in JavaScript.**

![Function Terms](https://github.com/AltCampus/js_function/blob/master/assets/function.jpg)

## Exercise

---

#### Function

Define a function that does the following:

- Let user enter a name using `prompt`
- Using alert display `Hello Name`
- Now convert the name to `uppercase` letter using `.toUpperCase()` function like `"hello".toUpperCase()`
- If the name of user is `Sam` instead of `Hello Sam` say `Welcome Sam`.

#### Default Parameter

1. Convert the below function to accept default parameter to fix the issue. Now when we are calling the function the output is `NaN` but we want the output to be `2`, `200` and `444` respectively.

```js
function multiplyTwoNumbers(a, b) {
  return a * b;
}
multiplyTwoNumbers(2); // "NaN"
multiplyTwoNumbers(200); // "NaN"
multiplyTwoNumbers(undefined, 444); // "NaN"
```

2. Define a function to accept a name and return `Hello [name]` and if the name is not passed it should return `Hello User`. Use default parameter.

```js
function greet() {}

// TEST

greet("Sam"); // Hello Sam
greet(); // Hello User
```
