# Solution

```javascript
$("#enable").on("click", function () {
  $("#action").prop("disabled", false);
  $("#output").text(`Attribute: ${$("#action").attr("disabled")}; Property: ${$("#action").prop("disabled")}`);
});
```

The setter changes the live property. The original attribute remains a description of the HTML source, so it can still be present after the button becomes usable.

---
