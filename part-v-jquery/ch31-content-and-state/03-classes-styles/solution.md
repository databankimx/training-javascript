# Solution

```javascript
$("#toggle").on("click", function () {
  $("#status").toggleClass("highlighted plain");
  const highlighted = $("#status").hasClass("highlighted");
  $("#status").text(highlighted ? "Highlighted" : "Plain");
});
```

The script changes semantic state classes and reports the current state. CSS owns the colors and spacing.

---
