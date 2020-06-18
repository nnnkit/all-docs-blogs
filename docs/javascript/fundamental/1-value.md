---
id: value
title: Value
---

### What is Value

All computer programs are composed of value and operations on that value. Value is the most fundamental unit of information in any programming language. Value can be stored or manupulated by computer program. Example: `1`, `a` or `AltCampus`.

`1`, `a` or `AltCampus` in programming terms are called **values**.

Looking at the above examples, we can see there are different kind of values: a number, a letter, a word etc. Based on the nature of data, values are divided into different types, also known as `Data Types`.

All the value in JavaScript needs to be of a certain type like number, string etc.

Below is the list of all possible data types in JavaScript.

1. Number (`21`, `21.45`, `984536945` )
2. BigInt (`123456789012345678901234n`)
3. String (`"a"`, `"hello"`, `"A quick brown fox jumped over lazy dog!"`)
4. Boolean (`true`, `false`)
5. `null`
6. `undefined`
7. Symbol
8. Object (`{name: "AltCampus", location: 'India', student: 100}`)

#### Number

- All numeric values are of `number` data type in JavaScript.
- It represents both integer and floating point numbers.
- You can perform operations like addition, subtraction, multiplication, division etc using operators on this data type.
- Along with regular numbers, there are some special numbers like `Infinity`, `-Infinity` and `NaN` also belong to this data type.

```js
133,
  1,
  456 - 123, // Integers
  -324; // Negative Numbers
132.43, -12.23; // Decimal point number
Infinity, NaN, -Infinity; // Special numbers
```

Numbers can be manipulated using arithmetic operations like addition, multiplication etc. To do that we use arithmetic operators (`+`, `-`, `*` etc).

```js
24 + 21; // 45
45 - 20; // 25
30 * 20; // 600
20 + 10 * 11; // 130
```

Symbols like (`+`, `-`, `*`) used above are called Operators. Putting the operator between two values will return a new value. Like in above example, using the `+` operator on numbers 24 and 21 returns 45.

---

#### BigInt

BigInt is used to represent any number bigger than the upper limit (9007199254740991) or smaller than the lower limit (-9007199254740991). For BigInt, you need to add `n` at the end of the value. This is rarely needed.

```js
const bigInt = 1234567890123456789012345678901234567890n;
```

---

#### String

Any representation of text is `string` data type in JavaScript.

There are three ways to define string in JavaScript:

1. Double quotes: `"Hello"`.
2. Single quotes: `'Hello'`.
3. Template literals or Backticks: `` `Hello` ``.

Example:

```js
"a"; // lowercase letter
"A"; // uppercase letter
"Hello"; // word
"Hello World!"; // single quote
"JavaScript is a single threaded language!"; // paragraph
```

There is no difference between `single` and `double` quote in JavaScript. You can choose any but don't mix them.

**Template literals** are enclosed by backticks `` ` ` ``. It allows us to mix expressions like (1 + 21) into string. If you want to write `1 + 1 is equal to 2`

```js
alert(`1 + 1 is equal to ${1 + 1}`);
```

Above code is only possible using template literals. We cannot write the above code using single or double quote.

:::tip Visual Impression to identify string:
Anything wrapped in `single quote` , `double quote` or `backticks` is a string.
:::

- `"21"` is a string not a number
- `"true"` is a string not a boolean
- `"100.21"` is a string not a number

You can do some operations on string like joining two strings using `+` operator. We will learn about `+` operator deeply in Operators.

```js
"Arya" + "Stark"; // "AryaStark"
"Arya" + " " + "Stark"; // "Arya Stark"
"Hello" + " " + "World" + "!"; // "Hello World!"
```

:::tip Multi-line string
You can use `\n` to break the line in string.

```js {2,5-6}
// Using quote
console.log("Line one\n" + "line two!");

// Using backtick
console.log(`Line one
line two!`);
// "Line one
// line two!"
```

:::

---

#### Boolean (logical type)

To differentiate between only two possible values like `day` or `night` , `yes` or `no` , `on` or `off` we use boolean data type in JavaScript that has only two values: `true` or `false`.

- `true` represents values like `on` or `yes`

- `false` represents values like `off` or `no`

When you compare two values, you get boolean types as a result. For comparision we can use operators like `>`, `<` etc.

```js
21 > 22; // false
2000 > 21; // true
```

