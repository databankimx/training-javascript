# Homework: build a math module

Create a `math.js` module that exports `add`, `multiply`, and a new `subtract` function. Import all three from `main.js` and print their results.

```javascript
// math.js
export function add(left, right) {
  return /* sum */;
}

export function multiply(left, right) {
  return /* product */;
}

export function subtract(left, right) {
  return /* difference */;
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

---

## Try it Yourself

Add the `subtract` function and import it alongside the existing named exports.

Use **Show example (spoiler)** after you have tested your module.

---

## More background

See [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).

---
