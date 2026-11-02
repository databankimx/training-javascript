# S26 · Iterators and generators (itertools counterpart)  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Validate n as a nonnegative integer. Return immediately when n === 0. Otherwise yield each value, increment a count, and return when count === n. An early guard avoids consuming a source value for a zero-item request.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
