## Solution

```javascript
function runTask(shouldFail) {
  try {
    if (shouldFail) throw new Error("Task failed");
    console.log("Task succeeded");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Cleanup complete");
  }
}

runTask(false);
runTask(true);
```

```text
Task succeeded
Cleanup complete
Task failed
Cleanup complete
```

`finally` is the correct place for work that must happen after either outcome.

---
