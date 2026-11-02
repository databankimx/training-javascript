# Exporting and importing values

As programs grow, keeping every function in one file becomes awkward. A file that started as a tidy little script can become the place where calculations, formatting, data, and unrelated emergency fixes all live together. ES modules let us define reusable code in one file and import it where we need it.

```javascript
// greetings.js
export function greet(name) {
  return `Hello, ${name}`;
}

// main.js
import { greet } from "./greetings.js";

console.log(greet("Ada"));
```

> `export` makes a value available to other modules.
>
> `import { greet } from "./greetings.js"` brings the named export into this file.
>
> `./` means the imported file is next to the current file.

```text
Hello, Ada
```

The function lives in `greetings.js`, while `main.js` imports and calls it. The files are separate, but the exported function behaves like any other function. The module boundary tells us what `greetings.js` is willing to share instead of making every name in the file everyone's business.

---

## Try it Yourself

Export a second function from `greetings.js`. Import both functions in `main.js` and call them.

---

## More background

See [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

---
