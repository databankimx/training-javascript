## Solution

```javascript
function describeTasks(name, count) {
  console.log(`${name} has ${count} tasks`);
}

describeTasks("Ada", 3);
```

```text
Ada has 3 tasks
```

The arguments are matched to the parameters by position. The function stays reusable because the caller supplies the details instead of the declaration hard-coding them.

---
