# `break` and `continue`

Sometimes a loop needs to change its normal path. `continue` skips the rest of the current pass, which is useful when an item is not relevant. `break` ends the loop completely, which is useful when the answer has already been found. We will look at them separately, because “skip this item” and “stop everything” are not interchangeable requests.

```javascript
// continue: skip one iteration
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

When the number is 3, `continue` skips the rest of that pass. The loop still updates and goes on to 4 and 5.

Now compare that with `break`:

```javascript
// break: stop the loop completely
for (let number = 1; number <= 10; number += 1) {
  if (number === 5) {
    console.log("Found 5");
    break;
  }
  console.log(number);
}
```

> `continue` moves to the next iteration.
>
> `break` leaves the loop immediately.

```text
1
2
Found 5
```

When the number reaches 5, the message prints and `break` ends the loop. Numbers 6 through 10 are never visited. `continue` skips an item; `break` ends the search.

---

## Try it Yourself

Skip even numbers and stop at the first number divisible by 7. Be precise about which statements run before each control statement.

---

## More background

See [MDN: break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [MDN: continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue).

---
