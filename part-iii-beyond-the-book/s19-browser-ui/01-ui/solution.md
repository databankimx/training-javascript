# S19 · Browser forms (Tkinter counterpart)  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Trim the name inside the listener. If it is empty, set a descriptive textContent message and call form.elements.name.focus(); return. The static markup is trusted; the user-provided name is inserted with textContent.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
