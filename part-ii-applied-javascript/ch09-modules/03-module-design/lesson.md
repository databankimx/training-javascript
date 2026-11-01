# Designing a small module boundary

Modules are most useful when each file has a clear responsibility. A report module can format data without knowing where the data came from or how the application will display it.

```javascript
// reports.js
export function formatTaskReport(person) {
  return `${person.name}: ${person.tasks} tasks`;
}

// main.js
import { formatTaskReport } from "./reports.js";

const person = { name: "Ada", tasks: 3 };
console.log(formatTaskReport(person));
```

> A module boundary is the deliberate list of values a file makes available to other files.
>
> A focused module does one related job and exposes only the functions other code needs.

```text
Ada: 3 tasks
```

`reports.js` formats a person, while `main.js` owns the application data and decides what to print. Separating those responsibilities makes each file easier to test and replace.

---

## Try it Yourself

Add a second report function for a completed-task count. Keep the formatting logic in `reports.js` and the data in `main.js`.

---

## More background

See [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

---
