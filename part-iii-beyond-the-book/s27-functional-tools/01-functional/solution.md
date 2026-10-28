# S27 · Function composition and memoization  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

For add(a,b), caching only a makes add(1,2) collide with add(1,9). Use a nested Map keyed by each argument for primitive keys, or a documented serialization for a restricted input domain. Generic JSON keys can also lose type and identity information.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
