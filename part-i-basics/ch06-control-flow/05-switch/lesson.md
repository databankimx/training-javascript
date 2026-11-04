# Control flow with `switch`

When one value needs to be compared with several known alternatives, `switch` can make the choices easier to scan. A menu choice, status code, day name, or command often fits this pattern. Each `case` names one possible value. We will start with one case per action, then use stacked cases when several values should share the same action.

The slightly fussy part is `break`. A matching case does not automatically end the `switch`; `break` leaves it. Without `break`, execution falls through into the next case. That can be deliberate, as in the grouped weekend and weekday cases below, or it can be the sort of omission that turns a quiet afternoon into a loud debugging session.

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Weekday");
    break;
  case "Saturday":
    console.log("Weekend");
    break;
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}

const otherDay = "Sunday";
switch (otherDay) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}

const unrecognizedDay = "Holiday";
switch (unrecognizedDay) {
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
Weekend
Unknown day
```

The first switch matches `Monday`, so it prints `Weekday` and stops at `break`. Each case has its own action, which is the easiest shape to learn first. The second switch shows the useful shortcut: `Saturday` and `Sunday` fall through to the same body, so we do not repeat the output. The third switch matches no listed case, so its `default` branch runs.

The adjacent cases for Saturday and Sunday deliberately share one body. Monday through Friday do the same thing in the next group. This is often cleaner than repeating identical output five times. `default` is the safety net for a value the program did not recognize, so it is worth including when unexpected input is possible.

---

## Try it Yourself

Add a case for a holiday. Remove one `break`, run the program, and observe the fall-through. Then decide whether that behavior is intentional or a bug.

---

## More background

See [MDN: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).

---
