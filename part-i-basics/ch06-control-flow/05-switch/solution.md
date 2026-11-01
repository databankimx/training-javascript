## Solution

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

```text
Weekday
Weekend
Unknown day
```

The first switch keeps each case separate, which makes the basic structure obvious. The second switch then groups the weekend cases because they intentionally share output. Each group ends with `break`, so a match does not wander into the next group. The final switch demonstrates `default` handling an unrecognized value, which is a useful courtesy whenever the input comes from outside the program.

---
