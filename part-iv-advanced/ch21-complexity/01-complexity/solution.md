# Solution

The important comparison is the growth pattern, not the exact count for five values:

```javascript
const n = 100;
console.log(`Linear work is proportional to ${n}.`);
console.log(`Nested work can approach ${n * n}.`);
```

```text
Linear work is proportional to 100.
Nested work can approach 10000.
```

The nested algorithm does not always perform exactly `n²` operations because it may stop early. `O(n²)` describes the upper growth pattern when the loops do the full amount of work.
