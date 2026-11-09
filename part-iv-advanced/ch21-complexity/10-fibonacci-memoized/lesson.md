# Memoized Fibonacci

The naive function repeatedly calculates values it already knows. **Memoization** means storing a result the first time we calculate it, then retrieving that result on later calls.

```javascript
const memo = new Map([[0, 0], [1, 1]]);
let callCount = 0;

function fibonacci(n) {
  callCount += 1;
  if (memo.has(n)) return memo.get(n);

  const value = fibonacci(n - 1) + fibonacci(n - 2);
  memo.set(n, value);
  return value;
}
```

The `Map` starts with the two base values. Before making deeper calls, the function checks whether the answer is already present. Each new value is calculated once and saved.

```javascript
const n = 40;
const start = performance.now();
const result = fibonacci(n);
const time = (performance.now() - start).toFixed(3);

console.log(`Calculated F(${n}) = ${result}`);
console.log(`Call count: ${callCount}`);
console.log(`Time: ${time} ms`);
```

```text
Calculated F(40) = 102334155
Call count: 79
Time: 0.0xx ms
```

The memoized version grows in `O(n)` time because it calculates each value once. It uses `O(n)` additional space for the stored values and the active calls. The hand-written `Map` makes the idea visible. In application code, a cache helper or a carefully designed iterative solution may be preferable.

> A memo is shared state. Reset it when you need an independent experiment, and decide whether retaining the values for later calls is actually useful.

---

## Try it Yourself

Call the function for `40`, then call it again for `45` without clearing the `Map`. Compare the call count with a fresh `Map`. Then write a version that accepts the cache as an argument instead of closing over a module-level variable.

---

## More background

[MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

---
