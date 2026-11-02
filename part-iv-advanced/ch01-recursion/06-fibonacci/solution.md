# Solution

The memoized version keeps the same recursive definition but caches results:

```javascript
const memo = new Map([[0, 0], [1, 1]]);

function fibonacciMemoized(n) {
  if (memo.has(n)) return memo.get(n);
  const value = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
  memo.set(n, value);
  return value;
}

console.log(fibonacciMemoized(35));
```

```text
9227465
```

The `Map` changes the performance dramatically because each Fibonacci value is calculated once and then reused.
