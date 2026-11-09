# Solution

Passing the cache makes the state explicit and lets each experiment start fresh.

```javascript
function fibonacci(n, memo = new Map([[0, 0], [1, 1]])) {
  if (memo.has(n)) return memo.get(n);

  const value = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo.set(n, value);
  return value;
}

console.log(fibonacci(40));
```

```text
102334155
```

The cache is still shared by the recursive calls for one calculation, but a new top-level call gets a fresh cache by default.

---
