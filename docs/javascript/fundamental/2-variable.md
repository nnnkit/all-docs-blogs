---
id: variable
title: Variable
---

### Variable (Storing a value)

Variable is a named storage that is used to store any value. The name of the variable represents the value that variable holds. It is called **variable** because the stored value can be manipulated or changed using operations on the variable.

You can think of a variable to be like a box with name that is used to store any value like number, boolean, string, null, undefined, object, BigInt or Symbol.

Example:

```js
let username = "Arya";
```

In the above code, we are using multiple things. Let's understand all of those.

- `let` Keyword to create a new box.

- `username` To name a box.

- `=` assignment operator assigns value `"Arya"` to the box named `username`

![Store of value](/img/value/variable-box.png)

![variable](/img/value/variable-var.png)

To access the values stored in any variable we use the name of the variable.

```js
let age = 21;
let isAdult = true;
let campusInfo = {
  name: "AltCampus",
  members: 100,
};

alert(age); // will show 21
alert(isAdult); // will show true
alert(campusInfo.name);
```

> We use `.` to access any key of the object.

**On the right hand side of `=`, there can only be a value.**

You can also change the value of a variable using `=` (assignment operator) like below:

```js
let username = "Arya";
username = "John";

let age = 21;
age = 24;
```

The value of username i.e. `"Arya"`, will be replaced with `"John"` and the value of age i.e. 21, will be replaced with 24. This is called re-assignment.

![Re-assignment](/img/value/re-assignment.png)

> Variable can hold only one value at a time. You can't assign multiple values to the same variable.

There are multiple ways of creating a box (variable) in JavaScript i.e `var` , `let`, `const`

You can create boxes using multiple ways but all the boxes behave differently.

```js
var username = "Arya";
let house = "Stark";
const brother = "John";
```

1. `var`
2. `let`:
3. `const`

Box created with const keyword can't be re-assigned to another value. In other words, once it has been declared, the value of a `const` variable can not be changed ever, i.e, it remains constant.

- Variable defined with `var` and `let` can be re-assigned.
- Variable defined with `const` can be re-assigned.

```js
var username = "Arya";
username = "John"; // ✅
let house = "Stark";
house = "Lannister"; // ✅
const brother = "John";
brother = "Bran"; // ❌
```

You can't re-assign the value of variable defined with `const` keyword.

There are few other differences between them. We will learn about them in future lessons.

### Template literal with variable

Template literal let you create string using values from variable.

```js
let username = "Arya";

alert(`I am ${username}`);
```

In the above code `${}` syntax allows us to put an expression (anything that results into a value like 1 + 2) in it. Like, in above code, the output will be `I am Arya`. The value of username will be replaced with the value of the variable. You can put any kind of expression.

```js
let price = 100;
let quantity = 10;

let total = `The total prices is ${price * quantity}`;
```

### Variable Naming

Do's and dont's of naming a variable.

- The name must contain only letters, digits, or the symbols `$` and `_`
- The first character must not be a digit.
- Variable names are case sensitive.
- There is a list of reserved named that can't be used in naming varibale like `let`, `var`, `const` etc.

Valid variable names:

```js
let userName; // ✅
let age; // ✅
let $user; // ✅
let _school; // ✅
```

Invalid variable name:

```js
let 1user;  // ❌
let user-name; // ❌
let my-age; // ❌
```

### Variable naming conventions

Variable naming is one of the most important and complex skills in programming. We should follow some conventions followed by the JavaScript community to name the variable properly.

Conventions are accepted standard that people follow to make their life easier. It's not hard and fast rule.

- Variable should be self-descriptive
- Use `camelCase` to join multiple words
- Variable name should describe the data that it stores.
- Don't name variables `a`, `test123` etc.

> In camelCase, first word starts with lowercase letter and each word after that starts with uppercase letter.

```js
// BAD
let value = "Arya";
let val = "Arya";
let firstname = "Arya";

// GOOD
let firstName = "Arya";
let isAdult = false;
let fullName = "Arya Stark";
```

- If the value is never going to change (constants), or the value is hard coded, make variable name to be UPPERCASE.

```js
const PI = 3.14;
const COLOR_RED = "tomato";
```

## Exercise

---

#### Storing a value

Follow naming convention while defining variable names.

- Define 5 variables and store different string values.

- Define 5 variable and store different number values.

- Define 10 variables and store any kind of value in it. It should cover all, at least one value of each data type.

#### Accessing and assigning.

```js
let firstName = "Arya";
let lastName = "Stark";
```

- Alert the value of the firstName.
- Alert the value of the lastName.
- Assign a new value of `"John"` to firstName.
- Assign a new value of `"Snow"` to lastName.
- What will be the value of `firstName` and `lastName`?
- Create a new variable using `const` named `fullName` and assign value to fullname using firstName and lastName separated by space.

#### Do the following

- Declare three variables `name,` `newUser` and `isAdmin`.
- Assign your name as the value of `name`.
- Reassign the value of `name` to `newUser`.
- Set the value of `isAdmin` to `true`.
- Alert the values of all three variables.

#### Assignment and re-assignment

Follow instructions and do the following. In case of an error write the error in your own words.

```js
var wiseMan = "Tyrion Lannister";
```

- Reassign the value of `wiseMan` to "Samwell Tarly"
- Declare a variable `userName` with value "Lysa Arryn"
- Declare a variable `oddNumber` and assign a value `57`.
- Reassign the value of `oddNumber` to 61

#### Mathematical Operation

Using mathematical operations, find the solutions. `(+, -, \*, / , etc.)`

```js
let amount = 4280;
```

- Declare a new variable `reducedAmount` . In it, store the value that is 24 less than the value of the amount.
- Declare another variable `addedAmount` . Its value should be 32 more than the value of the amount.
- Declare a variable `multipleAmount` . Its value should be 7 times the value of the amount.
- Declare a variable `dividedAmount` . It should store the resultant of amount divided by 57.

#### Template literal

- Define a variable named `username` using `const` keyword and assign your name as a value.
- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.
- Using template literal alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
