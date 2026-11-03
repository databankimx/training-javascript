# S07 · Internationalized formatting  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Use Intl.DateTimeFormat("en-US", {timeZone:"America/Chicago",dateStyle:"medium",timeStyle:"short"}).format(date). Time-zone offsets map one instant to different local wall-clock times and can cross midnight.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
