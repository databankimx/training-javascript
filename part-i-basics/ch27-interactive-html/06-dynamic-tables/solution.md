# 25 · Dynamic tables with delegated events  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Use an updateControls function after both add and remove that sets addButton.disabled = body.rows.length >= 10. Keep nextId increasing rather than deriving IDs from row count, which could create duplicates after middle-row deletion. jQuery delegation would use $("#rows").on("input", "input[data-amount]", sum).

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
