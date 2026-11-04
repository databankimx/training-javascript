# `break` and `continue`

Sometimes a loop needs to change its normal path. `continue` skips the rest of the current pass, which is useful when an item is not relevant. `break` ends the loop completely, which is useful when the answer has already been found. We will look at them separately, because “skip this item” and “stop everything” are not interchangeable requests.

---

## `continue`: skip one iteration

```javascript
for (let number = 1; number <= 5; number += 1) {
  if (number === 3) {
    continue;
  }

  console.log(number);
}
```

```text
1
2
4
5
```

When the number is 3, `continue` skips the rest of that pass. In this `for` loop, the update expression still runs, so the loop moves on to 4 and 5.

---

## `break`: stop the loop

```javascript
for (let number = 1; number <= 10; number += 1) {
  if (number === 5) {
    console.log("Found 5");
    break;
  }

  console.log(number);
}
```

```text
1
2
3
4
Found 5
```

When the number reaches 5, the program prints the message and leaves the loop immediately. Numbers 6 through 10 never get a turn.

> `continue` ends the current iteration and starts the next one.
>
> `break` ends the loop entirely.
>
> In a `while` loop, put the update that moves toward the stopping condition before a possible `continue`, or make sure every path updates it. Otherwise, the loop may never reach its condition.

Here is the dangerous shape:

```javascript
let current = 0;

while (current < 3) {
  if (current === 1) {
    continue;
  }
  current++;
}
```

When `current` reaches 1, `continue` skips the increment forever. The runner would stay there until we stop it. The safe version updates before the test:

```javascript
let current = 0;

while (current < 3) {
  current++;

  if (current === 2) {
    continue;
  }

  console.log(current);
}
```

```text
1
3
```

The update runs before `continue`, so the loop still progresses.

---

## Try it Yourself

Write one loop that skips even numbers with `continue`, and a separate loop that stops when it finds a target value with `break`. Then write a `while` loop with a `continue` and prove that its counter still advances on every path.

---

## More background

See [MDN: break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [MDN: continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue).

---

