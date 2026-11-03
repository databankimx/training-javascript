# Solution

Operation counters make the growth visible:

```javascript
// Count each comparison in both functions, then search the same sorted data.
// Binary search should need far fewer comparisons as the array grows.
```

```text
The linear search may inspect every value.
The binary search removes half the remaining range each time.
```

The binary algorithm is faster for large sorted data, but it is not a replacement for every search. An unsorted collection, a one-time lookup, or a collection that changes constantly may not justify sorting first.
