# S18 · Tries and prefix lookup  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Follow the same traversal as has, but return true after consuming the prefix without checking end. The empty prefix exists even in an empty trie. The empty word is stored only if insert("") sets root.end.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
