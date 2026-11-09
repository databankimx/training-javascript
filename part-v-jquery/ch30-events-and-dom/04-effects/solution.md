# Solution

```javascript
$("#toggle").on("click", function () {
  $("#details").stop(true, true).slideToggle(200);
  const visible = $("#details").is(":visible");
  $(this).text(visible ? "Hide details" : "Show details").attr("aria-expanded", visible);
});
```

The effect changes visibility, while the text and ARIA attribute keep the control's state understandable. Stopping queued animations keeps rapid clicks from causing the page to lag behind the user's intent.

---
