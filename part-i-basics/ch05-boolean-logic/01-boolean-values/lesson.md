# Boolean values and comparisons

Programs make decisions by asking questions. JavaScript represents the answer with a boolean value: `true` or `false`. Comparison operators ask whether values are equal, different, larger, or smaller.

```javascript
const age = 42;

console.log(age >= 18);
console.log(age > 18);
console.log(age < 18);
console.log(age <= 42);
console.log(age === "42");
console.log(age !== 21);
console.log(age == "42");
console.log(age != "41");
console.log(true);
console.log(false);
```

> A boolean is either `true` or `false`.
>
> `===` asks whether two values have the same value and type.
>
> `!==` asks whether two values differ in value or type.
>
> `==` and `!=` are older, coercing comparison operators. We are including them here so the family is complete; the next lesson explains why new code normally prefers the strict forms.

```text
true
true
false
true
true
false
true
false
true
true
```

| Operator | Question | Output here |
| --- | --- | --- |
| `>` | Is the left value larger? | `true` |
| `<` | Is the left value smaller? | `false` |
| `>=` | Is the left value at least as large? | `true` |
| `<=` | Is the left value no larger? | `true` |
| `===` | Are value and type both equal? | `false` |
| `!==` | Are value or type different? | `true` |
| `==` | Are values equal after possible coercion? | `true` |
| `!=` | Are values different after possible coercion? | `true` |

The string `"42"` looks like the number `42`, but it is not the same value and type. That distinction is why strict comparisons are the normal starting point in new code.

---

## Try it Yourself

Compare a number with a string, test three boundary values with `>=`, and predict each boolean before running the program. Change one operator and explain the change rather than merely reporting that the output moved.

---

## More background

See [MDN: Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators).

---
