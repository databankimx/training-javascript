# `try`, `catch`, and `finally`

When an operation can throw an error, put the risky call in `try`. A matching `catch` handles the failure, and `finally` runs whether the operation succeeded or failed. This is useful around parsing, file access, network requests, and other work where failure is possible even when the code is perfectly reasonable.

```javascript
function readSettings(text) {
  return JSON.parse(text);
}

for (const text of ['{"theme":"dark"}', '{"theme":']) {
  try {
    const settings = readSettings(text);
    console.log(`Theme: ${settings.theme}`);
  } catch (error) {
    console.log(`Could not read settings: ${error.name}`);
  } finally {
    console.log("Attempt complete");
  }
}
```

```text
Theme: dark
Attempt complete
Could not read settings: SyntaxError
Attempt complete
```

> `try` contains code that may fail.
>
> `catch` receives the thrown error and decides how to respond.
>
> `finally` runs after either success or failure, so it is useful for cleanup that must happen in both cases.
>
> `throw` signals that an operation cannot continue normally.

The first input parses successfully, so the `try` block prints the theme and `finally` runs. The second input throws, so JavaScript skips the rest of `try`, enters `catch`, and then still runs `finally`.

Unlike Python, JavaScript does not have a separate `else` block attached to `try`. If success-only work needs its own section, put it after the risky operation inside `try`, or return from a helper after the successful work. Keep the `try` block small so that you do not accidentally catch errors from unrelated lines.

---

## Continue after a failure

Catching an error does not require stopping the whole program. A loop can report one bad item and continue with the next:

```javascript
const inputs = ['{"id":1}', '{"id":', '{"id":3}'];

for (const input of inputs) {
  try {
    const record = JSON.parse(input);
    console.log(`Accepted: ${record.id}`);
  } catch (error) {
    console.log("Rejected malformed record");
  }
}
```

```text
Accepted: 1
Rejected malformed record
Accepted: 3
```

That is the JavaScript equivalent of handling a file or conversion error and allowing the surrounding operation to continue. Whether continuing is safe depends on the application. A missing security configuration should probably stop startup, while one malformed optional record may be worth reporting and skipping.

---

## Try it Yourself

Add a cleanup message to a `finally` block. Make a list with two valid JSON values and one invalid value, then continue after the invalid item. Decide which errors should be handled locally and which should be allowed to reach a higher-level caller.

---

## More background

See [MDN: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) and [MDN: finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#finally).

---

