## Solution

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

```text
Ada: 3 tasks
```

The report module owns formatting, while the main module owns the data and application flow.

---
