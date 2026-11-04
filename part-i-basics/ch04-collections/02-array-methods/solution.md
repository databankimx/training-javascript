# Exercise solution

Here is one way to treat the array as a small queue, then make a separate copy of what remains.

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

`shift()` changes the original queue. `slice()` creates a separate outer array, so the copied collection can be changed later without changing the original list of references. The important distinction is not that one method is “good” and the other is “bad.” It is whether we want the original collection to change.

---
