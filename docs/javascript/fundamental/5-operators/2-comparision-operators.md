---
id: comparison-operators
title: Comparison Operators
---

Comparison operators are used for comparing two values. After comparing it returns boolean either `true` or `false`.

Some common comparison operators are:

- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal
- `==` & `===` equality operater
- `!=` Not equal

### Numaric comparison

```js
21 > 11; // true
200 < 11; // true
11 >= 21; // false
200 <= 100; // false
200 == 200; // true
200 === 200; // true
200 != 200; // false
```

### String comparison

In the example above, you can see we are comparing numaric values. In JavaScript, you can also compare strings. This comparision happens letter by letter in ascending order - where capital 'A' is the smallest value and small 'z' is the biggest - `AB.....Za....z`.

1. `A` is same as `A`
2. `An` is same than `An`
3. `Ant` is greater than `And`
4. `a` is same as `a`
5. `as` is greater as `an`
6. `p` is greater than `a`

```js
"A" > "B"; // false
"d" < "a"; // false
"Hello" < "World"; // true
"JavaScript" >= "Java"; // true
```

### Equality operator == vs ===

There are two ways to test equality `==` and `===`. We will try to understand the difference between them.

#### Double Equality

**Double equal operator allows implicit type conversion to happen.**

When comparing values of different data types using `==`, JavaScript converts the value into number implicitly. Meaning when comparing two values of different data type it converts the value to bring them to a comman type.

```js
"123" == 123;
```

- We are comparing two different data types `string` and `number`
- To bring them to common type JavaScript converts string into number. (`"123"` to `123`)
- After conversion values are compared. `123 == 123`
- Result is `true`

```js
"123" == 123; // true - string "123" becomes number 123
"21" > 20; // true - string "21" becomes number 21
true == 1; // true - boolean true gets converted to number 1.
false == 1; // false - boolean false gets converted to number 0, 0 and 1 is not equal.
```

#### Triple Equality

**Triple equal does not allows implicit type conversion to happen.**

When comparing values of different types using `===` it compares the data type as well as value.

```js
"123" === 123;
```

- We are comparing two different data types string and number
- `===` check the data type of both the values. They are not equal.
- So, it will return `false`.

```js
0 === false; // false - types are different
true === 1; // false - types are different
"21" === "21"; // true - type and value are same
"21" === 21; // false types are different
```

> What will be the output of `undefined == 0`?

Comparing falsy values becomes tricky while using `==`. Try comparing other falsy values.

```js
undefined == 0;
0 == null;
false === NaN;
```

It becomes really confusing to use `==` while using falsy values. Don't worry I have the solution.

#### Comparing falsy values

There are 6 falsy values `0`, `false`, `""`, `null`, `undefined`, and `NaN`. I am going to give you a rule you need to remember while comparing falsy value using `==`.

Team 1: `Number`, `Boolean`, `String` (`0`, `false`, `""`)
Team 2: `null`, `undefined`
Team 3: `NaN`

Falsy values are divided into three teams. The implicit type conversion only happen within the team. Members of one team (`Team 1`) can't be converted into members of other teams (`Team 2` or `Team 3`). Members within team con be converted. This happens only for falsy values.

- Comparision between members of same team using `==` will result to `true`
- Comparision between members of differen team using `==` will result to `false`

Within Team 1:

```js
0 == false; // true
0 == ""; // true
"" == false; // true
```

Within Team 2:

```js
null == undefined;
```

`NaN` is not equal to anything, not even itself.

One team to another:

```js
null == 0; //false
null == ""; //false
null == false; //false
undefined == 0; //false
undefined == ""; //false
undefined == false; //false
NaN == 0; //false
NaN == ""; //false
NaN == false; //false
```

## Exercise:

---

### Double and Tripal equal

```js
var a = 5,
  b = 10,
  c = "5";
var x = a;
```

What will be the output of the code below on the basis of above code.

```js
a == c; // output
a === c; // output
a == x; // output
a != b; // output
a > b; // output
a < b; // output
a >= b; // output
a <= b; // output
a >= c; // output
a <= c; // output
```

### Find th output of the given code below

```js
true == 0; // output
true == 1; // output
true == 2; // output
true == 3; // output
true == 100; // output
true == 1000; // output
```
