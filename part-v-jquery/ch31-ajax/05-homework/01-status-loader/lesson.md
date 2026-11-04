# Homework: status loader

Build a status button that displays `Loading...` immediately, then reports the simulated response. Handle both `.done(...)` and `.fail(...)`, even if the starter request currently succeeds.

```javascript
$("#output").text("Loading...");
loadStatus().done(/* success */).fail(/* failure */);
```

```text
Loading...
Status: ready
```

## Try it Yourself

Add a second button that makes the simulated request reject. Add `.always(...)` to restore the button text after either result. The spoiler contains a complete solution.

---
