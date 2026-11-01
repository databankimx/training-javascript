## Solution

```javascript
// math.js
export function add(left, right) {
  return left + right;
}

export default function multiply(left, right) {
  return left * right;
}

// main.js
import multiply, { add } from "./math.js";

console.log(add(5, 7));
console.log(multiply(3, 4));
```

```text
12
12
```

The braces distinguish the named import from the default import.

---
