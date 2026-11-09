# Solution

```javascript
$("#run").on("click", function () {
	const items = $("#items li");
	items.addClass("updated");
	$("#output").text(`Updated ${items.length} items.`);
});
```

The selector runs once per click and the cached collection is updated as a group. The point is not that three list items need heroic optimization. The point is to avoid repeating work when the same pattern appears inside a larger form or table.

```text
Updated 3 items.
```

---
