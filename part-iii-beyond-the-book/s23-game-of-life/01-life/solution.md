# S23 · Game of Life and simultaneous updates  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

step(step(grid)) equals the original blinker. A centered 2×2 block stays unchanged because every live cell has three neighbors and surrounding dead cells have fewer than three. Test a larger grid to avoid boundary-policy ambiguity.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
