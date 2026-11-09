# Solution

The `Set` solution remembers values already seen. A set lookup is expected `O(1)`, so the loop performs one lookup per input value. The complete algorithm is expected `O(n)` time and `O(n)` additional space.

```javascript
const values = Array.from({ length: 5000 }, (_, index) => index);
values.push(1234);

function hasDuplicateSlow(items) {
  for (let left = 0; left < items.length; left += 1) {
    for (let right = left + 1; right < items.length; right += 1) {
      if (items[left] === items[right]) return true;
    }
  }
  return false;
}

function hasDuplicateFast(items) {
  const seen = new Set();

  for (const item of items) {
    if (seen.has(item)) return true;
    seen.add(item);
  }

  return false;
}

const slowStart = performance.now();
const slowResult = hasDuplicateSlow(values);
const slowTime = (performance.now() - slowStart).toFixed(3);

const fastStart = performance.now();
const fastResult = hasDuplicateFast(values);
const fastTime = (performance.now() - fastStart).toFixed(3);

console.log(`Duplicates: ${slowResult}`);
console.log(`Slow time: ${slowTime} ms`);
console.log(`Fast duplicates: ${fastResult}`);
console.log(`Fast time: ${fastTime} ms`);
```

```text
Duplicates: true
Slow time: 0.0xx ms
Fast duplicates: true
Fast time: 0.0xx ms
```

The nested-loop version uses `O(1)` additional space, but its worst-case time is `O(n²)`. The `Set` version uses `O(n)` additional space, but its expected time is `O(n)`. We traded memory for a much better growth rate.

The exact timings vary by machine, and the duplicate near the end gives the slow version plenty of work to do. The operation counts are more useful than a single tiny timing result, but both measurements tell the same story as the input grows.

---
