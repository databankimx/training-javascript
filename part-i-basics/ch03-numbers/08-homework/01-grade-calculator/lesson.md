# Homework: grade calculator

Create a grade calculator from points earned and points possible. Print the percentage to one decimal place, then print a letter label using these boundaries: 90 or more is `A`, 80 or more is `B`, and 70 or more is `C`. Anything lower should be labelled `Needs more practice`.

```javascript
const earned = 33;
const possible = 40;
const percentage = /* calculate the percentage */;
const grade = /* choose a label */;
console.log(/* display the percentage */);
console.log(grade);
```

```text
82.5%
B
```

---

## Try it Yourself

Test a score at each boundary, a score just below each boundary, and a perfect score. Explain why the percentage is formatted only when it is displayed, rather than rounded before the grade is chosen.

Use **Show example (spoiler)** when you have made a first attempt and want to compare approaches.

---

## More background

See [MDN: Conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) and [MDN: toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).

---
