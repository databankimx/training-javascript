# Solution

```javascript
$("#rows tr").each(function () {
	const populated = $(this).find("input").val().trim() !== "";
	$(this).toggle(populated);
});
```

The rows are all present before JavaScript runs. The script only changes visibility, so retrieval can still find the original fields.

---
