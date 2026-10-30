# Control flow with `switch`

When one value needs to be compared with several known alternatives, `switch` can make the choices easier to scan. Each `case` names one possible value. A `break` leaves the switch after a match; without it, execution falls through into the next case.

```javascript
const day = "Monday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  default:
    console.log("Unknown day");
}

const otherDay = "Holiday";
switch (otherDay) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}
```

> `switch` compares one expression with several `case` values.
>
> `break` stops the switch after the matching branch. Deliberately omitting it lets cases share a result or fall through.
>
> `default` runs when no case matches.

```text
Weekday
Unknown day
```

The first switch matches `Monday`, so it prints `Weekday` and stops at `break`. The second value matches no listed case, so its `default` branch runs.

---

## Try it Yourself

Add a case for a holiday. Remove one `break`, run the program, and observe the fall-through. Then decide whether that behavior is intentional or a bug.

---

## More background

See [MDN: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).

---
