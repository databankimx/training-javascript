# Solution

```javascript
function report() {
  const updates = $("#updates");
  const heading = $("#heading");
  $("#output").text(`attr checked: ${updates.attr("checked")}; prop checked: ${updates.prop("checked")}; id: ${heading.prop("id")}; title: ${heading.prop("title")}`);
}

report();
$("#flip").on("click", function () {
  $("#updates").prop("checked", !$("#updates").prop("checked"));
  report();
});
```

The example deliberately reads both values. The attribute describes the source markup, while the property describes the current checkbox state.

---
