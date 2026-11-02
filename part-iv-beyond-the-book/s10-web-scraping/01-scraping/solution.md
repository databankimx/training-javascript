# S10 · DOM extraction and scraping boundaries  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Inspect node.getAttribute("data-price") first and reject null or blank. Convert only after that, then require Number.isFinite(price). Number(null) and Number("") are both 0, so conversion alone loses the missing-value signal.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
