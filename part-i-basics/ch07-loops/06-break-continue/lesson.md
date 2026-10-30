# `break` and `continue`

Sometimes a loop needs to change its normal path. `continue` skips the rest of the current pass. `break` ends the loop completely.

```javascript
for (let number = 1; number <= 10; number += 1) {
  if (number === 3) {
    continue;
  }
  console.log(number);
  if (number === 5) {
    console.log("Found 5");
    break;
  }
}
```

> `continue` moves to the next iteration.
>
> `break` leaves the loop immediately.

```text
1
2
4
5
Found 5
```

When the number is 3, `continue` skips its `console.log`. When the number reaches 5, the message prints and `break` prevents the loop from visiting 6 through 10.

---

## Try it Yourself

Skip even numbers and stop at the first number divisible by 7. Be precise about which statements run before each control statement.

---

## More background

See [MDN: break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [MDN: continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue).

---
