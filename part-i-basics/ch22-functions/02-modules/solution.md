# 10 · ES modules and reusable code  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

export const fahrenheitToCelsius = f => (f - 32) * 5 / 9; is the inverse. Import it with the existing export. Test using a tolerance for non-integer floating-point results. The runner also accepts edits to support JavaScript modules; choose temperature.js in Source.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
