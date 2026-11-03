# Modules and purpose-based libraries

Our last lesson separated report formatting from application data. That is a useful start, but real applications usually have several kinds of reusable work: validation, formatting, DOM helpers, API calls, and so on. Putting every helper into one enormous `utils.js` file is how a small project acquires a junk drawer with a type system.

## A library is an idea; a module is a mechanism

A **library** is reusable functionality organized around a purpose. A validation library might check names, dates, and email addresses. A formatting library might produce dates, currency, or display names. The word describes the role of the code, not the syntax used to load it.

An **ES module** is a JavaScript file with an explicit dependency boundary. `export` and `import` are the language features that define what crosses that boundary. A library can be implemented as one or more ES modules, but a library can also use an older loading pattern.

```javascript
// validation.js
export function isCompletePerson(person) {
  return Boolean(person.name?.trim() && person.email?.includes("@"));
}

// formatting.js
export function displayName(person) {
  return `${person.firstName} ${person.lastName}`;
}

// main.js
import { isCompletePerson } from "./validation.js";
import { displayName } from "./formatting.js";
```

The files are modules. Together, the validation and formatting modules form two small purpose-based libraries. `main.js` owns the application data and imports only the functions it needs.

> A library groups reusable code by purpose.
>
> A module is a file with an explicit import/export boundary.
>
> A library may contain several modules, and a module may be useful without being a full library.

## The older browser pattern

Before browser module scripts were widely available, pages commonly loaded libraries as ordinary scripts:

```html
<script src="validation-library.js"></script>
<script src="main.js"></script>
```

The first file might place a namespace on `window`:

```javascript
// validation-library.js
window.App = window.App || {};
App.Validation = {
  isCompletePerson(person) {
    return Boolean(person.name && person.email);
  }
};

// main.js
console.log(App.Validation.isCompletePerson(person));
```

That pattern is still common in older forms and vendor libraries. It works, but the shared global namespace means names can collide, load order matters, and the dependency is less obvious from the file itself. An ES module keeps the dependency visible in the `import` line and avoids adding the library to `window`.

## Keep responsibilities narrow

The example uses separate validation and formatting files because the two jobs change for different reasons. If the rules for a valid email change, we should not need to edit the display-name formatter. The split is not a commandment carved into a very small stone tablet, though. A module with one tiny function can be needless ceremony. Group code when the functions belong together and keep the boundary clear.

```text
Valid
Ada Lovelace
```

## Try it Yourself

Add a `currency.js` module with a `formatCurrency(amount)` function. Import it in `main.js`, print a formatted amount, and explain why currency formatting belongs with formatting rather than validation.

Then look at the older `window.App` example. Identify the global name, the load-order dependency, and the line that makes the module relationship explicit in the ES-module version.

## More background

See [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [MDN: JavaScript libraries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Modules).

---
