# Memoization and cache keys

Some calculations are expensive, while the same input appears repeatedly. Memoization stores a result and returns it when the same input arrives again. The cache is useful only when the function is predictable: equal inputs must produce equal outputs.

> Memoization is not merely "run it less often." It trades memory for repeated speed. The program keeps a key and its result so the next equal request can skip the calculation.

```javascript
function memoize(fn) {
  const cache = new Map();

  return value => {
    if (!cache.has(value)) {
      cache.set(value, fn(value));
    }

    return cache.get(value);
  };
}

let calls = 0;
const square = memoize(value => {
  calls += 1;
  return value * value;
});

console.log(square(5));
console.log(square(5));
console.log("calls: " + calls);
```

```text
25
25
calls: 1
```

The first call has no entry for `5`, so the wrapped function runs and its result is stored. The second call finds `5` in the `Map` and returns the stored `25`. The counter confirms that the calculation happened once even though we requested the answer twice.

> Memoization is caching for a function. It is safe when the function is pure enough that the same cache key always deserves the same result. A function that depends on the current time, a mutable global, or a changing database should not be cached casually.

## Cache keys are part of the design

Our wrapper accepts one value, so the key is straightforward. A two-argument function needs a key that includes both arguments. If `add(1, 2)` and `add(1, 9)` are both stored under `1`, the cache returns a confidently wrong answer. Efficiency is not an improvement when it makes the bug faster.

## Try it Yourself

Change the wrapped function to accept two numbers and design a cache key that distinguishes every pair. Then try memoizing a function that reads `Date.now()` and explain why the result becomes stale.

---
