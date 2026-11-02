# Fibonacci and repeated work

Fibonacci is a useful warning because its definition invites a recursive solution:

`F(0) = 0`, `F(1) = 1`, and `F(n) = F(n - 1) + F(n - 2)`.

```javascript
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memo = new Map([[0, 0], [1, 1]]);
function fibonacciMemoized(n) {
  if (memo.has(n)) return memo.get(n);
  const value = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
  memo.set(n, value);
  return value;
}

console.log(`Naive F(10): ${fibonacci(10)}`);
console.log(`Memoized F(10): ${fibonacciMemoized(10)}`);
```

```text
Naive F(10): 55
Memoized F(10): 55
```

Both functions are correct. The naive version recalculates the same earlier values repeatedly. The memoized version stores each result in a `Map` and reuses it.

> **Memoization** means saving a function's previous results so later calls can reuse them instead of doing the same work again.

The lesson is not that recursion is bad. It is that a mathematically elegant definition can still produce an impractical algorithm if it repeats expensive work.

---

## Try it Yourself

Change `n` to 20, then 35. Compare the time it takes. Keep the naive call small enough that your browser or terminal does not become a hostage situation.
