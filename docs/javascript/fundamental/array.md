---
id: array
title: Array
---

Array is a collection of only values keys are indexed (starts with 0 and keeps going up).

- collection of values
- defined using `[]`
- keys are indexed (starts from 0 ...)
- Always use bracket notation to access it beacuse keys are number.
- Convention is to keep the values of array of same data types.

Example:

```js
// defining array
let starks = ['Arya', 'Sansa', 'Rob', 'Bran'];

// accessing values
starks[0]; // "Arya"
```

### Primitive vs Non-Primitive

**Primitive values are Immutable but Non-Primitive are mutable in nature.**

Example (Immutable): Applies to all primitive types

```js
let num = 21;
num = 30;
```

In above code you can see you are changing the value of `num` variable from 21 to 30. THe whole value is changed.

```js
let user = {
  age: 21,
  name: 'John',
};
user.age = 32;
```

In above code you can see you changed the value of `name` key of `user` object from 21 to 32. But the object assigned to `user` remained same. Means object can be mutated (changed).
