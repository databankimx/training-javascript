# `try`, `catch`, and `finally`

When an operation can throw an error, put the risky call in `try`. A matching `catch` handles the failure, and `finally` runs whether the operation succeeded or failed.

```javascript
function readSettings() {
  throw new Error("Could not read settings");
}

try {
  readSettings();
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Cleanup complete");
}
```

> `throw` signals that an operation cannot continue normally.
>
> `try` contains code that may fail.
>
> `catch` receives the thrown error and decides how to respond.
>
> `finally` runs after either success or failure, so it is useful for cleanup.

```text
Could not read settings
Cleanup complete
```

The function throws an `Error`. The `catch` block prints its message instead of letting the program stop without a useful explanation. The `finally` block still runs afterward.

---

## Try it Yourself

Add a successful `try` example and observe that `finally` still runs. Then print the error name as well as its message.

---

## More background

See [MDN: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

---
