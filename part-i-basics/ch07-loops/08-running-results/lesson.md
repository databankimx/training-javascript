# Running totals and collected results

A loop can do more than print values. It can maintain a running total or build a new collection as it visits each item. This is the basic pattern behind reports, summaries, validation counts, and many small pieces of business logic that are less glamorous than a game but considerably more likely to pay the bills.

```javascript
const scores = [8, 4, 7, 3];
let total = 0;
const passing = [];

for (const score of scores) {
  total += score;
  if (score >= 5) {
    passing.push(score);
  }
}

console.log(`Total: ${total}`);
console.log(`Passing: ${passing.join(", ")}`);
```

> An accumulator is a variable declared outside a loop and updated when the loop executes that keeps a running result, such as `total`.
>
> `push` adds a value to the end of an array.

```text
Total: 22
Passing: 8, 7
```

The loop adds every score to `total`. When a score is at least 5, it also adds that score to `passing`. The total is 22 because 8 + 4 + 7 + 3 equals 22. The accumulator starts at zero, and the result array starts empty, so both have sensible values even before the first item arrives.

---

## Try it Yourself

Calculate the total and average of a different score list. Build a second array containing only scores below 5. Decide what should happen when the input array is empty.

---

## More background

See [MDN: Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

---
