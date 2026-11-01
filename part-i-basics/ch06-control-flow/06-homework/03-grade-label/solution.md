# Homework: grade label - exercise solution

```javascript
const score = 82;
let label;

if (score >= 90) {
  label = "A";
} else if (score >= 80) {
  label = "B";
} else if (score >= 70) {
  label = "C";
} else {
  label = "Needs more practice";
}

console.log(label);
```

```text
B
```

The tests run from the highest boundary downward. The first matching branch assigns the label, and the remaining branches are skipped. Putting the broadest threshold first would make the more specific grades unreachable, so the order is part of the solution rather than mere decoration.

---
