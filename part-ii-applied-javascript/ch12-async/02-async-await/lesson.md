# `async` and `await`

Promises work, but a long chain of `.then()` callbacks can become difficult to read. An `async` function can use `await` to pause until a promise settles, while keeping the code shaped like the order we mean. The program is still asynchronous; the syntax is simply easier to follow.

This time we will start two operations in a known order and deliberately give the second one less work to do. That lets us see the important distinction between request order and completion order.

```javascript
function delay(value, milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

function loadProfile() {
  return delay("Loaded profile", 30);
}

function loadSettings() {
  return delay("Loaded settings", 0);
}

async function showProfile() {
  const profile = await loadProfile();
  console.log(profile);
}

async function showSettings() {
  const settings = await loadSettings();
  console.log(settings);
}

showProfile();
showSettings();
```

```text
Loaded settings
Loaded profile
```

`showProfile` is asynchronous even though its body reads from top to bottom. Calling it starts the profile work and returns a promise of its own. The next line starts the settings work before the profile has finished. Settings returns first because its delay is shorter, so the output order differs from the request order.

> `async` marks a function that returns a promise.
>
> `await` waits for a promise inside an async function and gives us its fulfilled value.
>
> `await` pauses the current async function, not the entire JavaScript runtime. Other asynchronous work can continue while this function is waiting.

---

## Try it Yourself

Await two resolved promises in sequence and print both values. Add a third step that uses the first result.

---

## More background

See [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

---
