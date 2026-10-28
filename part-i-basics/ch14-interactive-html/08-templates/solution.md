# 27 · Templates, cloning, and unique identifiers  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

Native cloneNode copies markup and attributes, not addEventListener registrations. jQuery .clone() has explicit options for copying handlers/data; that behavior is a separate library contract. Prefer delegation here, and always regenerate ids and label references.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
