# S22 · Rock, paper, scissors and rule tables  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Nest loops over Object.keys(beats). For equal moves assert draw; otherwise assert one direction is win and the other lose. This finite domain is small enough to cover completely.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
