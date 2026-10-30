# 14 · Promises, async/await, and the event loop  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Wrap await Promise.all([Promise.resolve("ok"), Promise.reject(new Error("failed"))]) in try/catch. allSettled instead returns records with status and value or reason. Pick allSettled when a partial result is meaningful.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
