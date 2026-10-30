# Complex conditions and evaluation order

Once a condition combines comparisons and logical operators, read it in small pieces. Parentheses establish the group to evaluate first. Then `!` reverses a value, `&&` requires both sides, and `||` accepts either side. JavaScript can also stop early when the final answer is already known.

```javascript
const signedIn = true;
const isAdmin = false;
const age = 21;

const canEnter = signedIn && (isAdmin || age >= 18);
const needsReview = !signedIn || (age < 18 && !isAdmin);
const status = signedIn && age >= 18 ? "approved" : "blocked";

console.log(canEnter);
console.log(needsReview);
console.log(status);
```

> Parentheses group part of an expression and make the intended order explicit.
>
> Logical precedence determines the order when parentheses are missing. JavaScript evaluates `!` first, then `&&`, and then `||`.
>
> Short-circuit evaluation means JavaScript stops evaluating a logical expression as soon as its result is known.
>
> The conditional operator, `condition ? whenTrue : whenFalse`, chooses one of two values. We will give it its own lesson shortly.

```text
true
false
approved
```

For `canEnter`, JavaScript first confirms that the user is signed in. Inside the parentheses, either administrator status or adulthood is enough. The parentheses matter because `&&` has higher precedence than `||`. Without them, JavaScript would read the expression as `(signedIn && isAdmin) || age >= 18`, allowing an adult to enter even when they are not signed in. With them, the expression means `signedIn && (isAdmin || age >= 18)`, which requires sign-in and then checks the two possible permissions. For `needsReview`, the first side is false, so JavaScript checks the grouped second condition. The status expression chooses a value rather than running a multi-step block.

---

## Try it Yourself

Change one input at a time and predict all three outputs before running the program. Add parentheses to a similar expression without them, then explain how the grouping changes the question being asked.

---

## More background

See [MDN: Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) and [MDN: Short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Short-circuit_evaluation).

---
