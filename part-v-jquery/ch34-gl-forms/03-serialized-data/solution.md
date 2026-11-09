# Solution

```javascript
const rows = JSON.parse($("#stored").val());

$("#save").on("click", function () {
	$("#stored").val(JSON.stringify(rows));
	$("#output").text($("#stored").val());
});
```

The hidden field remains the stable retrieval point. The JSON string carries the variable-length distribution data.

---
