# Project 1.1 · Canvas movement  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Add ArrowUp and ArrowDown to the input handling. Update ship.y by the vertical direction times speed times dt, then clamp to 0..canvas.height-ship.height. Without dt, higher frame rates produce faster movement.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
