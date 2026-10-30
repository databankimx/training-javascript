# 11 · Classes, prototypes, and private state  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

Inside the class use decrement() { this.#value = Math.max(0, this.#value - 1); }. A fresh counter stays 0; after two increments and one decrement its value is 1. Do not expose the private field for callers to change.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
