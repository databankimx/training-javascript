# Project 1.3 · Scoring and restart  -  exercise solution

A working solution should handle the ordinary input and the awkward one. Here’s how we can do that.

Track level separately. When the row is cleared, increment it and create a new row once; avoid creating a row on every frame before state changes. The reset handler must restore level = 1 along with score, bullets, aliens, ship, and cooldown.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
