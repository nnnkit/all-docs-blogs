
---
id: loops
title: Loops
---

- Loops are used to perform repeated tasks based on a condition.
- The condition returns either `true` or `false`.
- The loop will continue running until the condition returns `false`.

Like, say you want to alert all the numbers from `1 - 5`. To do that we will write something like this:

```js
alert(1);
alert(2);
alert(3);
alert(4);
alert(5);
```

The above code works but the idea of programming is to make things _easy_ not _hard._ What if we need a list of all the numbers till `1000`? This approach would become really hard. So we need a way to perform repeated tasks. This is called loop in programming terms.

Loop allows us to keep executing a block of code until the condition returns `false`.

There are three most common types of loops:

1. `for`
2. `while`
3. `do while`

### for loop

Syntax

```js
for ([initialization]; [condition]; [step]) {
  // [body];
}
```

```js
for (let i = 0; i < 5; i = i + 1) {
  alert(i);
}
```

- initialization (`i = 0`): executes for the very first time when loop starts.

- condition (`i < 5`): checked after every iteration. If it returns `false`, the loop stops.

- body (`console.log(i)`): runs on each iteration when the condition is `true`

- step (`i = i + 1`): executes after the body on each execution

### Break for loop on specific condition

If you want to break the loop in specific condition, you can use `break` statement.

```js
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}//output will be 0,1,2,3. As soon as i = 4,`if` returns true, break executes and hence the execution comes out of the loop
```

### `while` loop

The while loop starts with evaluating the condition. If the condition returns `true`, the body of the loop gets executed. When the condition returns `false`, the loop ends.

```js
while ([condition]) {
  // body
}
```

```js
let num = 0;
while (num < 5) {
  console.log(i);
  i = i + 1;
}
```

- condition (`num < 5`): if the condition returns `false`, loop ends otherwise the body gets executed.
- body (`console.log(i); i = i + 1;`): when the condition returns `true`, body gets executed.
- When the condition returns `false` the loop ends.

### `do while` loop

- Syntax

```js
do {
  // body
} while ([condition]);
```

```js
do {
  consoel.log(i);
  i = i + 1;
} while (i < 5);
```

- do: The body (`console.log(i); i = i + 1;`) of the loop gets executed first.
- condition (`num < 5`): after the execution of the body, `condition` is tested. If it returns `true`, the loop continues.
- When the condition returns `false`, the loop ends.

### Pointers

1. `for` and `while` loops are entry checking means if condition is wrong at the beginning of the loop, it won't run but `do while` is exit checking means it will at least run one time even if condition is wrong at the beginning.

2. One of the common mistake while writing `while` or `do..while` loop is that we forget to increment the value and therefore, it creates an infinite loop. In the example below you can see that the variable (`num`) on which condition is checked is updated(`num = num + 2;`) inside that loop.

```js {4}
let num = 2; // initialization
while (num <= 10) {
  console.log(num);
  num = num + 2; // incrementing
}
```

The above code can be simplified like this using `for` loop.

```js
for (let num = 2; num <= 10; num = num + 2) {
  console.log(num);
}
```

- Choose the right loop for your problems
