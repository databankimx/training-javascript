# Selection, bubble, and insertion sort

Sorting is a good place to see that “works” and “scales well” are different compliments. Selection sort, bubble sort, and insertion sort are useful for learning because each is easy to trace, but all three have `O(n²)` worst-case time.

## Selection sort

Selection sort searches the unsorted portion for the smallest value, then swaps it into the next position. It performs many comparisons but relatively few swaps.

```javascript
function selectionSort(items) {
  const result = [...items];
  for (let start = 0; start < result.length - 1; start += 1) {
    let smallest = start;
    for (let index = start + 1; index < result.length; index += 1) {
      if (result[index] < result[smallest]) smallest = index;
    }
    [result[start], result[smallest]] = [result[smallest], result[start]];
  }
  return result;
}
```

The outer loop chooses the next position. The inner loop scans the remaining unsorted values to find its smallest occupant. That means roughly `n` comparisons for the first position, `n - 1` for the second, and so on. The total is `O(n²)` comparisons, even if the array is already sorted.

## Bubble sort

Bubble sort repeatedly compares neighboring values and swaps them when they are backward. Large values bubble toward the end. It is easy to understand and usually a poor choice for large data.

```javascript
function bubbleSort(items) {
  const result = [...items];
  for (let end = result.length - 1; end > 0; end -= 1) {
    for (let index = 0; index < end; index += 1) {
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
      }
    }
  }
  return result;
}
```

Each pass moves the largest remaining value to the right-hand boundary. The nested loops give a worst-case complexity of `O(n²)`. A production version can stop early when a pass makes no swaps, improving the best case for already sorted input.

## Insertion sort

Insertion sort grows a sorted region one value at a time. It can be quite reasonable for small or nearly sorted data, even though its worst case is still `O(n²)`.

```javascript
function insertionSort(items) {
  const result = [];
  for (const value of items) {
    let index = result.length;
    while (index > 0 && result[index - 1] > value) index -= 1;
    result.splice(index, 0, value);
  }
  return result;
}
```

The values before `index` are already sorted. Each new value walks left until it finds its place. A nearly sorted array may require very little movement, so insertion sort can be useful for small or nearly sorted data. Its worst case, such as reverse-sorted input, is still `O(n²)`.

The script uses the same deterministic scrambled sequence for all three algorithms. That keeps the comparison repeatable while still giving the algorithms work to do. It does not reshuffle the array separately before each sort.

```text
Sorting 1,000 values with the same deterministic input:
Selection sort: 1000 values, comparisons 499500, swaps 999, time 0.0xx ms
Bubble sort: 1000 values, comparisons 499500, swaps 249500, time 0.0xx ms
Insertion sort: 1000 values, comparisons 250499, swaps 0, time 0.0xx ms
```

All three algorithms sort the same 1,000 values. Their comparison and swap counts are different, which is exactly why measuring them is useful before we reach faster `O(n log n)` methods. The exact timing varies by machine.

| Algorithm | Main idea | Worst-case time |
| --- | --- | --- |
| Selection sort | Select the smallest remaining value | `O(n²)` |
| Bubble sort | Swap adjacent values that are out of order | `O(n²)` |
| Insertion sort | Insert each value into a sorted prefix | `O(n²)` |

## Try it Yourself

Add operation counters to each algorithm. Try an already sorted array and a reverse-sorted array. Which algorithm changes its behavior most noticeably, and why?
