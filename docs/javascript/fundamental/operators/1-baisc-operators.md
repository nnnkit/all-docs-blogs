---
id: basic-operators
title: Basic Operators
---

## Operators

Operators are used for operations like assignment, comparision, arithmetic, logical etc. For example, operator `+` for addition, `-` for substraction, `*` for multiplication, `=` for assignment and so on. Operand is what operators are applied to. For example: `5 + 6` has two operands, 5 and 6.

Based on the number of operand an operator is applied on there are two types of operators `unary` and `binary`.

- **Unary** operator acts on one operand
- **Binary** operator acts on two operand

1. Unary operator: applies on one operand

Example of unary operators:

```js
+"5"; // 5
-5; // -5
var x = 10;
x = -x;
typeof 21; // "number"
```

2. Binary operator: applies on two operand

Example of binary operators:

```js
5 + 5; //10
50 + 15; //65
"500" + 15; // "50015"
var x = 10,
  y = 20;
var z = x + y; // binary
```

## Baisc Operators in JavaScript

---

### Arithemetic (Math) Operators

These are the following math operators that are supported in JavaScript:

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Remainder `%`
- Exponentiation `**`

The operators `+`, `-`, `*`, `/` works exactly how it works in maths.

#### Remainder `%`

The result of remainder operator `a % b` is the remainder of a divided by b (a/b).

```js
let remainder = 10 % 3; // returns 1
alert(43 % 2); // returns 1
```

In the above example the remainder of `10` divisible by `3` returns `1`.

> It looks like percentage but does not behave like that.

#### Exponentiation `**`

The exponentiation operator `3 ** 4` multiplies `3` by itself `4` times like `3 * 3 * 3 * 3`

```js
3 ** 4; // 81
2 ** 2; // 4
2 ** 5; //  32
```

---

### Assignment operators

Assignment operators are used for assigning a value to it's left hand operand. Simplest example would be `=` which assigns a value to the left hand operand. `x = y`. The `=` operator assigns the value of `y` (right operand) to the `x` (left operand). Below is the list of some of the most used assignment operators in JavaScript.

| Name                      | Example      | Shorthand | Meaning                                  |
| ------------------------- | ------------ | --------- | ---------------------------------------- |
| Assignment Operator       | `x = 21`     | `x = 21`  | 21 is assigned to `x`                    |
| Addition Assignment       | `x = x + 5`  | `x += 5`  | result of `x + 5` is assigned to x       |
| Subtraction Assignment    | `x = x - 5`  | `x -= 5`  | result of `x - 5` is assigned to x       |
| Multiplication Assignment | `x = x * 5`  | `x *= 5`  | result of `x * 5` is assigned to x       |
| Division Assignment       | `x = x / 5`  | `x /= 5`  | result of `x / 5` is assigned to x       |
| Remainder Assignment      | `x = x % 5`  | `x %= 5`  | result of `x % 5` is assigned to x       |
| Exponential Assignment    | `x = x ** 5` | `x **= 5` | result of `x ** 5` is assigned to x      |

### Unary and binary +

The `+` operator exists in two forms _unary_ and _binary._ It can either be applied to one operand or to two operands.

When applied to one operand it converts the operand into a number.

```js
+5; // nothing happens because operand 5 is already a number data type
+"21"; // 21 (converted string to number)
+true; // 1 (converted boolean to number)
+""; // 0 (converted string to number)
```

When applied on two operands it does one of the following:

- If both operands are `number` data type, it will add both numbers and return the final number.
- If any of the operands is a `string`, it concatenates the operands and returns a string.

```js
21 + 23; // 44 (sum of numbers)
"hello" + "world"; // hello world (concatenate)
"21" + 23; // '2123' (concatenate)
21 + "hello"; // '21hello'
```

Above, in the example `"21" + 23`, first operand is `"21"` (string data type) and another operand is a number (`23`). So the second rule applies here i.e. if any of the operand is a string then both operands are concatenated, converting the number (`23`) into string with implicit type conversion.

### Increment/Decrement Operator

This operator `++` and `--` is used for incrementing or decrementing the operator by `1`.

#### Increment (++)

The increment operator can be used in two ways:

- `++count` which means increment and use.

```js
let count = 10;
++count; // 11
```

- `count++` which means use and increment.

```js
let count = 10;
count++; // 10
```

```js
let count = 0;
alert(count++); // alert the value 0 and increment the value of count to 1 (use and increment)
alert(++count); // increment the value of count to 1 and alert 1 (increment and use)
```

#### Decrement (--)

The decrement operator can be used in two ways:

- `--count` which means decrement and use.

```js
let count = 10;
--count; // 9
```

- `count--` which means use and decrement.

```js
let count = 10;
count--; // 10
```

```js
let count = 10;
alert(count--); // alert the value 10 and decrement the value of count to 9 (use and decrement)
alert(--count); // decrement the value of count to 9 and alert 9 (decrement and use)
```

### Comma Operator

```js
let num = (2, 3); // 3
let sum = (2 + 4, 3 + 4); // 7
```

The value of `num` in the first example will be 3. Comma operator evaluates all the value separated by comma and returns the last value.

## Exercise:

### What's the output of the following, write the output next to the code as comment

1. `5 * "5"` = ?
2. `6 + "7"` = ?
3. `1 + "JS"` = ?
4. `1 * "JS"` = ?
5. `5 + true` = ?
6. `6 - true` = ?
7. `7 - false` = ?
8. `8 + false` = ?
9. `true + true` = ?
10. `true + false` = ?

### Output of each line of code :

- `3 * '8'`
- `1 + '21' + 32`
- `"string" ? 4 : 1`
- `undefined ? 4 : 1`
- `4 * Number("")`
- `4 * 0`
- `4 / '2'`
- `4 + true`
- `3 * false`
- `3 * ""`
- `3 + ""`
- `2 + 2 + "2"`
[Operator Precedence Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
[Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
