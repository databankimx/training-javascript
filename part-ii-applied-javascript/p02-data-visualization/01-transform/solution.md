# Project 2.1 · Validate and summarize data  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Guard rows.length === 0 before computing the mean or maximum, returning a no-data result. Reject a record whose hours is "12" until conversion has been explicitly performed at ingestion.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
