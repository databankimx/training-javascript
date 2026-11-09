# `$.noConflict()` and library coexistence

Older pages sometimes load more than one library. If each one wants `$`, the last library loaded can take over the alias. `$.noConflict(true)` gives jQuery back to its full name and lets us keep a private alias.

```javascript
const jq = $.noConflict(true);

jq("#run").on("click", function () {
	jq("#output").text("jQuery is using its private alias.");
});
```

The example is deliberately explicit. `jq` is not magic; it is simply the reference returned by jQuery after it releases `$`.

```text
jQuery is using its private alias.
```

> **Use `noConflict` when coexistence is required.** Do not rename every `$` in a codebase casually. Choose a boundary, document it, and keep the alias consistent.

---

## Try it Yourself

Wrap a plugin in an IIFE that receives `jq` as its parameter. Explain why that protects the plugin from whatever another library does with the global `$`.

---
