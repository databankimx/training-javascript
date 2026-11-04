# Logical operators and short-circuiting

Comparison operators answer one question. Logical operators combine questions or choose between values. They also short-circuit: JavaScript stops evaluating as soon as the final result is already known.

```javascript
const signedIn = true;
const isAdmin = false;
const displayName = "";

console.log(signedIn && isAdmin);
console.log(signedIn || isAdmin);
console.log(!isAdmin);
console.log(displayName || "Guest");
```

> `&&` means “and.” The result needs both sides to be truthy.
>
> `||` means “or.” The result uses the first truthy side, or the final side if neither is truthy.
>
> `!` means “not.” It reverses the truthiness of its operand.

```text
false
true
true
Guest
```

The two-input operators are easier to predict when we lay out every combination. Read the result in the middle column.

`&&` is true only when both inputs are true. The capitalization in the middle column is deliberate: the runner highlights the result column so the answer is easy to scan.

| p | && | q |
| - | - | - |
| t | T | t |
| t | F | f |
| f | F | t |
| f | F | f |

---

`||` is true when at least one input is true. The table shows that a single true input is enough to produce a true result.

| p | \|\| | q |
| - | - | - |
| t | T | t |
| t | T | f |
| f | T | t |
| f | F | f |

---

Negation has one input. `!` reverses the truth value, so every true input becomes false, and every false input becomes true.

| p | !p |
| - | - |
| t | F |
| f | T |

---

XOR means “exclusive or”: the result is true when exactly one input is true. JavaScript has no dedicated boolean XOR operator, but we can build it from the operators we already have:

```javascript
const p = true;
const q = false;
const exclusiveOr = (p || q) && !(p && q);
console.log(exclusiveOr);
```

```text
true
```

The first half, `p || q`, requires at least one truthy input. The second half, `!(p && q)`, rules out the case where both inputs are true. For boolean values, `p !== q` is another concise way to express XOR, but the longer version shows the logic directly. The table confirms that XOR is true only when exactly one input is true.

| p | XOR | q |
| - | - | - |
| t | F | t |
| t | T | f |
| f | T | t |
| f | F | f |

---

`displayName || "Guest"` returns the fallback string because the empty display name is falsy. These operators return one of their operands, not necessarily a boolean. That is useful, but it is also why we should read the expression rather than assuming the result can only be `true` or `false`.

---

## Try it Yourself

Combine a signed-in check with an administrator check. Try a non-empty display name and then an empty one. Add a function call on the right side of `&&` and explain when short-circuiting prevents it from running. We will study functions in depth later.

---

## More background

See [MDN: Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_operators).

---
