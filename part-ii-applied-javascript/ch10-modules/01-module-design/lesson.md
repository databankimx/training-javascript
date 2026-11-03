# What modules are and why they help

A small script can keep everything in one file without much trouble. As the program grows, that file starts collecting calculations, formatting, data, and unrelated emergency fixes. We can still find the code, technically, in the same way we can technically find one missing sock in a laundry basket. That does not make the arrangement useful.

A **module** is a file that groups related code and controls what other files can use. Dividing a program into modules gives each file a clearer responsibility, smaller pieces to test, and fewer reasons for one change to disturb three unrelated features.

## Start with a responsibility

Suppose the application needs to turn a person’s task data into a short report. The application should own the data, but the formatting rule can live in a separate module:

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

> A module boundary is the deliberate list of values a file makes available to other files.
>
> A focused module does one related job and exposes only the functions other code needs.

```text
Ada: 3 tasks
```

`reports.js` formats a person, while `main.js` owns the application data and decides what to print. The boundary is useful because each file has one main reason to change. If a different screen later needs the same report, it can reuse the formatter rather than copy it.

The example also gives us an important distinction: not every name in a module must be shared. A helper can remain private to `reports.js`, while the one function other files need becomes the module’s public interface.

> A module is a file that groups related code behind an explicit boundary.
>
> The public interface is the set of values a module deliberately makes available to other files.
>
> A private helper stays inside its module and cannot be imported directly by another file.

Modules do not automatically make a program well designed. A module that contains validation, currency formatting, DOM manipulation, and network calls is still doing too many jobs. The point is to make responsibilities visible so we can decide where each piece belongs.

---

## Try it Yourself

Add a second report function for a completed-task count. Keep the formatting logic in `reports.js` and the data in `main.js`. Then add a small private helper in `reports.js` and explain why `main.js` cannot import it.

---

## More background

See [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

---
