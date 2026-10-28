# S08 · Closures and captured state  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Inside makeCounter return {increment: () => ++value, reset: () => {value = start;}}. Both functions close over the same binding for that factory call. A different factory call still has independent state.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
