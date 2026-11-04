## Solution

```javascript
const scores = [8, 4, 7, 3];
let total = 0;
const passing = [];

for (const score of scores) {
  total += score;
  if (score >= 5) {
    passing.push(score);
  }
}

console.log(`Total: ${total}`);
console.log(`Passing: ${passing.join(", ")}`);
```

```text
Total: 22
Passing: 8, 7
```

`total` accumulates every score, while `passing` collects only values that meet the condition. Starting with zero and an empty array gives the loop sensible results even when the input later changes.

---
