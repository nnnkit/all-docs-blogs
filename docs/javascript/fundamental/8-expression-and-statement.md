
---
id: expression-and-statement
title: Expression and Statement
---

### Expression

An expression is any valid unit of code that resolves to values. Wherever JavaScript expects values (on the right-hand side of `=`) you can put expressions.

```js
const num = 500;
const sum = 21 + 22 + 23;
const fullName = "Arya" + " " + "Stark";
```

Line 1: `500` is an expression that results into a  value `500`.
Line 2: `21 + 22 + 23` is an expression that results into a value `66`.
Line 3: `"Arya" + " " + "Stark";` is an expression that results into a value `Arya Stark`.

#### Different kinds of Expressions:

- Arithmetic Expression resolves to numeric values.

```js
200;
200 + 100 + 21;
```

- String expressions resolve to a string.

```js
"Arya";
"Arya" + " " + "Stark";
```

- Logical Expressions resolve to boolean values (`true` or `false`). It also includes `&&` and `||`.

```js
10 > 11; // false
22 && undefined; // undefined
2 === 21; // false
```

### Statement

Statement perform actions like `if, while, for` but can't resolve to values. A program is a collection of statements.

```js
if (num > 20) {
  alert("Number is greater than 20");
}

for (let i = 0; i < 20; i++) {
  console.log(i);
}
```

- `if` statement performs an action to check if the value is greater than 20 or not. If true, it will `alert` a message.
- `for` loop performs an action to start from 0 and goes till 20.

> Ternary operator `?` is an expression because it always resolves to a value.

### Rules for expression and statement

- Can't put statement in the place where expression is needed.

- We use comma `,` to chain expression.
- We use `;` to chain statement.
