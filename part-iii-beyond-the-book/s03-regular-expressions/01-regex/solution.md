# S03 · Regular expressions  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Use /^INV-\d{4,6}$/ and no g flag for whole-value validation. Test INV-1234, INV-123456, INV-123, and xINV-1234. Anchors are what reject surrounding text.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
