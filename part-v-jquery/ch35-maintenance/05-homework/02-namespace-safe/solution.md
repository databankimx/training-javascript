# Solution

```javascript
const jq = $.noConflict();

jq("#run").on("click", function () {
	jq("#output").text("The jQuery alias is working without occupying $.");
});
```

The alias keeps the jQuery API available while leaving `$` for another library or for existing application code.

```text
The jQuery alias is working without occupying $.
```

---
