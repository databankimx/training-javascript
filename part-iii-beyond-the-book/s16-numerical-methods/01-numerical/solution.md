# S16 · Numerical methods (SciPy counterpart)  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Return low or high when its function value is zero. Require Number.isFinite(tolerance) && tolerance > 0, finite ordered endpoints, and finite function values. For x²−2 verify Math.abs(f(result)) < 1e-6 for the sample interval.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
