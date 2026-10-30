# 21 · Hide and show a section  -  exercise solution

Here’s one reasonable way through this. Compare the behavior with your version; the variable names do not have to agree.

Attach a listener to the new Close button that calls toggle.focus(); setOpen(false);. The jQuery reading comparison is $("#details").hide()/show(), but those calls alone do not update aria-expanded or repair focus.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
