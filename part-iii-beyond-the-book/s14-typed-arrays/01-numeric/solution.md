# S14 · Typed arrays (NumPy counterpart)  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

values.slice(0,2) copies the selected values. Return null for an empty buffer before dividing by length. A mean of no observations is undefined as an application result, not zero.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
