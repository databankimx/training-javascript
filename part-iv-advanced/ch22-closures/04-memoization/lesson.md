# Memoization with a closure

A closure can remember more than a counter. It can hold a cache that survives between calls. Caching a result so we do not repeat work is called memoization.

```javascript
function makeSquareCache() {
  const cache = new Map();

  return function square(value) {
    if (!cache.has(value)) {
      console.log("calculated: " + (value * value));
      cache.set(value, value * value);
    } else {
      console.log("cached: " + cache.get(value));
    }

    return cache.get(value);
  };
}

const square = makeSquareCache();
square(3);
square(3);
```

```text
calculated: 9
cached: 9
```

The cache is private to the returned function. The first call calculates and stores the answer. The second call finds the existing value and avoids repeating the calculation.

Memoization is useful when the same expensive input appears repeatedly. It also has a cost: the cache consumes memory, and stale data can be wrong if the underlying information changes.

## Try it Yourself

Change the cache to store cube results. Then call it with two different values and repeat one of them. Identify which calls calculate and which calls use the cache.

---

