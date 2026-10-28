# Project 3.1 · A Learning Log model and view  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Store createdAt as new Date().toISOString() at creation. At rendering, construct a Date and format it for the user. Storing the display string would make sorting and later locale changes harder.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
