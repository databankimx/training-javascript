# Solution

```javascript
$("#date").datepicker({
	dateFormat: "yy-mm-dd",
	minDate: 0,
	onSelect: function (value) {
		$("#output").text(`Selected: ${value}`);
	}
});

console.log("Date format: yy-mm-dd");
```

The widget constrains the selectable dates and writes a predictable value. The service still needs to validate that value independently.

---
