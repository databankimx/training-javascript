# Solution

```javascript
const message = document.querySelector("#message");
message.textContent = "This sentence was changed with vanilla JavaScript.";

$("#comparison").text("This sentence was changed with jQuery.");
console.log("Vanilla JavaScript and jQuery can update the same page.");
```

The first update uses the browser's native selector and `textContent` property. The second uses jQuery's `$` function and `.text(...)` method. Both approaches change the rendered page, which is exactly why it is useful to recognize both in a codebase.

```text
Vanilla JavaScript and jQuery can update the same page.
```

The HTML loads jQuery before `main.js`, so `$` exists when our code runs.

---
