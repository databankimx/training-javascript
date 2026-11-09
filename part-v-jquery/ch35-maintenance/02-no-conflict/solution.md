# Solution

```javascript
const jq = $.noConflict(true);

jq("#run").on("click", function () {
	jq("#output").text("jQuery is using its private alias.");
});
```

The private alias remains available after jQuery releases the global `$` name.

---
