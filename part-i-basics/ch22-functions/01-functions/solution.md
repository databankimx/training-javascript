# 09 · Functions, scope, and pure logic  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Validate prices.every(price => Number.isFinite(price) && price >= 0) and Number.isFinite(taxRate) && taxRate >= 0, throwing RangeError otherwise. The empty list returns 0. For real money, choose an integer minor-unit or decimal strategy rather than assuming binary floating point is exact.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
