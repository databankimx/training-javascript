## Solution

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

```text
Could not read settings
Cleanup complete
```

`catch` handles the thrown `Error`, and `finally` runs regardless of the failure.

---
