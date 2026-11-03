# Named and default exports

A module can provide several named exports and one default export. The import syntax tells the reader which kind is being used. This is a small amount of punctuation with a surprisingly large effect on how quickly a reader can understand a file's dependencies.

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

`add` is named, while `multiply` is the module's default. Naming imports consistently makes a multi-file program easier to navigate.

> A named export keeps its declared name, so it is imported inside braces.
>
> A default export is imported without braces. A module can have only one default export.
>
> A named import can be given a local alias with `as`. The alias changes the name in this file, not the name exported by the module.

---

## Aliasing a named import

An alias is useful when the exported name conflicts with a local name or when a longer name needs a clearer local form:

```javascript
import { add as sum } from "./math.js";

console.log(sum(5, 7));
```

```text
12
```

The module still exports `add`. Only this file calls it `sum`. Use aliases to clarify a real conflict or improve a confusing name, not merely to demonstrate that the language has another punctuation mark.

A default import may also be given any local name:

```javascript
import multiplyNumbers from "./math.js";

console.log(multiplyNumbers(3, 4));
```

The imported function is still the module's default export. The local name is our choice.

---

## Importing a module namespace

When a module has several related exports, we can import them as one namespace object:

```javascript
import * as math from "./math.js";

console.log(math.add(5, 7));
console.log(math.default(3, 4));
```

```text
12
12
```

The namespace object exposes the named exports as properties. A default export appears as `default`. This form makes the module relationship obvious, but it also adds `math.` to every use.

> `import * as math` gathers the module's exports into one namespace object.
>
> Avoid importing everything when a short named import makes the dependency clearer. Explicit imports show exactly which values the file needs, while a namespace can hide that list inside a later property access.

---

## What older code may look like

You may encounter CommonJS code using `require()` and `module.exports`, especially in older server-side JavaScript:

```javascript
const math = require("./math");
const total = math.add(5, 7);
```

ES modules use `export` and `import`, work naturally in browser module scripts, and make the dependency syntax part of the language. Learn to recognize both forms, but do not mix them casually in the same file. The project setup determines which module system is available.

---

## Try it Yourself

Export a second named function from `math.js`. Import it normally, import it again with an alias, and use a namespace import in a separate example. Predict which names exist locally before you run the program.

---

## More background

See [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), and [MDN: import * as](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

---

