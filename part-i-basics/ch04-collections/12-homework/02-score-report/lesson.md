# Homework: nested score report

Create a report from nested arrays. Each student is represented by `[name, scores]`. Print each student’s average, then print the name with the highest average.

```javascript
const students = [
  ["Ada", [90, 95]],
  ["Grace", [88, 92]]
];

const reports = /* transform each student into [name, average] */;
/* print every report */
/* sort a copy and print the highest name */
```

```text
Ada: 92.5
Grace: 90
Ada
```

---

## Try it Yourself

Add a third student and a different number of scores. Handle an empty score list deliberately. Explain how destructuring, `map()`, `reduce()`, and `toSorted()` each contribute to the report.

Reveal the example only after you have traced the nested data by hand.

---

## More background

See [MDN: map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [MDN: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), and [MDN: toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted).

---
