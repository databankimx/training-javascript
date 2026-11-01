# Project 1.2 · Bullets and collisions  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

The !alien.dead condition prevents a second bullet claiming the same alien after it is marked dead. For touching edges, a.x+a.width === b.x makes the strict overlap test false. Decide whether your game should keep or change that convention.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
