# `for` loops

A `for` loop puts the counter setup, stopping condition, and update together. It is a common choice when you know the shape of the repetition before it starts, such as visiting indexes from zero up to the length of an array.

```javascript
for (let index = 0; index < 3; index += 1) {
  console.log(index);
}
```

> The first part runs once before the loop: `let index = 0`.
>
> The middle part is checked before each pass: `index < 3`.
>
> The last part runs after each pass: `index += 1`.

```text
0
1
2
```

JavaScript starts at zero, prints 0, updates to 1, and continues until the condition is false. The counter is declared inside the loop, so it is available only there. Keeping the three moving parts together makes the loop easier to inspect than scattering initialization and updates across unrelated lines.

---

## Try it Yourself

Change the loop to print 1 through 5. Then make it count backward. Identify the initialization, condition, and update in each version.

---

## More background

See [MDN: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).

---
