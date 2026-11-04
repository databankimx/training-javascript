# Solution

```javascript
const items = $("#items li");

$("#run").on("click", function () {
	items.addClass("updated");
	$("#output").text(`Updated ${items.length} items with one cached selection.`);
});
```

The selection is cached once, so repeated clicks do not repeat the same DOM query. In a larger page, scope the selector to the relevant container and use delegated events when rows are created later.

```text
Updated 3 items with one cached selection.
```

---
