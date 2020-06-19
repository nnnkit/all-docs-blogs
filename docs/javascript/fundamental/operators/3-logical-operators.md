---
id: logical-operators
title: Logical Operators
---

There are three logical operators in JavaScript.

1. OR `||`
2. AND `&&`
3. NOT `!`

Before getting to know about logical operators, let us first understand the `falsy` and `truthy` values.

### Falsy and Truthy

All the values in JavaScript can be categorised into either a truthy or a falsy value.

#### Falsy Value

```js
Boolean(undefined); // false
Boolean(null); // false
Boolean(0); // false
```

When you convert a value into boolean using `Boolean()` and it returns `false` that value is said to be a falsy value.

- `undefined` is a falsy value. Converting `undefined` into boolean returns false.
- `null` is a falsy value. Converting `null` into boolean returns false.
- `0` is a falsy value. Converting `0` into boolean return false.

There are only 6 falsy values in JavaScript:

- `undefined`
- `null`
- `0`
- `""`
- `false`
- `NaN`

#### Truthy Value

When you convert a value into boolean using `Boolean()` and it returns `true` that value is said to be a truthy value.

```js
Boolean(21); // true
Boolean("AltCampus"); // true
Boolean(2000); // true
```

> Every value other than 6 falsy values are truthy values.

- `21` is a truthy value. Converting `21` into boolean returns true.
- `AltCampus` is a truthy value. Converting `AltCampus` into boolean returns true.
- `2000` is a truthy value. Converting `2000` into boolean return true.

> 21 is a truthy value not a `true` value. `true` itself is a boolean value.

### OR - || operator

- Evaluate operands from left to right.
- OR operator returns the first `truthy` value it encounters.
- Once it gets the truthy value it will not go ahead.
- In case there is no truthy value, the last falsy value will be returned.

```js
undefined || null || 21 || "Hello"; // 21 - first trythy value
undefined || null; // null - no truthy value present. So, last falsy value `null` is returned 
```

The explanation of the code above:

- Is `undefined` a truthy value? NO - (go ahead to the next value `null`)
- Is `null` a truthy value? NO - (go ahead to the next value `21`)
- Is `21` a truthy value ? YES (the output will be `21`)

**Output will be 21**

Examples:

```js
21 || "Hello"; // 21 - first value 21 is a truthy value
0 || false || "AltCampus"; // "AltCampus" - first truthy value is "AltCampus"
0 || "false" || null; // "false" - first truthy value
```

### AND - &&

- Evaluate operands from left to right.
- AND operator returns the first `falsy` value it encounters.
- Once it gets the falsy value it will not go ahead.
- In case there is no falsy value the last truthy value will be returned.

```js
21 && 32 && "Hello" && null; // null - first falsy value
```

- Is `21` a falsy value? NO - (go ahead to the next value `32`)
- Is `32` a falsy value? NO - (go ahead to the next value `"Hello"`)
- Is `"Hello"` a falsy value? NO - (go ahead to the next value `null`)
- Is `null` a falsy value? YES (the output will be `null`)

**Output will be `null`**

Examples:

```js
21 && null; // null - first falsy value `null`
0 && false && "AltCampus"; // 0 - first falsy value is `0`
"0" && "false" && null; // null - first falsy value
```

### NOT - !

NOT operator does the following:

- Converts the value into boolean if the value is not `true/false`
- Returns the inverse of the value got in above step. (`true` => `false`, `false` => `true`)

```js
!false; // true
!0; // true
!21; // false
```

- `false` is a boolean. So, it will return the inverse i.e `true`
- `0` is falsy value. So, it will return the inverse i.e `true`
- `21` is truthy value. So, it will return the inverse i.e `false`

## Exercise:

#### Output of the following line of code.

```js
"NaN" && "undefined" && 0; // output
"AT" && "" && false; // output
"AT" && " " && false; // output
"AT" || 5; // output
" " || "AT" || false; // output
!{}; //output
!""; //output
!"OK"; //output
!false; //output
!true; //output
```

### Read code and find the output

```js
var a = 5,
  b = 10;
```

After going through the code above find the output of the give code below.

```js
a != b && a < b; //output
a > b || a == b; //output
a < b || a == b; //output
!(a < b); //output
!(a > b); //output
```
