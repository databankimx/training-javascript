# Linear and binary search

Searching is where complexity becomes practical. A linear search checks values one at a time, so its worst case is `O(n)`. Binary search discards half of the remaining values after each comparison, so its search work is `O(log n)`.

```javascript
const values = [3, 8, 12, 19, 24, 31, 42, 57, 63];

function linearSearch(items, target) {
  for (let index = 0; index < items.length; index += 1) {
    if (items[index] === target) return index;
  }
  return -1;
}

function binarySearch(items, target) {
  let low = 0;
  let high = items.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (items[middle] === target) return middle;
    if (items[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}
```

```text
Linear search: index 7, steps 8, time 0.0xx ms
Binary search: index 7, steps 3, time 0.0xx ms
```

The exact time varies by machine, so the important comparison is the number of steps. The linear search checks values one at a time. The binary search reaches the same index after discarding half of the remaining range at each step.

Binary search only works because `values` is sorted. If the values are not ordered, deciding which half to discard is guesswork wearing a lab coat. Sorting also costs time, so binary search pays off when the data is already sorted or reused often enough to justify the setup.

> `-1` is a common “not found” result for index-based searches. Always document or check that case before using the returned index.

## Try it Yourself

Search for the first, middle, and missing values. Add operation counters to both functions and compare them on an array with 1,000 sorted values.
