# Array methods - exercise solution

```javascript
const queue = ["first", "second", "third"];
queue.push("fourth");
const removed = queue.shift();
const copy = queue.slice();

console.log(removed);
console.log(queue.join(", "));
console.log(copy.join(", "));
```

```text
first
second, third, fourth
second, third, fourth
```

`shift()` changes the original queue. `slice()` creates a separate outer array, so the copied collection can be changed later without changing the original list of references.

---
