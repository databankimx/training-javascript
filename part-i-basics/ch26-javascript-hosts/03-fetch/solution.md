# 16 · HTTP, fetch, and response validation  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Set res.statusCode = 404 before res.end to exercise response.ok. Restore 200 and return {lessons:"16"} to exercise the schema guard. finally must still close the server in both cases.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
