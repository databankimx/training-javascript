## Solution

```javascript
function add(left, right) {
  return left + right;
}

const total = add(3, 4);
console.log(`Total: ${total}`);
```

```text
Total: 7
```

The function returns the sum, and the caller chooses to store and print it. That keeps calculation separate from presentation, which gives the result more than one possible use.

---
