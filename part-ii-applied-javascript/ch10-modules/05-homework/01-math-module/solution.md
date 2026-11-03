## Solution

```javascript
// math.js
export function add(left, right) {
  return left + right;
}

export function multiply(left, right) {
  return left * right;
}

export function subtract(left, right) {
  return left - right;
}

// main.js
import { add, multiply, subtract } from "./math.js";

console.log(add(3, 4));
console.log(multiply(3, 4));
console.log(subtract(3, 4));
```

```text
7
12
-1
```

The homework extends the lesson's module with a third named export. All three names appear inside the import braces, so the dependency list is visible at the top of `main.js` instead of being discovered by archaeology later.

---
