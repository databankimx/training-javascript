## Solution

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

document.querySelector("#message").innerHTML = message;
```

```text
The browser interprets the angle-bracketed value as markup.
```

There is no safer version in this lesson because the point is to identify the vulnerable pattern. The important detail is not the URL parser. It is the destination: `innerHTML` interprets the value as page markup.

---
