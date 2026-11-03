## Solution

```javascript
const status = document.querySelector("#status");
status.textContent = "The page is ready";
```

```text
The page is ready
```

The script is deferred until the HTML has been parsed, so the target element exists. The code can begin with the DOM lookup instead of adding a timing race to the first example.

---
