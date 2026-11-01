## Solution

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

document.querySelector("#message").textContent = message;
```

```text
The browser displays the angle brackets as text instead of creating a strong element.
```

The fix is to use `textContent` for a text-only destination. The input still contains the same characters, but the browser no longer treats them as instructions. This protects the page whether the value came from a form, a URL, storage, or a web service.

---
