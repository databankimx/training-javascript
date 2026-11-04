# Solution

```javascript
document.querySelector("#vanilla").addEventListener("click", () => {
  status.textContent = "The native event listener ran.";
});

$("#jquery").on("click", () => {
  $("#status").text("The jQuery event handler ran.");
});
```

The first handler uses `addEventListener` and a native element. The second uses jQuery's `.on(...)` and `.text(...)` methods. Both are event bindings, and both update the same status paragraph.

---
