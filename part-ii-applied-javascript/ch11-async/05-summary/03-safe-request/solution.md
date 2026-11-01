## Solution

```javascript
const request = shouldFail => shouldFail
  ? Promise.reject(new Error("Request failed"))
  : Promise.resolve("Loaded");

async function safeRequest(shouldFail) {
  try {
    console.log(await request(shouldFail));
  } catch (error) {
    console.log(error.message);
  }
}

await safeRequest(false);
await safeRequest(true);
```

```text
Loaded
Request failed
```

The `try` path handles fulfillment, while `catch` handles the rejected promise.

---
