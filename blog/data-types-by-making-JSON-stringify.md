---
title: Learn Data Types and Data Structure by making your own JSON.stringify
author: nnnkit
author_title: Ankit
author_url: https://github.com/nnnkit
author_image_url: https://avatars2.githubusercontent.com/u/3122626?v=4
tags: ['javascript', 'node']
---

To understand different data types and data structure deeply we will implement the `JSON.stringify` method.Let's list all the built-in data structure and data types in JavaScript.

- `number`
- `string`
- `boolean`
- `undefined`
- `null`
- `Symbol`
- `Object`
- `Array`
- `Date`
- `function`
- `Infinity`
- `-Infinity`
- `NaN`

If you want to dig deeper you can learn about all the above data types at [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

To implement `JSON.stringify` we need to know how it behaves with different data types. So, let's list the output of this method with different values.

```js
JSON.stringify(21); // "21"
JSON.stringify('Arya'); // ""Arya""
JSON.stringify(true); // "true"
JSON.stringify(undefined); // undefined
JSON.stringify(null); // "null"
JSON.stringify(Symbol('test')); // undefined
JSON.stringify({ name: 'Arya' }); // "{"name":"Arya"}"
JSON.stringify([1, 2, 3, 4]); // "[1,2,3,4]"
JSON.stringify([1, 2, undefined, 4]); // "[1,2,null,4]"
JSON.stringify([1, 2, undefined, 4]); // "[1,2,null,4]"
JSON.stringify(new Date()); // ""2020-05-29T19:06:48.941Z""
JSON.stringify(function () {}); // undefined
JSON.stringify(Infinity); // "null"
JSON.stringify(-Infinity); // "null"
JSON.stringify(NaN); // "null"
```

Looking at the output we can categorise the it in different group.

Values that returns `"null"` are

- `null`
- `Infinity` and `-Infinity`
- `NaN`

Values that returns `undefined` are

- `undefined`
- `Symbol`
- `function`

Values that returns other than `"null"` or `undefined`. These are the values we need to implement in our function to return appropiate output.

- `number`
- `string`
- `boolean`
- `object`
- `array`
- `date`

#### Few things to note

- If you pass above values like `null`, `Infinity`, `NaN` as an individual value like `JSON.stringify(NaN)` it returns string data type `'null'`. But if the passed value is in array `JSON.stringify([NaN])` it returns `null` data type.

- `JSON.stringify({sayHello: () => {}})` returns empty object `'{}'` but `JSON.stringify([function sayHello(){}])` returns `[null]`.

> Inside array all these values `null`,`Infinity`,`Infinity`,`NaN`,`undefined`,`Symbol`,`function` return `null`.

We will make functions to check the different value types. It will accept a value and returns `true` if it's of same data type else returns `false`.

```js
const isUndefined = value => typeof value === 'undefined';
// isFinate returns false if the argument is Infinity, NaN or undefined otherwise, true.
const isInfinity = value => Number.isFinite(value);
const isNull = value => value === null;
const isSymbol = value => typeof value === 'symbol';
const isString = value => typeof value === 'string';
const isBoolean = value => typeof value === 'boolean';
const isArray = value => Array.isArray(value);
const isObject = value =>
  Object.prototype.toString.call(value) === '[object Object]';
const isDate = value => value instanceof Date;
const isFunction = value => value instanceof Function;
```

Let's take an example that we need stringify. We will try to have all different kinds of data so we can test our function thoroughly.

```js
let obj = {
  name: 'Arya Stark',
  age: 22,
  born: new Date('06-12-1998'),
  brothers: ['John', 'Bran', 'Robb', 'Rickon'],
  sayHello() {
    console.log('Hello Everyone!');
  },
  skill: Infinity,
  count: NaN,
  isStark: true,
  died: undefined,
  symbol: Symbol('test'),
};
```

This function will return `null` if the input is any of the six mentioned values or return input.

```js
function processValueInsideArray(input) {
  return isNull(input) ||
    isInfinity(input) ||
    isNaN(input) ||
    isUndefined(input) ||
    isSymbol() ||
    isFunction(input)
    ? null
    : input;
}
```

```js
function filterNull(value) {
  return isNull;
}
```

We will start implementing the funciton `stringify` by keeping in mind the input and output. We are going to have lots of condition so we will use `switch`

```js
function stringify(input) {
  switch (true) {
    case isUndefined(input):
      return undefined;
    case isFunction(input):
      return undefined;
    case isSymbol(input):
      return undefined;
    case isNull(input):
      return 'null';
    case isInfinity(input):
      return 'null';
    case isNaN(input):
      return 'null';
    case isString(input):
      return input;
    case isDate(input):
      return new Date().toISOString();
    case isBoolean(input):
      return String(input);
    case isArray(input):
      return `[${input
        .reduce(
          (acc, val) =>
            processValueInsideArray(val) === null
              ? [...acc, null]
              : [...acc, stringify(val)],
          []
        )
        .join(', ')}]`;
    case isObject(input):
      return `{${Object.keys(input)
        .reduce((acc, key) => {
          if (typeof input[key] === 'undefined') {
            return acc;
          } else {
            return [...acc, `${stringify(key)} : ${stringify(input[key])}`];
          }
        }, [])
        .join(', ')}}`;
    default:
      throw new Error('Something went wrong!');
  }
}
```

We can compare the result of using `JSON.stringify` and our very own `stringify` method.
