# Homework: safe asynchronous request

Wrap an asynchronous request in a reusable function that handles both fulfillment and rejection.

```javascript
const request = shouldFail => shouldFail
  ? Promise.reject(new Error("Request failed"))
  : Promise.resolve("Loaded");

async function safeRequest(shouldFail) {
  try {
    console.log(await request(shouldFail));
  } catch (error) {
    console.log(/* error message */);
  }
}

await safeRequest(false);
await safeRequest(true);
```

```text
Loaded
Request failed
```

---

## Try it Yourself

Add a `finally` block that logs cleanup. Try a third call and explain which output belongs to the success path, failure path, and cleanup path.

Use **Show example (spoiler)** after you have tested your function.

---

## More background

See [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

---
