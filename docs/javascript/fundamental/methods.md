---
id: methods
title: Methods of primitive and Non Primitive
---

## Exercise:

---

1. You have been given an array of strings, using `forEach` method convert all the elements of the array to the uppercase.

```js
const arr = ["a", "b", "c"];

// Your code
```

```js
const arr = ["a", "b", "c"];
arr.forEach((v, i) => {
  arr[i] = v.toUpperCase();
});
```

2. Replace all the keys of the object given below from lowercase to uppercase. Use `forEach` HINT: Use `Object.keys()`.

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
```
