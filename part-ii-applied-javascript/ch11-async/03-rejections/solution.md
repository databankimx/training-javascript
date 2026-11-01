## Solution

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

```text
Could not connect
```

The rejected promise becomes a catchable error at the `await` expression.

---
