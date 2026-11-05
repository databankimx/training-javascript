# Solution

```javascript
const userText = "<strong>Customer supplied text</strong>";
const safeHtml = "<strong>Trusted application markup</strong>";
$("#safe").text(userText);
$("#markup").html(safeHtml);
console.log("text() displays characters; html() interprets markup.");
```

The first value is treated as text, while the second is trusted markup intentionally created by the application. Keeping those paths separate makes the security decision visible.

---
