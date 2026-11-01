# Rejected promises

A rejected promise is the asynchronous equivalent of a thrown error. With `await`, handle it using the same `try` and `catch` structure we already know.

```javascript
function connect() {
  return Promise.reject(new Error("Could not connect"));
}

async function start() {
  try {
    await connect();
  } catch (error) {
    console.log(error.message);
  }
}

start();
```

> `Promise.reject` creates a failed promise.
>
> An `await` expression that receives a rejected promise throws inside the async function, where `catch` can handle it.

```text
Could not connect
```

Without the `catch`, the rejection would remain unhandled. Asynchronous code still needs an explicit failure path. It has simply moved through a promise instead of a direct function call.

---

## Try it Yourself

Return a successful promise for one connection and a rejected promise for another. Handle both calls without stopping the program.

---

## More background

See [MDN: Promise rejection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch).

---
