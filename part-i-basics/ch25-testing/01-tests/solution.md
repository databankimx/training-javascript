# 13 · Testing behavior with node:test  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Assert discount(50,0) === 50 and discount(50,100) === 0. Add !Number.isFinite(price) || !Number.isFinite(percent) to the guard. Comparisons with NaN are false, so range checks alone do not validate it.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
