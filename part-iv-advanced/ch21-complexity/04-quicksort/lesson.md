# Quicksort

Quicksort is a divide-and-conquer algorithm. It chooses one value as a **pivot**, divides the other values into a lower group and a higher group, then applies the same process to each group.

```javascript
function quicksort(items) {
  if (items.length < 2) return items;

  const pivot = items.at(-1);
  const lower = items.slice(0, -1).filter(value => value <= pivot);
  const higher = items.slice(0, -1).filter(value => value > pivot);

  return [...quicksort(lower), pivot, ...quicksort(higher)];
}
```

The base case says that an empty or one-value array is already sorted. The pivot is the last value in this implementation. `filter()` creates two partitions, and the spread operator joins the sorted lower partition, the pivot, and the sorted higher partition.

## Complexity review

If the pivot divides the input into two reasonably balanced pieces, there are about `log n` partitioning levels. Each level processes about `n` values, so the average cost is `O(n log n)`.

If the pivot is repeatedly the smallest or largest value, one partition is empty and the other contains nearly the whole input. The recursion becomes a long chain, and the worst case is `O(n²)`. Pivot choice is not a cosmetic detail. It changes the shape of the work.

This teaching version allocates temporary arrays. Production implementations often choose pivots more carefully and sort in place to reduce memory use.

```text
Quicksort: 1000 values, time 0.0xx ms
```

The exact time varies by machine. The visualizer lets you watch the partitions and compare pivot behavior.

> **Divide and conquer** means breaking a problem into smaller problems, solving those smaller problems, and combining their results.

---

## Try it Yourself

Change the pivot from the last value to the first value. Try the reverse-sorted input and explain why that pivot rule creates unbalanced partitions. Then add a comparison counter and report how the count changes when the input doubles.

---

## More background

[MDN: Array.prototype.toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

---
