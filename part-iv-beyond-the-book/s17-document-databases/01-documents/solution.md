# S17 · Document queries (MongoDB counterpart)  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

Check Array.isArray(user.tags) before includes and use user.profile?.active === true. A missing profile or tags should fail the selection. Decide separately whether malformed documents should be rejected at ingestion instead of silently skipped.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
