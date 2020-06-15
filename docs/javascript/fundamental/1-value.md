---
id: value
title: Value
---

## What is Value

The most fundamental unit of information in any programming language is called value or data. It can be any piece of information that you can store and manupulate like your name or age.

For example

`name` can be `"Arya"` or `age` can be `23`.

`"Arya"` and `23` in programming terms are called **values**.

You can have different kind of values: a letter, word, paragraph, number etc. These values are divided into different types also know as `Data Types` or you can call it `Value Types`. All the values have to be one of the following types.

### Data Types

1. Number (`21`, `21.45` )
2. String (`"a"`, `"hello"`, `"A quick brown fox jumped over lazy dog!"`)
3. Boolean (`true`, `false`)
4. `null`
5. `undefined`
6. Object

Latest addition to JavaScript family:

7. **Symbol**
8. **BigInt**

#### Number

All numeric values are of `number` data type in JavaScript. Example of number type would be

```js
133,
  1,
  456 - 123, // Integers
  -324; // Negative Numbers
132.43, -12.23; // Decimal point number
Infinity, NaN, -Infinity; // Special numbers
```

**JavaScript uses a fixed number of bits i.e `64` to store a single number.**

Special numbers are values that are of number data type but doesn't exactly behaves like numbers in some cases.

```js
Infinity - 1; // Infinity
```

Numbers can be manipulated using arithmetic operations like addition, multiplication etc. To do that we use arithmetic operators (`+`, `-`, `*`).

```js
24 + 21; // 45
45 - 20; // 25
30 * 20; // 600
20 + 10 * 11; // 130
```

Symbols like (`+`, `-`, `*`) used above are called Operators. Putting the operator between two values will return a new value. Like in above example using the `+` operator on numbers 24 and 21 returns 45.

---

#### BigInt

Used to represent any number bigger than 9007199254740991 or smaller than -9007199254740991. For BigInt you need to add `n` at the end of the value.

```js
const bigInt = 1234567890123456789012345678901234567890n;
```

---

#### String

Any representation of text is `string` data type in JavaScript.

Example:

```js
"a"; // letter
"A"; // uppercase letter
"Hello"; // word
"Hello World!"; // single quote
"JavaScript is a single threaded language!"; // paragraph
```

**Visual Impression to identify string:** Anything wrapped in `''` , `""` or `backticks` is a string.

---

#### Boolean

To differentiate between only two possible values like `day` or `night` , `yes` or `no` , `on` or `off` we use boolean data type in JavaScript that has only two fixed values: `true` or `false`.

- `true` can represent values like `on` or `yes`

- `false` represents values like `off` or `no`

---

#### Void Values (Empty)

To represent the existence of no meaningful values we use special values i.e `null` or `undefined`. These are values that carry no information. It is used for the places where the operation doesn't produce meaningful value.

`undefined` is the only value of type undefined. `null` is the only value of type null.

There is no fundamental difference between `null` or `undefined`. In most of the case you can treat them as interchangeable.

---

#### Object

Object is a collection of `key` and `value` pairs seperated by comma `,`. Where key is a `string`, while `value` can be any data type like number, boolean, string, null, undefined, symbol or object.

```js
var user = {
  name: "Arya",
  age: 21,
  house: "Stark",
  isAdult: true,
};
```

Above, the `user` obect has 4 `key` & `value` pairs, with `name`, `age`, `house` and `isAdult` being the `keys` and the data after `:` being `values`, i.e. `"Arya"`, `21`, `"Stark"`

### `typeof`

To check the data type of any value we use `typeof` operator. It always returns `string` data types with value specifying the data type that was checked by `typeof`.

```js
typeof 21; // "number"
typeof "Hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" 🔥Boop
```

`typeof null` returns `"object"` is a bug in JavaScript. It can't be fixed ever because there are lots of website depends on this error.

## Category of value types-readText

All the data types explained above can be categorised in two different types.

#### 1. Primitive Data Type:

Primitive data type are basic type provided by programming language as a building block of values like number, text etc. **Primitive Data Types are immutable (can't be changed) in nature.**

- Primitive Data Types
  - number
  - string
  - boolean
  - null
  - undefined
  - null
  - symbol
  - BigInt

#### 2. Object (Non-Primitive) Data Type:

For storing some complicated data, programmig languages provide some ways to handle it, starting from primitive type. They have built-in support (adding, removing, changing) for these kind of data types. Everything that is not primitive is an object in JavaScript. example: function, array etc.

//FEEDBACK: this section is very hard to understand.

**Non-Primitive Data Types are mutable (can be changed).**

- Object Type (Non-primitive Data Type)
