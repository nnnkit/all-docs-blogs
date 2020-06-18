---
id: condition
title: Condition
---

Suppose we want to write a program that alert saying `Number is evan` for evan number and alert `Number is odd` for odd number.

```
  if numer is even
    alert "Number is evan"
  else
    alert "Number is odd"
```

The above operation can be written as eiter the number is evan or odd. One of the two situation will be correct. In situation like this where the output depends on the specific condition we use conditions.

To implement condition in JavaScript we use `if` statement. Above logic can be converted into code like this:

```js {1, 3}
if (condition) {
  // execute when condition returns truthy value
} else {
  // Executes when the condition returns falsy value
}
```

- The `if` statement evaluates the condition in the parentheses.
- If the result is `true` or any truthy value the first block of code is executed.
- If the result is `false` or any falsy value the `else` block of code is executed.
- `else` block is optional

```js
let num = 21;
if (num % 2 === 0) {
  alert("Number is evan!");
} else {
  alert("Number is odd!");
}
```

Truthy conversion. The value `10000` is a truthy value so you will see the alert message.

```js
if (10000) {
  // 10000 is a truthy value.
  alert("This will execute always.");
}
```

Falsy conversion. The value `null` is a falsy value. `alert` will not execute.

```js
if (null) {
  // null is a falsy value.
  alert("This will never execute");
}
```

### Multiple if else condition

There are times whe you have more than two consition like

- If the marks is greater than 80 return `awesome`.
- If the marks is between 50 - 80 return `good`.
- If the marks is less than 50 return `work hard`.

In situation like this we can use multiple `if..else` statement together.

```js
let score = 43;
if (score > 80) {
  alert("Awesome");
} else if(score > 50 && score < 80){
  alert("Good)
} else {
  alert("Work hard!")
}
```

There can be multiple `else if` block and the last `else` block is optional.

### Conditional operator `?`

The conditional operator is a shorte way of doing condition in javaScript.

```js
let num = 21;
if (num % 2 === 0) {
  alert("Number is evan!");
} else {
  alert("Number is odd!");
}
```

The above code can be converted uto use conditional operator `?` to amke the code shorter.

```js
let num = 21;
num % 2 === 0 ? alert("Number is evan!") : alert("Number is odd!");
```

```js
let isAdult = age > 18 ? true : false;
```

Syntax

```js
let number = condition ? value1 : value2;
```

The `condition` is evaluated and if the output of condition is `true` or truthy `value1` will be is returned otherwise `value2`. The `?` operator has very low presedance so `%` and `===` is executed first.

> In `?` conditional operator `value1` and `value2` is not optional.

`?` is also called ternary operator because the operator `?` has threee operand.

#### Multiple `?`

You can also use multiple `?` operator like this:

```js
let marks = 54;
let grade =
  marks < 40
    ? "Your grade is C"
    : marks < 60
    ? "Your Grade is B"
    : "Your grade is C";
```

#### `&&` instead of if or `?`

Below two code examples are equivalent. You can use `&&` on the place of `if` or `?` statement.

- `&&` looks for first `falsey` value so `alert` will only execute if the fist expression is a truthy statement.

```js
let age = 21;
if (age > 18) {
  alert("You are an adult.");
}
```

```js
let age = 21;
age > 18 && alert("You are an adult.");
```

### Switch Statement

Switch statement can be used on the place of multiple `if..else` statement.

For multiple `if..else` statement switch statement looks much ore cleaner.

Example:

- For value `1` return `ONE`
- For value `2` return `TWO`
- For value `3` return `THREE`
- For value `4` return `FOUR`
- For any other value return "NOT SUPPORTED"

Writing above requirements with `if..else` will make it harder to read.

```js
if (num === 1) {
  alert("ONE");
} else if (num == 2) {
  alert("TWO");
} else if (num == 3) {
  alert("THREE");
} else if (num == 4) {
  alert("FOUR");
} else {
  alert("NOT SUPPORTED");
}
```

You can write it using switch statement. This looks much cleaner and descriptive.

```js
switch (num) {
  case 1:
    alert("ONE");
    break;
  case 2:
    alert("TWO");
    break;
  case 3:
    alert("THREE");
    break;
  case 4:
    alert("FOUR");
    break;

  default:
    alert("NOT SUPPORTED");
}
```

How switch works:

- `num` will be compared with all the values of `case` one after another.
- If value of `num` and the value of `case` is equal the block of corresponding case will be executed until the nearest `break`. It compares `type` and `value` both just like `===`.
- In case there no match the block of `default` gets executed.

## Exercise

---

#### if..else

1. Write a program that asks the user for a number and check the following conditions :

- `if` the number is even print the message " number is even"
- `if` the number is odd print the message "number is odd"

2. Write a program to accept two numbers from user using `prompt` and alert the max value.

3. Convert the above code using `?` terniary operator

4. Write a program that asks the user for the house name and check the following conditions :

- `if` house name is "stark" then print the message " Winter is coming"
- `if` house name is "lannister" then print the message " A lannister always pays his debt"
- `else` print the message " All men must die"

#### Switch

- Write a program that takes the number of the month (1-12) and alert number of days in the month.
- Write a program that take the salery of the user using prompt and alert the in-hand amount. You will find out the in-hand amount by deducting the tax amoun from salery. Conditions are given below.
  - `Salary <= 20000` tax is 10%
  - `Salary <= 20000` tax is 20%
  - `Salary > 50000` tax is 30%

#### if..else vs switch

Implement the condition give below using `if..else` and `switch` statement.

- `marks > 100` alert `"Marks can't be greater than 100"`
- `marks > 80 && marks < 100` alert `"Grade A"`
- `marks > 50 && marks < 80` alert `"Grade B"`
- `marks > 30 && marks < 50` alert `"Grade C"`
- `marks > 0` alert `"Grade D"`

#### Logical Operators

Solve the following examples using logical operations. `(<, >, &&, ||)`.

```js
var vegetablesPrice = 54;
var cerealsPrice = 149;
```

- Find which one is costlier?
- Which item is cheaper?
- Check if the prices of both the items are equal.
- Define a new variable. Assign the price of vegetables to it.
- Calculate the average price of these two commodities.

#### Comparisoin

Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.

Example:

```js
21, 21; // true
21, "21"; // true
"21", "21"; // true
"hello", -21; // false
```
