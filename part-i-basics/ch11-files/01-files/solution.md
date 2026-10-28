# 12 · Files, JSON, and error handling  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Use Array.isArray(progress.completed) && progress.completed.every(item => typeof item === "string"). JSON such as {"completed":42} parses successfully but does not satisfy the application schema. Throw a descriptive TypeError if validation fails.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
