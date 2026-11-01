# Exercise solution

Here is one reasonable way to calculate the percentage, choose the label, and format only the value that a person will read.

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

The percentage remains numeric while the grade decision is made. `toFixed(1)` is applied only to the displayed percentage, so formatting does not influence the comparison boundaries. The nested conditional expression follows the thresholds from highest to lowest, which keeps the first matching label as the result.

---
