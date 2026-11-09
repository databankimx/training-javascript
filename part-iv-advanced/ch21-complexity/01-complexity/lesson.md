# Understanding Big O

An algorithm that feels instant with five values can become a problem with five million. Complexity is how we describe that change without pretending one stopwatch reading tells the whole story.

Big O describes how the amount of work grows as the input grows. It ignores small constant details and asks the useful question: what happens when `n` becomes large?

## Start with the algorithm's shape

Every algorithm has three broad parts:

1. **Input** is the data coming into the algorithm. We call its size `n`.
2. **Process** is the work that transforms or examines that data.
3. **Output** is the result we return or display.

Big O is mostly interested in the process. Reading one value from an array and printing a short message still takes time, but those fixed costs matter less than the way the work grows when `n` becomes large.

| Complexity | Plain-English meaning | Typical example |
| --- | --- | --- |
| `O(1)` | Work stays roughly constant | Looking up a known object property |
| `O(log n)` | Each step removes a large portion of the search space | Binary search |
| `O(n)` | Work grows in direct proportion to the input | Scanning an array once |
| `O(n log n)` | A logarithmic process is repeated across the input | Efficient comparison sorting |
| `O(n²)` | Every item may be compared with every other item | A nested scan |

The notation is not a promise about milliseconds. A well-written `O(n)` operation can beat a poorly implemented `O(log n)` operation for small inputs. Big O is a way to reason about growth, not a substitute for measuring real code.

## Best, average, and worst cases

The same algorithm can do different amounts of work for different inputs of the same size. A linear search that finds its target immediately has a best case of `O(1)`, while a missing target produces the worst case of `O(n)`. We often quote the worst case because it gives us a safety boundary, but the average case can matter when the data is predictable.

Space complexity asks a similar question about memory. Does the algorithm need a few counters, or does it create another collection as large as the input? Time and space can trade places. Merge sort spends additional memory to make its time predictable, while heap sort uses less additional storage but has more complicated index arithmetic.

## Count the work

```javascript
const values = Array.from({ length: 5 }, (_, index) => index + 1);
let linearOperations = 0;
for (const value of values) {
  linearOperations += 1;
  if (value === 5) break;
}
let nestedOperations = 0;
for (const left of values) {
  for (const right of values) {
    nestedOperations += 1;
    if (left === right) break;
  }
}
console.log(`Linear: ${linearOperations}`);
console.log(`Nested: ${nestedOperations}`);
```

```text
Linear: 5
Nested: 15
```

The first loop may inspect every value once, so its growth is `O(n)`. The nested version starts another scan for each outer value. Its exact count here is 15 because the inner loop stops early, but its worst-case growth is still quadratic, `O(n²)`.

> **Worst case** means the most work an algorithm may need for an input of a given size. A search that finds its answer immediately and a search that finds it last are both the same algorithm, but their individual runs do different amounts of work.

## Space matters too

An algorithm can be fast and still consume too much memory. A `Set` built from an array takes extra space, but it may make repeated membership checks much cheaper. We need to count setup work and memory, not just admire the shortest line of code.

## Try it Yourself

Change the array length to 10, then 100. Predict how the linear and nested counts will grow before you run the script. Add a third loop that visits every pair without stopping early and compare its count.

The point is not to memorize a collection of letters. The point is to notice when a harmless-looking loop structure will become an expensive habit.

---

## More background

[MDN: BigInt and numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings) and [Wikipedia: Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)
