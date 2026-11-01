## Solution

```javascript
// reports.js
export function formatTaskReport(person) {
  return `${person.name}: ${person.tasks} tasks`;
}

export function formatCompletionReport(person) {
  return `${person.name} completed ${person.completed} of ${person.tasks} tasks`;
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

The homework adds a second named export and keeps both formatting responsibilities in `reports.js`. The data remains in the main module.

---
