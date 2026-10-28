# 06 · Conditions, equality, and missing values  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Use const label = product.price == null ? "Unknown" : String(product.price); or const label = String(product.price ?? "Unknown");. Here == null intentionally matches only null and undefined. Price 0 must remain 0.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
