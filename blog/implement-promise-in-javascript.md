---
title: Implement your own promise in JavaScript
author: nnnkit
author_title: Ankit
author_url: https://github.com/nnnkit
author_image_url: https://avatars2.githubusercontent.com/u/3122626?v=4
tags: ['javascript', 'node']
---

Promise is a constructor function (class) that returns an object when called using `new` keyword. So let's create a class named `Promise`.

```js
class Promise {}
```

The `Promise` class have few methods like `then` and `catch` so let's add those methods. We will not implement full functionality. Let's add two methods `then` and `catch` in our `Promise` class.

```js
class Promise {
  then() {}
  catch() {}
}
```

A promise can be in three different state `Pending`, `Resolved` and `Rejected` and it starts with `Pending`. We will create an object will all the different states.

```js
const states = {
  pending: 'Pending',
  resolved: 'Resolved',
  rejected: 'Rejected',
};
```

Let's update our `Promise` class to accept an callback function and have an initial state i.e `Pending`. We will accept the argument of the `Promise` in the constructor functions.

Promise accepts a callback function (executor function) that get's access to two functions `resolve` and `reject`.

- `resolve` is used to resolve the promise
- `reject` is used to reject the promise

A promise will also have a value/result property that will be set by the resolve function.

```js
const states = {
  pending: 'Pending',
  resolved: 'Resolved',
  rejected: 'Rejected',
};
class MyPromise {
  constructor(executor) {
    // initial state of the promise
    this.state = states.pending;

    // result property to store the result and initial value will be undefined
    this.result = undefined;
    // resolve function to resolve the promise
    function resolve(result) {
      this.result = result;
      this.state = states.resolved;
    }
    // reject function to reject the promise
    function reject(error) {
      this.result = error;
      this.state = states.rejected;
    }

    // we will use try.. catch to prevent the error
    try {
      executor(resolve.bind(this), reject.bind(this));
    } catch (error) {
      reject(error);
    }
  }
  then() {}
  catch() {}
}
```

\*\* In this line `executor(resolve.bind(this), reject.bind(this));` we are binding the value of this so, the value of this should not change to other object.

### Implementing then and catch

In this section we will implement `then` and `catch` function of the `Promise` class.

Things to take care of while implementing `then` function.

- `then` returns a promise (we will return `this` because this is the promise object we are implementing)
- Multiple `then` can be used so we will need to store them in array

For implementing `catch` function we need to add one callback in catch.

```js
const states = {
  pending: 'Pending',
  resolved: 'Resolved',
  rejected: 'Rejected',
};
class MyPromise {
  constructor(executor) {
    // initial state of the promise
    this.state = states.pending;

    // result property to store the result and initial value will be undefined
    this.result = undefined;
    // resolve function to resolve the promise

    this.allThenCallbacks = [];
    this.catchCB = undefined;

    function resolve(result) {
      this.result = result;
      this.state = states.resolved;
    }
    // reject function to reject the promise
    function reject(error) {
      this.result = error;
      this.state = states.rejected;
    }

    // we will use try.. catch to prevent the error
    try {
      executor(resolve.bind(this), reject.bind(this));
    } catch (error) {
      reject(error);
    }
  }
  then(callback) {
    this.allThenCallbacks.push(callback);
    return this;
  }
  catch(callback) {
    this.catchCB = callback;
    return this;
  }
}
```

In this last section we will update the `resolve` and `reject` function to call all the functions we have store in `allThenCallbacks` and `catchCB`.

```js
const states = {
  pending: 'Pending',
  resolved: 'Resolved',
  rejected: 'Rejected',
};
class MyPromise {
  constructor(executor) {
    // initial state of the promise
    this.state = states.pending;

    // result property to store the result and initial value will be undefined
    this.result = undefined;
    // resolve function to resolve the promise

    this.allThenCallbacks = [];
    this.catchCB = undefined;

    function resolve(result) {
      this.result = result;
      this.state = states.resolved;
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      // Second parameter of forEach is used for binding the value of this in the callback function
      this.allThenCallbacks.forEach((cb) => cb(this.result), this);
    }
    // reject function to reject the promise
    function reject(error) {
      this.result = error;
      this.state = states.rejected;
      if (typeof this.catchCB === 'function') {
        this.catchCB(this.result);
      }
    }

    // we will use try.. catch to prevent the error
    executor(resolve.bind(this), reject.bind(this));
  }
  then(callback) {
    this.allThenCallbacks.push(callback);
    console.log(callback);
    return this;
  }
  catch(callback) {
    this.catchCB = callback;
    return this;
  }
}
```

### Example to use our promise

```js
new MyPromise((res, rej) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users/raghurambachu');
  xhr.onload = () => res(JSON.parse(xhr.response));
  xhr.onerror = () => rej('Error');
  xhr.send();
})
  .then((res) => console.log(res))
  .then((res) => alert(res.name));
```
