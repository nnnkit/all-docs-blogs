---
id: variable
title: Variable
---

## Variable (Storing a value)

In the above module we learned about value (information) and different value types like `number` , `string` , `boolean` etc.

Variable is a named storage that is used to store any value. You can imagine a variable to be like a box with name that is used to store number, boolean, string, null, undefined, object, BigInt and Symbol.

Example:

```js
var username = 'Arya';
```

In the above code we are using multiple things let's understand all of those.

- `var` Keyword to create a new box.

- `username` To name a box.

- `=` assignment operator assign a value `"Arya"` to the box named `username`

![Store of value](/img/value/variable-box.png)

![variable](/img/value/variable-var.png)

**On the right hand side of `=` can only be a value.**

You can also change the value of a variable using `=` (assignment operator) like below

```js
var username = 'Arya';
username = 'John';
```

The value of the `"Arya"` will be replaced with `"John"` this is called re-assignment.

![Re-assignment](/img/value/re-assignment.png)

variable can only hold one value at a time.

There are multiple ways of creating a box (variable) in JavaScript i.e `var` , `let`, `const`

```js
var username = 'Arya';
let house = 'Stark';
const brother = 'John';
```

You can create boxes using multiple ways but all the boxes behaves differently.

### `var`

### `let`

### `const`

Box created with const keyword can't be re-assigned to another value. In other words, once it has been declared, the value of a `const` variable can not be changed ever, i.e, it remains constant.
