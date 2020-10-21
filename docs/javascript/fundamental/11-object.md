---
id: object
title: Object
---

## Object

Let't take and example to understand why we need object. There are 8 students in a class and we need to store their `name`, `age` and `marks`. To do that we need nedd to create three variable for each student to store their informations. So, for the total of 8 students we need to have `8 * 3` i.e 27 variables.

```js

```

We learned about different types of values like number, string, boolean, null, undefined and object. Every type other than `object` is called a primitive type in JavaScript. Primitives contains only one value at a time. Objects are non-primitive type. Objects can store multiple values at a time. Used for storing complex data.





- Objects are non-primitve data type.
- Use `{}` to define an object also known as Object Literal
- Objects are collection of `key` and `value` pair seperated by comma.
- `key` and `value` is seperated by `:`
- `value` can be primitive or non-primitive data types.
- Objects are mutable (can be changed)
- Object does not retain the order you defined the keys (If you want to retain the order use Map)

Example:

```js
let user = {
  key: value,
};
```

![Object](./assets/object.png)

There are operations like accessing, assigning, deleting or updating we can do on objects. To do this we use two property accessor:

- Dot Notation (`.`)
- Bracket Notation (`[]`)

#### Dot Notation

```js
let username = {
  name: 'Arya',
  house: 'Stark',
  isAdult: true,
};

// to access the value of key name using dot notation
console.log(username.name); // "Arya"
```

Using **DOT NOTATION** you can access the value of any key in object by specifying the name of the object (`username`) followed by `.` (dot notation), followed by the name of the key liek `username.name`.

While using `Dot Notation` you key value can only be **alphanumeric** (including `_` and `$`). Key name can't start with number.

**SUMMERY:**

- key can only be alphanumeric (including `_` and `$`)
- key cant start with number
- Can't access a key stored in variable

#### Bracket Notation

```js
let username = {
  name: 'Arya',
  house: 'Stark',
  isAdult: true,
};
// to access the value of key name using bracket notation
console.log(username['name']); // "Arya"
```

Using **BRACKET NOTATION** you can access the value of any key in object by specifying the name of the object (`username`) followed by key name (as string) in `[]` like `username["name"]`.

Bracket notation does two thing:

- Compute the value in `[]` (brackets)
- Access the value

What do I mean by above statements. Let's take an example

```js
var user = {
  arya: {
    age: 21,
  },
  sansa: {
    age: 26,
  },
};
let activeUser = 'arya';

// to access the age of the "arya"
user[activeUser];
```

In above code `user[activeUser];` bracket notation does two thing

- Compute the value inside bracket notation. That means the value of activeUser is computed that is "arya"
- Access the key (acces the arya key from object)

Another Example:

```js
let starks = {
  1: 'Arya',
  2: 'Sansa',
  3: 'Rob',
};
// to access the key 1 from starks we can't use dot notation because dot notation doesn't support key starting with number or is a number. So we will use bracket notation
starks[1];
// Guess the value of code below
starks[6 - 5];

// output will be "Arya" because bracket notation does two thing. Compute the value inside bracket notation and access the value
```

**SUMMERY:**

- If accessing a key it should be in string
- You can use variable name , number etc.

#### Assigning, Re-assigning and deleting

```js
let username = {
  name: 'Arya',
  house: 'Stark',
  isAdult: true,
};
```

To assign a new key value pair in object we can use either dot or bracket notation.

- to add/assign a new key-value pair in object we use assignment operator like `username.surname = "Stark";`.
- to re-assign a new value to key surname we can `username.surname = "Noone";`.
- `username.surname` will be `"Noone"`
- to delete a key we can use `delete` keyword like `delete username.surname`

## writeCode

Convert all of the above code to do the same using bracket notation.

```js
//1. add new key called surname and value "Stark"
//2. re-assign the value of surname key to "Noone"
//3. delete the key anem surname
```
