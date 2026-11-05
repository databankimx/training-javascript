# Solution

```javascript
function report(event) {
  $("#status").text(`Handled ${event.type} on ${event.currentTarget.id}.`);
  console.log(event.type, event.currentTarget.id);
}

$("#save").on("click", report);
$("#remove").on("click", function () {
  $("#save").off("click", report);
  $("#status").text("The save handler was removed.");
});
```

The named `report` function can be removed later because the same function reference is available. The remove button intentionally uses a traditional function expression, a common style in older jQuery code.

---
