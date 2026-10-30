# 08 · Interactive input and validation  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Change the condition to !raw.trim() || !Number.isInteger(count) || count < 1 || count > 10 and update the message. Inputs 0, 11, and blank must fail; 5 must succeed. Keep finally so every branch closes readline.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
