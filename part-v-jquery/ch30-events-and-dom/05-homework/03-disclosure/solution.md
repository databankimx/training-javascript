# Solution

```javascript
$("#toggle").on("click", function () {
  const help = $("#help");
  const open = help.prop("hidden");
  help.prop("hidden", !open);
  $(this).attr("aria-expanded", open).text(open ? "Hide details" : "Show details");
});
```

The DOM's `hidden` property is the source of truth. The button label and `aria-expanded` attribute are updated from that state instead of being toggled independently and hoping they stay in step.

---
