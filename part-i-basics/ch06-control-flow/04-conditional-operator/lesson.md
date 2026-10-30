# The conditional operator

Sometimes a decision only needs to choose one value. The conditional operator puts that small choice in one expression. It is useful for a label or a fallback, but a full `if` statement is easier to read when each branch needs several statements.

```javascript
const age = 21;
const displayName = "";

const ageLabel = age >= 18 ? "Adult" : "Minor";
const greeting = displayName ? `Hello, ${displayName}` : "Hello, guest";

console.log(ageLabel);
console.log(greeting);
```

> The conditional operator has three parts: a condition, the value after `?` when it is truthy, and the value after `:` when it is falsy.
>
> `condition ? whenTrue : whenFalse` chooses one value. It does not run a sequence of statements in the way an `if` block can.

```text
Adult
Hello, guest
```

The first expression chooses `Adult` because 21 is at least 18. The second expression chooses the guest greeting because an empty string is falsy.

---

## Try it Yourself

Change the age and name, then predict both outputs. Rewrite one conditional expression as an `if` / `else` statement and decide which version is easier to read.

---

## More background

See [MDN: Conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

---
