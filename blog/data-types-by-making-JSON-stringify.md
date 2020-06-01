---
title: Learn Data Types and Data Structure by making your own JSON.stringify
author: nnnkit
author_title: Ankit
author_url: https://github.com/nnnkit
author_image_url: https://avatars2.githubusercontent.com/u/3122626?v=4
tags: ['javascript', 'node']
---

To understand lots of data types and data structure deeply we will try implement the `JSON` methods `stringify`

Let's list all the kinds of data JavaScript has

- number
- string
- boolean
- undefined
- null
- Symbol
- Object
- Array
- Date
- function
- Infinity
- (-Infinity)
- NaN

Can learn about all the above data types at [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

To learn these things properly we will try to implement our version of `JSON.stringify`. Let's see how `JSON.stringify` method behaves with the above listed data types.

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
JSON.stringify(new Date()); // ""2020-05-29T19:06:48.941Z""
JSON.stringify(function () {}); // undefined
JSON.stringify(Infinity); // "null"
JSON.stringify(-Infinity); // "null"
JSON.stringify(NaN); // "null"
```

Let's make function to check the value types.

```js
const isUndefined = value => typeof value === 'undefined';
// isFinate returns false if the argument is Infinity, NaN or undefined otherwise, true.
const isInfinityOrNaN = value => isFinate(value);
const isNaN = value => isNaN(value);
const isNull = value => value === null;
const isSymbol = value => typeof value === 'symbol';
const isString = value => typeof value === 'string';
const isString = value => typeof value === 'string';
const isBoolean = value => typeof value === 'boolean';
const isObject = value =>
  Object.prototype.toString.call(obj) === '[object Object]';
const isDate = value => value instanceof Date;
const isFunction = value => value instanceof Function;
```

Values that return `"null"`

- `null`
- `Infinity`
- `-Infinity`
- `NaN`

```js
function filterNull(input) {
  return isNull(input) || isInfinity(input) || isNaN() ? 'null' : input;
}
```

Values that returns `undefined`

- `undefined`
- `Symbol`
- `function`

```js
function filterUndefined(input) {
  return isUndefined(input) || isSymbol(input) || isFunction()
    ? undefined
    : input;
}
```

Values that are valid (for conversion)

- number
- string
- boolean
- Object
- array
- date

Let's make function to determine the type of values.

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

We will start implementing the funciton `stringifyJSON` by keeping in mind the input and output. We are going to have lots of condition so we will use `switch`

```js
function stringifyJSON(input) {
  switch (true) {
    case isUndefined(input):
      return undefined;
    case isFunction(input):
      return undefined;
    case isSymbol(input):
      return undefined;
    case isNull(input):
      return 'null';
    case isString(input):
      return input;
    case isDate(input):
      return Dtring(input);
    case isBoolean(input):
      return String(input);
    case isArray(input):
      return `[${input
        .reduce(
          (acc, val) =>
            isUndefined(val) ? [...acc, 'null'] : [...acc, stringifyJSON(val)],
          []
        )
        .join(', ')}]`;
    case isObject(input):
      return `{${Object.keys(input)
        .reduce((acc, key) => {
          if (typeof input[key] === 'undefined') {
            return acc;
          } else {
            return [
              ...acc,
              `${stringifyJSON(key)} : ${stringifyJSON(input[key])}`,
            ];
          }
        }, [])
        .join(', ')}}`;
  }
}
```
