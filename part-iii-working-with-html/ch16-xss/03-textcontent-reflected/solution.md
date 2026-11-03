## Solution

```javascript
const message = params.get("message") || "<strong>Safe-looking markup</strong>";
document.querySelector("#message").textContent = message;
```

```text
Markup-shaped input appears as ordinary text.
```

The newer pattern removes the HTML sink entirely. Because this output is text, `textContent` is both simpler and harder to misuse than a hand-written sanitizer followed by `innerHTML`.

---
