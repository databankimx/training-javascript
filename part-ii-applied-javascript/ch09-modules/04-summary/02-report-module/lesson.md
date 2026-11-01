# Homework: split a report module

Move the formatting function into `reports.js`. Keep the object in `main.js`, import the function, and print the returned report.

```javascript
// reports.js
export function formatTaskReport(person) {
  return /* formatted report */;
}

export function formatCompletionReport(person) {
  return /* completion report */;
}

// main.js
import { formatTaskReport, formatCompletionReport } from "./reports.js";

const person = { name: "Grace", tasks: 5, completed: 2 };
console.log(formatTaskReport(person));
console.log(formatCompletionReport(person));
```

```text
Grace: 5 tasks
Grace completed 2 of 5 tasks
```

---

## Try it Yourself

Add a third formatting function without moving the data into the report module.

Use **Show example (spoiler)** after you have tested your module boundary.

---

## More background

See [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

---
