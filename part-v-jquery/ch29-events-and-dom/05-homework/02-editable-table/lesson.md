# Homework: delegated editable table

Create a small table whose rows can be added, renamed, and removed. The important part is the event design: bind the row actions once to `#people`, then use a descendant selector so rows added later work automatically.

```javascript
$("#people").on("click", ".remove", function () {
  // Find this row and remove it.
});
```

```text
Added row
Removed row
```

## Try it Yourself

Add a “duplicate” action that copies the current row. Give every generated input an accessible label. Keep the event handlers delegated, and explain why binding directly to the original row would not cover new rows.

The spoiler contains a complete solution.

---
