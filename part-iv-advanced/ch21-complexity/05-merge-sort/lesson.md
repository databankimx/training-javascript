# Merge sort

Merge sort is another divide-and-conquer algorithm. It splits the array in half until each piece contains one value, then merges pairs of sorted pieces into larger sorted pieces.

```javascript
function mergeSort(items) {
  if (items.length < 2) return items;

  const middle = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, middle));
  const right = mergeSort(items.slice(middle));
  const result = [];

  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return [...result, ...left, ...right];
}
```

The base case is a one-value array. During the merge, the first unused value in each half is the smallest remaining candidate. We copy the smaller candidate into `result`, then append whichever half still has values.

## Complexity review

The array is divided in half at every level, so there are `log n` levels. Every level considers each value once while merging. The time complexity is therefore `O(n log n)` in the best, average, and worst cases.

The tradeoff is space. This readable version creates slices and result arrays, so it uses additional memory. Stable merge sort is useful when equal values must retain their original order, but the implementation cost and memory use still matter.

```text
Merge sort: 1000 values, time 0.0xx ms
```

---

## Try it Yourself

Add a comparison counter to the merge loop. Sort an already sorted array and a reverse-sorted array. Explain why the algorithm still has `O(n log n)` time even when the input is already ordered.

---

## More background

[MDN: Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

---
