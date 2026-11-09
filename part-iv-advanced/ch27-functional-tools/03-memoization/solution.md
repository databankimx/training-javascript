# Solution

```javascript
function memoizePair(fn) {
  const cache = new Map();

  return (left, right) => {
    const key = left + ":" + right;
    if (!cache.has(key)) {
      cache.set(key, fn(left, right));
    }
    return cache.get(key);
  };
}

let calls = 0;
const add = memoizePair((left, right) => {
  calls += 1;
  return left + right;
});

console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 9));
console.log("calls: " + calls);
```

```text
3
3
10
calls: 2
```

The key includes both arguments, so `(1, 2)` and `(1, 9)` cannot collide. The repeated pair is calculated once, while the different pair needs a second calculation.

---
