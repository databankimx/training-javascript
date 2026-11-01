## Solution

```javascript
function taskMessage(name, count = 0) {
  return `${name} has ${count} tasks`;
}

console.log(taskMessage("Ada", 3));
console.log(taskMessage("Grace"));
```

```text
Ada has 3 tasks
Grace has 0 tasks
```

The default parameter supplies zero when the second argument is omitted.

---
