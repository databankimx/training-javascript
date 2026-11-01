# `while` loops

Loops repeat a block of code. That is useful when a task has a natural stopping condition, such as reading records until there are no more, retrying a request, or walking through a queue of work.

A `while` loop checks its condition before each pass, then runs the block while that condition is truthy. Because the check happens first, it is perfectly possible for a `while` loop to run zero times.

```javascript
let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}
```

> The loop condition decides whether another pass should run.
>
> The update changes the value used by the condition. `count++` adds one to `count`; `count += 1` would do the same thing and can be clearer when the increment is not exactly one. Without an update, this loop would run forever. Computers are very committed to following instructions, even bad ones.

```text
1
2
3
```

JavaScript checks `count <= 3`, prints the current value, and adds one. When `count` becomes 4, the condition is false, so the loop ends. The update is not a decorative detail. It moves the program toward the stopping condition.

---

## Try it Yourself

Start at 5 and count down to 1. Then change the update and predict whether the loop still ends.

---

## More background

See [MDN: while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).

---
