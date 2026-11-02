## Solution

```javascript
const status = document.querySelector("#status");
status.textContent = "The deferred script can see the page elements.";

window.addEventListener("load", () => {
  status.textContent += " The window is fully loaded.";
});
```

```text
The deferred script can see the page elements. The window is fully loaded.
```

The important choices are `defer` for the external script and `addEventListener` for lifecycle events. The older `window.onload = ...` form is worth recognizing, but it is easier for separate scripts to overwrite one another.

---
