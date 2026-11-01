# Named and default exports

A module can provide several named exports and one default export. The import syntax tells the reader which kind is being used.

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

> A named export keeps its declared name, so it is imported inside braces.
>
> A default export is imported without braces. A module can have only one default export.

```text
12
12
```

`add` is named, while `multiply` is the module's default. Naming imports consistently makes a multi-file program easier to navigate.

---

## Try it Yourself

Add a named `subtract` export. Import it alongside `add`, then call it from `main.js`.

---

## More background

See [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) and [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

---
