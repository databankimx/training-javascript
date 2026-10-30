# `while` loops

Loops repeat a block of code. A `while` loop checks its condition before each pass, then runs the block while that condition is truthy.

```javascript
let count = 1;

while (count <= 3) {
  console.log(count);
  count += 1;
}
```

> The loop condition decides whether another pass should run.
>
> The update changes the value used by the condition. Without it, this loop would run forever. Computers are very committed to following instructions, even bad ones.

```text
1
2
3
```

JavaScript checks `count <= 3`, prints the current value, and adds one. When `count` becomes 4, the condition is false, so the loop ends.

---

## Try it Yourself

Start at 5 and count down to 1. Then change the update and predict whether the loop still ends.

---

## More background

See [MDN: while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).

---
