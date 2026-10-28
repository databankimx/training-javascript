# Collection pipelines - exercise solution

```javascript
const scores = [10, 2, 8, 4];
const passing = scores.filter(score => score >= 5);
const total = passing.reduce((sum, score) => sum + score, 0);
const average = passing.length === 0 ? 0 : total / passing.length;

console.log(average);
console.log(scores.toSorted((a, b) => a - b).join(","));
```

```text
9
2,4,8,10
```

The empty-collection check happens before division, so the average has a defined result even when no item passes. `toSorted()` creates a separate ordered result.

---
