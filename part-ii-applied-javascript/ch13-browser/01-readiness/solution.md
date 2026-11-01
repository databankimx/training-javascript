## Solution

```javascript
const status = document.querySelector("#status");
status.textContent = "The page is ready";
```

```text
The page is ready
```

The script is deferred until the HTML has been parsed, so the target element exists.

---
