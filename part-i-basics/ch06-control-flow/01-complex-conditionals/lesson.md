# Complex conditions and evaluation order

Real applications rarely ask one simple yes-or-no question. A page might need to decide whether a signed-in user may open a record, whether an order qualifies for a discount, or whether a form needs review. Those decisions combine smaller questions.

The trick is to read a complex condition in pieces instead of treating it as an inexplicably fuzzy wall of punctuation. Parentheses establish the group to evaluate first. Then `!` reverses a value, `&&` requires both sides, and `||` accepts either side.

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

Here is the example. It asks three related questions about the same user:

```text
true
false
approved
```

`canEnter` is true because the user is signed in and is an adult, even though they are not an administrator. The parentheses matter because `&&` has higher precedence than `||`. Without them, JavaScript would read the expression as `(signedIn && isAdmin) || age >= 18`, allowing an adult to enter without signing in. With them, the expression means `signedIn && (isAdmin || age >= 18)`, which requires sign-in first.

`needsReview` is false. The user is signed in, so the first part of the `||` expression is false. The grouped second part is false as well because the user is neither under 18 nor an administrator. The `status` expression makes a small two-way choice and gives us a label instead of a boolean.

One practical rule is worth keeping: if a condition takes effort to explain, use parentheses even when JavaScript's precedence rules would produce the same result. The next developer should not have to reconstruct your reasoning from memory, and that next developer may be you after lunch.

---

## Try it Yourself

Change one input at a time and predict all three outputs before running the program. Add parentheses to a similar expression without them, then explain how the grouping changes the question being asked.

---

## More background

See [MDN: Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) and [MDN: Short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Short-circuit_evaluation).

---
