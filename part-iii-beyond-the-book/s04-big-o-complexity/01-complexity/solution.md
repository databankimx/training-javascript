# S04 · Complexity and data structures  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

One linear search costs O(n) without extra storage. Building a Set costs O(n) expected work and O(n) space, followed by typically sublinear lookups. Repeated searches amortize setup. Do not claim the single five-element sample proves a timing advantage.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
