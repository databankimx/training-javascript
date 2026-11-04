# Solution

The solution adds a helper that checks the heap property after the build step.

```javascript
function isMaxHeap(items, size = items.length) {
  for (let parent = 0; parent < Math.floor(size / 2); parent += 1) {
    const left = parent * 2 + 1;
    const right = left + 1;
    if (items[parent] < items[left]) return false;
    if (right < size && items[parent] < items[right]) return false;
  }
  return true;
}
```

The check is useful while learning because it separates the heap-building phase from the extraction phase. Once the root is repeatedly moved to the sorted region, the remaining active portion is a smaller heap.

---
