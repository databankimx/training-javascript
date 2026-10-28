# S24 · Built-in objects and serialization limits  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

The Date becomes an ISO string and the Set becomes an empty plain object by default. structuredClone preserves both types. Custom JSON representations and revival rules can be written if those types must cross a JSON boundary.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
