# S09 · Enumerations and explicit states  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

Add CANCELED:"canceled" and a cancel(status) function that accepts only DRAFT or REVIEW. Throw for DONE, CANCELED, and unknown input. Checking only status !== DONE would accidentally admit unknown values.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
