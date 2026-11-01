# Homework: grade label

Turn a numeric score into a label. Use `A` for 90 or more, `B` for 80 or more, `C` for 70 or more, and `Needs more practice` for anything lower.

```javascript
const score = 82;
let label;

if (/* highest boundary */) {
  label = "A";
} else if (/* next boundary */) {
  label = "B";
} else {
  label = /* remaining labels */;
}

console.log(label);
```

```text
B
```

---

## Try it Yourself

Test every boundary and one value below the lowest boundary. Keep the conditions in descending order and explain why changing their order can produce the wrong label.

Use **Show example (spoiler)** after you have tested your own branches.

---

## More background

See [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

---
