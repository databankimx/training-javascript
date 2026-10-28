# Project 3.2 · Export and import persistence  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

The supplied schema checks types and uniqueness before assignment to entries. Test [{"id":"x","text":5}] and duplicate IDs; both must fail. Assign only after all validation succeeds. The runner permits preview downloads while preserving the opaque-origin isolation.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
