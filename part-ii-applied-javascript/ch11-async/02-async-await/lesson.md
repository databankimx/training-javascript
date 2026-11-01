# `async` and `await`

Promises work, but a long chain of `.then()` callbacks can become difficult to read. An `async` function can use `await` to pause until a promise settles, while keeping the code shaped like the order we mean.

```javascript
function loadProfile() {
  return Promise.resolve("Loaded profile");
}

async function showProfile() {
  const profile = await loadProfile();
  console.log(profile);
}

showProfile();
```

> `async` marks a function that returns a promise.
>
> `await` waits for a promise inside an async function and gives us its fulfilled value.

```text
Loaded profile
```

`showProfile` is asynchronous even though its body reads from top to bottom. Calling it starts the work and returns a promise of its own.

---

## Try it Yourself

Await two resolved promises in sequence and print both values. Add a third step that uses the first result.

---

## More background

See [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

---
