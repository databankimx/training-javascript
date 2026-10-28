# S11 · Arrow functions and higher-order behavior  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

items.map(n => { n * 2; }) returns an array of undefined values. Use items.map(n => { return n * 2; }). The braces change the grammar from an expression body to a statement block.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
