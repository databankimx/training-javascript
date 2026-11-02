# S06 · Records and validation (dataclasses counterpart)  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Accept email = undefined; if email !== undefined && typeof email !== "string", throw TypeError. Include email in the record. A production email policy is separate from a type check and requires its own requirements.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
