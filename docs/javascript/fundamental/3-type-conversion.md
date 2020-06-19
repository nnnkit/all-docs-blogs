---
id: type-conversion
title: Type Conversion
---

## Type Conversion

Type conversion refers to the conversion of one data type into another data type. It is done to convert an unexpected data type to expected data type.

Example:

```js
let num1 = 21;
let num2 = "23";
let sum = num1 + num2; // "2123"
alert(sum);
```

In the above example JavaScript has converted the number value `21` to a string. After conversion, both values become strings. So, the two values got concatenated. The value of sum is `"2123"`. This kind of conversion is called Implicit type conversion.

There are two kinds of type conversions:

1. Explicit
2. Implicit

### Explicit

JavaScript provide special function like `String()`, `Number()`, `Boolean()` to convert one data type into another data type. For example, I have a value `21` and I want to convert this value into `string` data type.

```js
String(21); //"21"
typeof String(21); //"string"
```

```js
Number(true); // 1 (boolean to number)
Number("1"); // 1 (string to number)
Number(null); // 0 (null to number)
Number(undefined); // 0 (undefined to number)
String(21); // "21" (number to string)
String(true); // "true" (boolean to string)
```

You can also convert a non number data type into number using _unary_ `+` operator like `+"21"` will return 21.

#### parseInt and parseFloat

The `parseInt` and `parseFloat` functions return numbers from any string that starts with numeric value. This is also an explicit type conversion. When the value can't be converted into number, it will return `NaN`.

```js
let length = "20m";
let lengthInNumber = parseInt(length); // 20
parseInt("22km"); // 22
parseInt("200Pounds"); // 200
parseInt("a20"); // NaN

// parseFloat
parseFloat("200.20Pounds"); // 200.2
parseFloat("22.9km"); // 22.9
```

### Implicit (Automatic type conversion)

Implicit type conversion refers to JavaScript engine's attempt to convert unexpected value type to expected value type. Some operators, in order to get specific data type, converts one data type into another. This process is called Implicit type conversion. It is also known as automatic type conversion.

> This kind of type conversion happens automatically.

- In JavaScript, the `+` operator is used for both numeric addition and string concatenation. When you add `number` and `string` the number is converted to string and concatenated.

```js
21 + "22"; // "2122" (one value is string)
"21" + 22; // "2122" (one value is string)
```

- In JavaScript, the `-` operator is only used for subtraction. So, when you use it with a string and a number the string is converted into number and the value is subtracted.

```js
"21" - 10; // 11
200 - "21"; // 179
```

- In JavaScript, the `*` operator is only used for multiplying the numbers. When you use it with a number or string the string is converted into number and multiplied.

```js
"10" * 10; // 100
20 * "5"; // 50
```

```
string + number = concatenation
string - number = subtraction
string * number = multiplication
```

You can see in `21 + "22"` the value `21` got converted in string. Now, both the values are string. So, it will concatenate.

### Truthy and Falsy Values

All the values in JavaScript can be categorised into one of the two kinds of values i.e. either `truthy` or `falsy` values.

```js
Boolean(36); // true
```

When you convert any value (like `36`) into boolean data type using `Boolean()` and it returns `true` as result, that value (`36`) is said to be a `truthy` value.

```js
Boolean(36); // true (36 is a truthy value)
Boolean("Hello"); // true ("Hello" is a truthy value)
Boolean({}); // true ({} is a truthy value)
```

#### Falsy Value

```js
Boolean(null); // false
```

Similarly, when converting a value (`null`) into boolean using `Boolean()` and it returns `false` as result, that value is considered to be `falsy` value. To keep things simple, there are only six values that are falsy, every other values are truthy.

1. `false`
2. `0`
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN`

```js
Boolean(null); // falsy value
Boolean(undefined); // falsy value
Boolean(0); // falsy value
Boolean(false); // falsy value
Boolean(""); // falsy value
Boolean(NaN); // falsy value
```

:::tip Truthy values
All the values other than six falsy values are truthy values.
:::

**NOTE**: `true` is a value, while "truthy" defines state of the value. For eg, `36`, `"Hello"` are truthy values.

## Exercise

---

#### Types of type conversion

What are the different types of type conversions. Explain with examples.

#### Understanding Implicit type conversion

Read the explanation below

- `3 + '4'`

Explanation:

`3 + '4'` In this code, first value `3` is a Number data type and the second value `'4'` is a String. Because both values are not same, `implicit type conversion` will happen to bring both values in the same data type. So `number` will be converted to `string` because `+` is use in both concatenation and addition. So, `3` will be converted to `"3"`. Now the value is `"3"` and `"4"` so it will be concatenated. The output will be `"34"`.

Similarly, write the explanation of how this conversion will happen. And what will be the output.

- `3 * "3"`

- `1 + "2" + 1`

#### Explicit type conversion

What will be the output of the following:

1. `Number("6")`
2. `Number("6.76")`
3. `Number(" 6.76 ")`
4. `String(456)`
5. `String(1.25)`
6. `String(10+20)`
7. `Boolean(1)`
8. `Boolean(0)`
9. `Boolean(-5)`
10. `Number(true)`
11. `Number(false)`
12. `Number(null)`
13. `Number("")`
14. `Number(undefined)`
15. `Number(NaN)`



#### Converting string to number

```js
let num = "6.76";
let angle = "30 degree";
```

- Convert the value of `num` into integer number and store it in new variable called `intNum`.
- Convert the value of `num` into decimal number and store it in the new variable called `intFloat`
- Take out the value of `30` from the angle variable and store it in `angleInt`
