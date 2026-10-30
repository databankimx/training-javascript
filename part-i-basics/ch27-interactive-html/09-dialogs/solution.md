# 28 · Dialogs, focus, and note entry  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Handle form submit before the method=dialog default: if event.submitter?.value === "save" and trimmed note is empty, preventDefault, show a message, and focus the textarea. Cancel should bypass required validation with formnovalidate. Do not replace showModal with a display toggle and assume equivalent behavior.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
