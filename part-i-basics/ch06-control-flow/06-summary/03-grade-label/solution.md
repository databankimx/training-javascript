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

The tests run from the highest boundary downward. The first matching branch assigns the label, and the remaining branches are skipped.

---
