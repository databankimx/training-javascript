# A visible debug channel

The browser console is useful, but it may not be convenient when troubleshooting a deployed form, especially in systems such as OnBase. A small debug helper can send the same message to the console and to an on-page diagnostic area.

```javascript
const debugOutput = document.querySelector("#debug");
const debugEnabled = true;

function debug(message, error = false) {
  console[error ? "error" : "log"](message);
  if (!debugEnabled) return;
  debugOutput.hidden = false;
  debugOutput.textContent += `${error ? "ERROR: " : ""}${message}\n`;
}

debug("Form script ready");
debug("Example validation failure", true);
```

```text
Form script ready
ERROR: Example validation failure
```

> A debug channel is a controlled place for diagnostic messages that can be enabled, inspected, or hidden without changing the form's ordinary output.
>
> `console.error` marks an error in developer tools, while the page output keeps the same information visible to a tester.

Keep `debugEnabled` false in production unless troubleshooting. The console still receives the message in this example, while the optional visible panel stays hidden when the flag is false. A production form can replace the panel with an alert during a short troubleshooting session, but a visible debug area is usually less disruptive.

This pattern is intentionally small. A production form could add timestamps, a clear button, or a configuration flag that turns visible diagnostics off for ordinary users.

---

## Try it Yourself

Add a clear button and a `debugEnabled` flag. Make ordinary messages disappear when debugging is disabled, but keep errors visible during testing.

---

## More background

See [MDN: console](https://developer.mozilla.org/en-US/docs/Web/API/console).

---
