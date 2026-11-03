## Solution

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

function sanitize(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

document.querySelector("#message").innerHTML = sanitize(message);
```

```text
The browser displays the angle brackets as text instead of creating a strong element.
```

The older fix escapes the characters that have meaning in HTML before using `innerHTML`. It works for this narrow example, but the next lesson shows why `textContent` is now the preferred approach for plain text.

---
