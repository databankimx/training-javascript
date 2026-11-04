# Solution

```javascript
const panel = $("#orders").closest(".orders");
const active = panel.find("#orders").children("li").not(".cancelled");

active.addClass("active");
$("#output").text(`Active orders: ${active.length}`);
console.log(`Active orders: ${active.length}`);
```

The code walks upward with `closest`, back down with `find`, limits the result to direct children, and removes cancelled rows with `not`.

```text
Active orders: 2
```

---
