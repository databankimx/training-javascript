# Exercise solution

Here is one way to turn each nested student entry into a report, then sort a copy to find the highest average.

```javascript
const students = [
  ["Ada", [90, 95]],
  ["Grace", [88, 92]]
];

const reports = students.map(([name, scores]) => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return [name, total / scores.length];
});

for (const [name, average] of reports) {
  console.log(`${name}: ${average}`);
}

console.log(reports.toSorted((a, b) => b[1] - a[1])[0][0]);
```

```text
Ada: 92.5
Grace: 90
Ada
```

The outer `map()` creates one report per student. The inner `reduce()` calculates each student’s total, and destructuring keeps the tuple-like positions readable. Sorting a copy by the average leaves the report data available for the earlier output. Each method has one job, which makes the nested calculation easier to inspect when a score is wrong.

---
