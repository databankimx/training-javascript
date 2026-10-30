# Homework: tally values

Given a list of scores, use a loop to count the scores that are at least 5 and add those scores to a total.

```javascript
const scores = [6, 9, 4, 8, 3];
let count = 0;
let total = 0;

for (const score of scores) {
  if (/* passing score */) {
    count += 1;
    total += /* current score */;
  }
}

console.log(`Count: ${count}`);
console.log(`Total: ${total}`);
```

```text
Count: 3
Total: 23
```

---

## Try it Yourself

Complete the condition and total update. Test an empty list, a list where every score passes, and a list where none passes.

Use **Show example (spoiler)** after you have tested your loop.

---

## More background

See [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

---
