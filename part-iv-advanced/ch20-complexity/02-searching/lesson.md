# Linear and binary search

Searching is where complexity becomes practical. We will answer the same question two ways, using the values `1` through `20` and looking for the target `17`.

## Linear search

A linear search checks one value at a time. It works on sorted or unsorted data, but its worst case is `O(n)` because it may inspect every value.

The algorithm is straightforward:

```text
For each index from 0 through n - 1:
    If the value at that index is the target, return the index.
Return -1 when every value has been checked.
```

```javascript
const values = Array.from({ length: 20 }, (_, index) => index + 1);
const shuffled = [...values];
for (let index = shuffled.length - 1; index > 0; index -= 1) {
  const swapIndex = Math.floor(Math.random() * (index + 1));
  [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
}

function linearSearch(items, target) {
  for (let index = 0; index < items.length; index += 1) {
    if (items[index] === target) return index;
  }
  return -1;
}
```

The script prints the shuffled array and target before it runs the search. The shuffle matters because a sorted example would make linear search look more cooperative than it deserves.

## Binary search

Binary search checks the middle value and discards half of the remaining range after every comparison. Its search work is `O(log n)`, but it requires sorted data. Sorting costs time, so binary search is most useful when the data is already sorted or reused often.

Its decision process is:

```text
Set low to the first index and high to the last index.
While low is not greater than high:
    Check the middle value.
    If it is the target, return its index.
    If it is too small, discard the lower half.
    Otherwise, discard the upper half.
Return -1 when the range is empty.
```

For the sorted values `1` through `20`, searching for `17` checks a middle value near `10`, then a value near `15`, then `18`, and finally `17`. The range is cut down each time rather than moving one position at a time.

```javascript
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

The script then prints the sorted array and the same target before running binary search. The target has a different index in the two arrays because the data arrangements differ.

```text
Linear data: 12, 4, ... 17, ...
Linear target: 17
Linear search: index 8, steps 9, time 0.0xx ms
Sorted data: 1, 2, ... 20
Binary target: 17
Binary search: index 16, steps 4, time 0.0xx ms
```

The shuffle and exact timing vary by run. The useful comparison is the number of steps. Linear search checks values one at a time. Binary search keeps cutting the remaining range in half.

> `-1` is a common “not found” result for index-based searches. Check that case before using the returned index.

## Try it Yourself

Search for the first, middle, and missing values. Add operation counters to both functions and compare them on 1,000 values. Explain why binary search cannot use the shuffled array without sorting it first.