:::danger JavaScript is case sensitive
JavaScript is a case sensitive language. `true` and `True` are not same.
:::

---

#### Void Values (Empty)

To represent “nothing”, “empty” or "unknown value” we use special values i.e `null` or `undefined`. These are values that carry no information. It is used for the places where the operation doesn't produce meaningful value.

- `undefined` is the only value of type undefined.
- `null` is the only value of type null.

There is no fundamental difference between `null` or `undefined`. In most of the case you can treat them as interchangeable.

---

#### Object

Object is fundamentally different from all other types defined above. It is used to store complex information. Object is a collection of `key` and `value` pairs seperated by comma `,`, where key is always a `string`, and `value` can be any data type like number, boolean, string, null, undefined, symbol or object. Objects are used to store complex data structure.

```js
{
  name: "Arya",
  age: 21,
  house: "Stark",
  isAdult: true,
};
```

- Above object has 4 `key` & `value` pairs
- `name`, `age`, `house` and `isAdult` are the `keys`
- `"Arya"`, `21`, `"Stark"` and `true` The data after `:` are `values`.

---

#### Symbol

The symbol type is used to create unique identifiers. You will not need it in basic uses

### Different category of values

All the data types explained above can be categorised in two different types. To understand this, we should know that computers at core is a very simple device and can only store simple pieces of informations. All complex informations (non- primitive) are built up from the basic data types (primitive).

#### 1. Primitive Data Type:

Primitive data type are basic data types or fundamental piece of information provided by programming language as a building block of values like number, text etc.

- Primitive Data Types are immutable (can't be changed) by nature.
- Primitive values can contain only one value at a time.

`Primitive Data Types`

- `number`
- `string`
- `boolean`
- `undefined`
- `null`
- Symbol
- BigInt

#### 2. Non-Primitive Data Type:

Primitive data types can take care of simple values but what about handeling complex information. For that, programming language also give support for handling complex information, also knows as **non-primitive** data types. These kind of data types are built using primitive data types. So, at the core they all are simple information. The only non-primitive data type in JavaScript is `Object`.

There are different variations of Object in JavaScript i.e function, array etc. We will learn about this topic later on.

- Non-primitive data types are mutatble(can be changed) by nature.
- Non-primitive can hold more than one value at a time. Collection of name is an example.
- List of name `['John','Arya']` is an example of complex information.
- Everything that is not primitive is an `object` in JavaScript.

---

### The `typeof` operator

`typeof` operator is used to check the data type of any value. It helps you check for the purpose of type checking. The return value of `typeof` operator is wrapped into double quote making it a string data type.

```js
typeof 21; // "number"
typeof "Hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" 🔥Boop
```

:::danger typeof null
`typeof null` returns `"object"`, which is a bug in JavaScript. It can't be fixed ever because there are lots of website depending on this error.
:::

### Exercise

---

#### Understanding value

- Write 5 values of number data type.
- Write 5 values of string data type.
- What are the possible values in boolean data type?
- How will you represent `on` and `off` in boolean values?
- What is the difference between number and BigInt?
- What are some special number values?
- Which operator helps you in type-checking i.e. in finding the data type of any value?
- How many value/values are possible in `null` and `undefined` data types?
- What is the difference between `null` and `undefined`
- Define an object with `key` as username and value will be your name.
- What is the difference between `primitive` and `non-primitive` values. Explain with example

#### Data type of following value

Write the data-type of the following values:

- `21`
- `10101919.123`
- `NaN`
- `"true"`
- `false`
- `Infinity`
- `"a"`
- `"1"`
- `{}`
- `undefined`
- `1 + 21`
- `"Hello" + "World!"`

#### Understanding typeof operator

What will be the output of the following line of code:

1. `typeof NaN`
2. `typeof phone`
3. `typeof null`
4. `typeof undefined`
5. `typeof "abc"`
6. `typeof -0`
7. `typeof 4`

#### Operation on values

What will be the output of the following line of code:

1. `1 + 21 + 32`
2. `"21" + "22"`
3. `` `Hello` + `World!` ``
4. `"Hello" + " " + "Arya!"`

#### BONUS

What will be the output of code below. (HINT: all the output will be same)

1. `typeof typeof "abc"`
2. `typeof typeof typeof -0`
3. `typeof typeof typeof 4`
4. `typeof typeof NaN`
5. `typeof typeof phone`
6. `typeof typeof null`
7. `typeof typeof undefined`
