# Solution

The solution prints the gap sequence before sorting.

```javascript
function shellGaps(length) {
  const gaps = [];
  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    gaps.push(gap);
  }
  return gaps;
}

console.log(shellGaps(20));
```

```text
[ 10, 5, 2, 1 ]
```

The final gap of `1` is essential because it gives the algorithm its last ordinary insertion-sort pass. Earlier gaps do the long-distance cleanup; the final pass finishes the ordering.

---
