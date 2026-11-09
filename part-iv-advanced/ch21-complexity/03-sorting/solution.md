# Solution

The algorithms can report comparisons and swaps separately. The exact totals depend on the input order, but all three still have quadratic worst-case growth.

```javascript
console.log("Selection, bubble, and insertion all sort the same input.");
console.log("For large data, prefer a well-tested O(n log n) implementation.");
```

```text
Selection, bubble, and insertion all sort the same input.
For large data, prefer a well-tested O(n log n) implementation.
```

Insertion sort is often the most practical of these three for a small or nearly sorted collection. That is a conditional advantage, not a general pardon for quadratic algorithms.
