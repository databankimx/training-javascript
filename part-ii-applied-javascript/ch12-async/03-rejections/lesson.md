# Rejected promises

A rejected promise is the asynchronous equivalent of a thrown error. With `await`, handle it using the same `try` and `catch` structure we already know. The failure did not disappear because the operation happened later. It merely arrived through a Promise.

This distinction matters because calling an asynchronous function does not hand us a final value or a direct exception. It hands us a promise. The caller must either attach a rejection handler with `.catch()` or use `await` inside a `try` block. Ignoring the promise leaves JavaScript with an unhandled rejection, which is the asynchronous version of allowing an exception to escape without a useful response.

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
>
> `.catch()` attaches a handler to a promise chain when we are using `.then()` instead of `await`.

```text
Could not connect
```

Without the `catch`, the rejection would remain unhandled. Asynchronous code still needs an explicit failure path. It has simply moved through a promise instead of a direct function call, which is a longer route for the same responsibility. A useful handler can retry, show a friendly message, record diagnostics, or deliberately pass the failure to a higher-level caller. Logging an error and pretending the request succeeded is not error handling. It is merely putting a hat on the problem.

---

## Try it Yourself

Return a successful promise for one connection and a rejected promise for another. Handle both calls without stopping the program.

---

## More background

See [MDN: Promise rejection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch).

---
