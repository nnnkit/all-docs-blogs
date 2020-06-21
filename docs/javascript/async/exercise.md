## Async Await

1. JavaScript doesn't have a build in function to pause the execution for a given point of time. Using `async .. await` create a

```js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  // Pause execution of this async function for 2 seconds
  await sleep(2000);

  console.log("Waited for 2 seconds");
}
```
