## Solution

```javascript
// greetings.js
export function greet(name) {
  return `Hello, ${name}`;
}

// main.js
import { greet } from "./greetings.js";

console.log(greet("Ada"));
```

```text
Hello, Ada
```

The export creates the module boundary, and the import gives `main.js` access to the named function. `main.js` can use the function without knowing how the greeting is assembled, which is the beginning of useful separation.

---
