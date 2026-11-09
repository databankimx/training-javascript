# Keep a namespace safe

Another library may already use `$`. Use `jQuery.noConflict()` to release that shorthand, store the returned jQuery function in `jq`, and update the click handler to use the alias.

```javascript
const jq = $.noConflict();

// Use jq(...) here.
```

```text
The jQuery alias is working without occupying $.
```

## Try it Yourself

Finish the handler and explain why this is safer on a page with multiple libraries.

---
