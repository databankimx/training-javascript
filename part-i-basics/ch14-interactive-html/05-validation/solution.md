# 24 · Form validation and computed values  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

The parser rejects blank, negatives, more than two decimals, and unsafe integer totals. A jQuery .val() getter still returns text for these inputs; it does not validate automatically. Validation plugins are separate dependencies with their own rule and error-display APIs.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
