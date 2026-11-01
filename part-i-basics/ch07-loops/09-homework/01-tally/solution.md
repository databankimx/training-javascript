## Solution

```javascript
const scores = [6, 9, 4, 8, 3];
let count = 0;
let total = 0;

for (const score of scores) {
  if (score >= 5) {
    count += 1;
    total += score;
  }
}

console.log(`Count: ${count}`);
console.log(`Total: ${total}`);
```

```text
Count: 3
Total: 23
```

The loop updates both accumulators only for passing scores. The passing values are 6, 9, and 8, for a total of 23. Keeping the count and total updates together means both results describe the same selected values.

---
