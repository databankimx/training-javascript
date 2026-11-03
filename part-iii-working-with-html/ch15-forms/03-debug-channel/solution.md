## Solution

```javascript
const debugOutput = document.querySelector("#debug");

function debug(message, error = false) {
  console[error ? "error" : "log"](message);
  debugOutput.textContent += `${error ? "ERROR: " : ""}${message}\n`;
}

debug("Form script ready");
debug("Example validation failure", true);
```

```text
Form script ready
ERROR: Example validation failure
```

The helper keeps console diagnostics and visible diagnostics synchronized.

---
