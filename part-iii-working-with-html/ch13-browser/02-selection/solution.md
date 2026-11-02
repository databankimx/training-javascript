## Solution

```javascript
const message = document.querySelector("#message");
message.textContent = "Text inserted safely";
```

```text
Text inserted safely
```

`textContent` inserts text without interpreting it as markup. That is the safe default when the value came from a user, a URL, or any other source we do not completely control.

---
