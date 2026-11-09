# Migrating older jQuery code

Migration is not a search-and-replace exercise. Older jQuery code may use shorthand event methods, deprecated APIs, implicit globals, or plugins that assume a much older browser. Update one behavior at a time and test the form after each change.

```javascript
$("#run").on("click", function () {
	$("#output").text("Migrated from shorthand click binding to .on().");
});
```

`.on(...)` is the modern jQuery event-binding pattern. The larger lesson is to understand the behavior first, then choose a replacement that remains readable in the application's target environment.

```text
Migrated from shorthand click binding to .on().
```

> **Compatibility note:** Verify the actual browser or OnBase emulation mode before replacing syntax. Modern code is not automatically compatible with every historical form host.

---

## Try it Yourself

Find an older shorthand event binding and convert it to `.on(...)`. Record what changed, what did not, and how you tested the behavior.

---
