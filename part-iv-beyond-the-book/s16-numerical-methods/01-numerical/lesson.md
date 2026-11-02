# S16 · Numerical methods (SciPy counterpart)

## Learning goal

S16 · Numerical methods (SciPy counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We can approximate a numerical answer by repeatedly narrowing the possibilities. I’m comfortable with approximation when we state the tolerance; “close enough, probably” needs a little more paperwork.

Numerical methods approximate results when symbolic solutions are inconvenient. Bisection repeatedly halves an interval whose endpoints bracket a root of a continuous function. A tolerance defines acceptable error; an iteration cap ensures termination. This lesson illustrates one algorithm, not a replacement for SciPy numerical libraries. Floating-point equality is rarely a useful stopping condition.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 1.414214, an approximation to the square root of 2.

## Example code

```javascript
function root(f, low, high, tolerance = 1e-8) {
  if (f(low) * f(high) > 0) throw new Error('Root must be bracketed');
  for (let i=0; i<100 && high-low>tolerance; i++) {
    const mid=(low+high)/2;
    if (f(low)*f(mid)<=0) high=mid;
    else low=mid;
  }
  return (low+high)/2;
}
console.log(root(x => x*x-2,0,2).toFixed(6));
```

## Expected output

```text
1.414214
```

## Walk through the example

root first checks that the endpoint signs permit a bracket. Each iteration calculates the midpoint and keeps the half that retains a sign change. The width test and iteration cap bound the work. toFixed formats the approximate answer; it does not make the underlying number exact.

## Try it yourself

Handle an endpoint that is already a root and reject invalid tolerances. Compare f(result) with zero using a tolerance.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
