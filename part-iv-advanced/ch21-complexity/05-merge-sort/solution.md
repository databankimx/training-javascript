# Solution

The solution counts comparisons while keeping the merge behavior unchanged.

```javascript
let comparisons = 0;

function mergeSort(items) {
  if (items.length < 2) return items;

  const middle = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, middle));
  const right = mergeSort(items.slice(middle));
  const result = [];

  while (left.length && right.length) {
    comparisons += 1;
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return [...result, ...left, ...right];
}

console.log(mergeSort([5, 2, 4, 1, 3]));
console.log(`Comparisons: ${comparisons}`);
```

```text
[ 1, 2, 3, 4, 5 ]
Comparisons: 8
```

The recursive splitting is the same for every input. The values change which side wins each comparison, but the number of levels remains logarithmic.

---
