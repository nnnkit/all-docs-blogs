---
id: type-conversion
title: Type Conversion
---

## Type Conversion

It is a mechanism of converting one data type to another data type.

Example:

```js
'21' + 23; // "2123"
```

![Type COnversion](assets/type-conversion.png)

There are two kinds of type conversion that happen:

1. Implicit
2. Explicit

### Implicit

Implicit type conversion refers to JavaScript engine's attempt to convert unexpected value type to expected value type. Like in above example, the number value `32` got converted into string `"32"` to complete the operation. The system does this kind of conversion on it's own.

    true + true; // 2 (boolean to number)
    1 + "2" + 21; // "1221" (number to string)
    1 + true; // 2 (boolean to number)
    3 * "3"; // 9 (string to number)

### Explicit

Explicit type conversion what is we as developer convert unexpected data type into expected data type.

You can use these functions to convert to respective types i.e `Number()`, `String()`, `Boolean()` etc.

```js
Number(true); // 1 (boolean to number)
Number('1'); // 1 (string to number)
Number(null); // 0 (null to number)
Number(undefined); // 0 (undefined to number)
String(21); // "21" (number to string)
String(true); // "true" (boolean to string)
```

You can also convert a non number data type into number using _unary_ `+` operator like `+"21"` will return 21.

### Truthy and Falsy Values

All the values in JavaScript can be categorised into one of two kinds of values either `truthy` or `falsy` values.

When you convert a value into boolean and you get `true` as result that value is said to a truthy value.

```js
Boolean(36); // true (36 is a truthy value)
Boolean('Hello'); // true ("Hello" is a truthy value)
Boolean({}); // true ({} is a truthy value)
```

Similarly when converting a value into boolean returns `false` as result that value is considered to be falsy value. There are only six values that are falsey.

1. `false`
2. `0`
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN`
7. `-0`

**Everything else is truthy.**

```js
Boolean(null); // flasy value
Boolean(undefined); // flasy value
Boolean(0); // flasy value
Boolean(false); // flasy value
Boolean(''); // flasy value
Boolean(NaN); // flasy value
Boolean(false); // flasy value
```

**All the values other than six falsy values are truthy values.**

**NOTE**: `true` is a value, while "truthy" is a kind of value. `36`, `"Hello"` are truthy values.
