# 22 · Accessible accordions  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Add another details containing summary and content; querySelectorAll includes it at initialization. A custom implementation needs heading buttons, aria-expanded, aria-controls, hidden-state synchronization, and keyboard/focus behavior. $(...).slideToggle() supplies animation but does not supply those semantics.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
