# Heap sort

Heap sort uses a heap, a tree-shaped structure stored inside an array. In a **max heap**, every parent is at least as large as its children, so the largest value is always at the root at index `0`.

For an item at index `i`, the children are at `2 * i + 1` and `2 * i + 2`. No separate tree nodes are required. The array is doing double duty as both the data and the tree layout, which is efficient and a little unfriendly to anyone trying to read the index arithmetic over lunch.

```javascript
function siftDown(items, root, size) {
  while (true) {
    const left = root * 2 + 1;
    const right = left + 1;
    let largest = root;

    if (left < size && items[left] > items[largest]) largest = left;
    if (right < size && items[right] > items[largest]) largest = right;
    if (largest === root) return;

    [items[root], items[largest]] = [items[largest], items[root]];
    root = largest;
  }
}
```

`siftDown()` repairs one subtree. If the root is smaller than a child, it swaps with the larger child and continues down until the heap property is restored.

```javascript
function heapSort(items) {
  const result = [...items];

  for (let index = Math.floor(result.length / 2) - 1; index >= 0; index -= 1) {
    siftDown(result, index, result.length);
  }

  for (let end = result.length - 1; end > 0; end -= 1) {
    [result[0], result[end]] = [result[end], result[0]];
    siftDown(result, 0, end);
  }

  return result;
}
```

The first loop builds the heap. The second loop moves the largest value from the root to the end of the unsorted region, shrinks that region, and repairs the heap.

## Complexity review

The heap has logarithmic height, so repairing it costs `O(log n)`. We repair it for each of the `n` values, giving heap sort a predictable `O(n log n)` time in the best, average, and worst cases. It uses little additional storage compared with merge sort, but it is not stable and is harder to read.

```text
Heap sort: 1000 values, time 0.0xx ms
```

> A heap is not the same thing as a sorted array. It guarantees that the largest or smallest item is at the root. The remaining items are only arranged enough to preserve the heap rule.

---

## Try it Yourself

Print the array after building the heap and before the extraction loop. Verify that every parent is at least as large as its children. Then add a comparison counter to `siftDown()` and compare a sorted input with a reverse-sorted input.

---

## More background

[MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---
