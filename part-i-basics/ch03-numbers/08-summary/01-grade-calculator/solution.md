# Homework: grade calculator - exercise solution

```javascript
const earned = 33;
const possible = 40;
const percentage = earned / possible * 100;
const grade = percentage >= 90 ? "A" : percentage >= 80 ? "B" : percentage >= 70 ? "C" : "Needs more practice";

console.log(`${percentage.toFixed(1)}%`);
console.log(grade);
```

```text
82.5%
B
```

The percentage remains numeric while the grade decision is made. `toFixed(1)` is applied only to the displayed percentage, so formatting does not influence the comparison boundaries.

---
