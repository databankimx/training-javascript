# S20 · Cards and unbiased shuffling  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Default random to Math.random and call random() for each j. In tests, inject () => 0 to get repeatable swaps. Assert length is unchanged and sorted input equals sorted output. This checks permutation preservation, not statistical uniformity.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
