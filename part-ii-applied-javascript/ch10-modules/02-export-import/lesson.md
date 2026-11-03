# Exporting and importing values

Now that we have the idea of a module boundary, let’s look at the syntax that makes one file’s public values available to another. ES modules use `export` to publish a value and `import` to bring that value into a different file.

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
