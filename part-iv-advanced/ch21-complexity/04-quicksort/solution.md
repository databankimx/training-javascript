# Solution

The exercise changes the pivot rule and counts comparisons.

```javascript
let comparisons = 0;

function quicksort(items) {
  if (items.length < 2) return items;

  const pivot = items[0];
  const lower = items.slice(1).filter(value => {
    comparisons += 1;
    return value <= pivot;
  });
  const higher = items.slice(1).filter(value => value > pivot);

  return [...quicksort(lower), pivot, ...quicksort(higher)];
}

console.log(quicksort([5, 4, 3, 2, 1]));
console.log(`Comparisons: ${comparisons}`);
```

```text
[ 1, 2, 3, 4, 5 ]
Comparisons: 10
```

The first value is a poor pivot for this reverse-sorted input because every other value goes into one partition. The result is correct, but the work is much closer to `O(n²)` than balanced quicksort's typical `O(n log n)` behavior.

---
