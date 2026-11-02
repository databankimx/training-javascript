# Quicksort, merge sort, heap sort, and shell sort

The previous lesson introduced three sorting algorithms that are useful because we can watch every comparison and swap. They all have a worst-case cost of `O(n²)`, though, so they become expensive as the collection grows.

This lesson introduces four algorithms that are commonly discussed when a program needs to sort a larger collection. They do not all solve the same problem in the same way. Each one makes a different tradeoff among speed, memory, predictability, and implementation complexity.

The script uses the same 1,000 deterministic values for every algorithm. The values are scrambled, but they are generated the same way each time, so our comparison is repeatable. The algorithms each receive a fresh copy. One algorithm does not get to benefit from the work done by the previous one, which would make for a rather suspicious experiment.

```javascript
const values = Array.from(
  { length: 1000 },
  (_, index) => (index * 137) % 1000
);
```

The expression `(index * 137) % 1000` gives us values from `0` through `999` in a repeatable scrambled order. The remainder operator keeps each value inside the range. We are not calling a random shuffle here because random input would make it harder to compare one run with another.

---

## Quicksort: partition around a pivot

Quicksort chooses one value as a pivot. It places values less than or equal to the pivot in one group and larger values in another group. It then applies the same process recursively to those two groups.

```javascript
function quicksort(items) {
  if (items.length < 2) return items;

  const pivot = items.at(-1);
  const lower = items
    .slice(0, -1)
    .filter(value => value <= pivot);
  const higher = items
    .slice(0, -1)
    .filter(value => value > pivot);

  return [
    ...quicksort(lower),
    pivot,
    ...quicksort(higher)
  ];
}

const sorted = quicksort(values);
console.log(`Quicksort: ${sorted.length} values`);
```

The first line is the base case. A collection with zero or one value is already sorted, so there is nothing left to divide. The pivot is the last value in this implementation. `filter()` creates the two partitions, and the spread operator joins the sorted lower partition, the pivot, and the sorted higher partition into a new array.

The pivot choice matters. If the pivot divides the collection into reasonably balanced pieces, the algorithm has about `log n` levels, and each level processes about `n` values. That gives an average cost of `O(n log n)`. If the pivot is repeatedly the smallest or largest value, the partitions become lopsided, and the cost degrades to `O(n²)`.

This simple version also allocates several temporary arrays. Production implementations often choose pivots more carefully and sort in place to reduce memory use. The point here is to make the partitioning idea visible, not to sneak a production library into a teaching example wearing a fake mustache.

---

## Merge sort: split, then merge

Merge sort takes the opposite approach. It divides the collection into halves until each piece contains one value. It then merges pairs of sorted pieces, always taking the smaller next value.

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

const sorted = mergeSort(values);
console.log(`Merge sort: ${sorted.length} values`);
```

The base case is the same as before. A one-value collection is already sorted. `slice()` divides the input, and the recursive calls sort the two halves before the `while` loop combines them.

At each merge level, every value is considered once. The number of levels is logarithmic because the collection is cut in half each time. That makes merge sort `O(n log n)` in the best, average, and worst cases. Its usual tradeoff is memory: the temporary arrays used during splitting and merging take additional space.

---

## Heap sort: use a priority structure

Heap sort organizes the values as a max heap. In a max heap, the largest value is at the root, and each parent is at least as large as its children. The algorithm moves that root to the end of the result, repairs the heap, and repeats.

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

The first loop builds the heap. The second loop repeatedly swaps the largest remaining value, which is at index `0`, with the value at the current end of the unsorted region. `siftDown()` then moves the new root down until the heap property is restored.

The heap has logarithmic height, so restoring it costs `O(log n)`. We do that for each of the `n` values, giving heap sort a predictable `O(n log n)` time in all cases. It uses little additional storage compared with merge sort, but the index arithmetic makes it harder to read and debug.

---

## Shell sort: insertion sort with gaps

Shell sort improves insertion sort by comparing values that are separated by a gap. It starts with a large gap, moves values closer to their eventual positions, and gradually reduces the gap until it finishes with an ordinary insertion-sort pass.

```javascript
function shellSort(items) {
  const result = [...items];

  for (
    let gap = Math.floor(result.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let index = gap; index < result.length; index += 1) {
      const value = result[index];
      let position = index;

      while (
        position >= gap &&
        result[position - gap] > value
      ) {
        result[position] = result[position - gap];
        position -= gap;
      }

      result[position] = value;
    }
  }

  return result;
}
```

The outer loop chooses the gaps. The inner loop is insertion sort with `gap` taking the place of `1`. When the gap is large, a value can move a long distance in one pass. When the gap reaches `1`, the collection is already partly organized, so the final insertion pass has less work to do.

Shell sort does not have one universal Big-O result. Its performance depends on the sequence of gaps. Some gap sequences perform much better than `O(n²)`, while simpler sequences can still approach quadratic behavior. When you quote a complexity for Shell sort, name the gap sequence or say that the answer depends on the chosen variant.

---

## Comparing the algorithms

Here is the short version of the tradeoffs:

| Algorithm | How it works | Typical or guaranteed time | Main tradeoff |
| --- | --- | --- | --- |
| Quicksort | Partition around a pivot, then sort both sides | Average `O(n log n)`, worst `O(n²)` | Pivot choice affects worst-case behavior |
| Merge sort | Split into halves, then merge sorted halves | `O(n log n)` | Uses additional memory for temporary arrays |
| Heap sort | Build a heap and repeatedly remove the largest value | `O(n log n)` | Predictable, but more difficult to implement and read |
| Shell sort | Run insertion sort over shrinking gaps | Depends on the gap sequence | Fast in practice for some inputs, but less predictable |

The script reports the result length and elapsed time for each algorithm:

```text
Sorting 1,000 values with the same deterministic input:
Quicksort: 1000 values, time 0.0xx ms
Merge sort: 1000 values, time 0.0xx ms
Heap sort: 1000 values, time 0.0xx ms
Shell sort: 1000 values, time 0.0xx ms
```

The exact times will vary with the computer running the script, and a timing difference this small is not a scientific benchmark. The useful comparison is the algorithmic behavior and the way each method scales as `n` grows.

In ordinary application code, JavaScript's built-in `sort()` or `toSorted()` is usually the sensible first choice. Reach for a hand-written algorithm when you are learning, studying a data structure, satisfying a specific performance constraint, or working under a requirement that the built-in method does not meet.

## Try it Yourself

Change `values` to an already sorted collection and run the script again. Then try a reverse-sorted collection.

For each input, record the elapsed time and explain what you expect to happen:

- Which algorithm changes its behavior most noticeably?
- Why can a poor quicksort pivot turn balanced partitions into a long chain of partitions?
- Which algorithm gives a predictable `O(n log n)` upper bound?
- Which algorithm uses extra temporary arrays?

Then change the quicksort pivot from the last value to the first value. Run the reverse-sorted input again and explain why that pivot rule is a particularly bad match for that data.

Believe it or not, you now have several ways to sort a collection. The rest is choosing the least surprising one for the problem in front of you.

---

## Further reading

Look up the MDN documentation for [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and [`Array.prototype.toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted). Compare the built-in methods with the four algorithms in this lesson, and pay attention to whether the method mutates the original array.

---
