# Solution

```javascript
$("#date").datepicker({
  dateFormat: "yy-mm-dd",
  onSelect: function (dateText) {
    $("#output").text(`Selected: ${dateText}`);
  }
});
```

The widget is configured with an explicit date format and a callback that reports the selected value.

---
