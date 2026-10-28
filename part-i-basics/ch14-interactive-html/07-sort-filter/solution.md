# 26 · Sort and filter a dynamic table  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Multiply the comparator result by -1 for descending. For Reset order skip toSorted and use the filtered source order. Clear should reset the controls and invoke render. Avoid sorting the source array in place.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
