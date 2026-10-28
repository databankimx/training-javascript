# Searching and testing arrays - exercise solution

```javascript
const scores = [62, 88, 91];
const passing = scores.filter(score => score >= 70);

console.log(scores.includes(88));
console.log(scores.indexOf(91));
console.log(scores.find(score => score >= 90));
console.log(scores.some(score => score < 60));
console.log(passing.every(score => score >= 70));
```

```text
true
2
91
false
true
```

Each method answers a different question. `find()` returns data, while `some()` and `every()` return booleans. The filtered array is used for the final test so the condition is explicit.

---
