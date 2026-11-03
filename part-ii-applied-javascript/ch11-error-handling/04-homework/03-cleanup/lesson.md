# Homework: guarantee cleanup

Complete a function that reports success or failure and always prints a cleanup message afterward. In real code, that cleanup might close a file, release a lock, hide a loading indicator, or reset a temporary status. The message is standing in for work that should not be skipped merely because the main task failed.

```javascript
function runTask(shouldFail) {
  try {
    if (shouldFail) throw new Error("Task failed");
    console.log("Task succeeded");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(/* cleanup */);
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

---

## Try it Yourself

Replace the cleanup message with a counter or status update. Explain why it prints after both the successful and failed calls.

Use **Show example (spoiler)** after you have tested the function.

---

## More background

See [MDN: finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#finally).

---
