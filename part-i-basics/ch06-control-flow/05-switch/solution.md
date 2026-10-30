## Solution

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

```text
Weekday
Unknown day
```

The grouped weekend and weekday cases intentionally share output. Each group ends with `break`, while `default` handles an unrecognized value.

---
