# S05 · Bitwise flags  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

Use permissions ^= EXECUTE twice. XOR flips exactly the selected bits, and flipping a bit twice restores it. Setting with OR twice does not toggle.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
