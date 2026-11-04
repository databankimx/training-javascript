# Strict and loose equality

JavaScript has two equality styles. The older `==` and `!=` operators may convert values before comparing them. The newer-looking, stricter `===` and `!==` operators compare value and type without that extra conversion.

```javascript
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 !== false);
```

> Loose equality, `==`, may coerce values before comparing them.
>
> Strict equality, `===`, compares the value and the type as they are.
>
> New code should normally use `===` and `!==`. You will encounter `==` and `!=` in older code, so learn to recognize the coercion rather than assuming the two operators are interchangeable.

```text
true
false
true
true
```

| Expression | What happens | Output |
| --- | --- | --- |
| `5 == "5"` | Text is coerced for the comparison | `true` |
| `5 === "5"` | Number and string remain different | `false` |
| `0 == false` | Both values are coerced | `true` |
| `0 !== false` | Number and boolean have different types | `true` |

Loose equality is not always wrong, but it makes the conversion part of the comparison. Explicit conversion followed by strict comparison usually makes the code easier to read and explain.

---

## Try it Yourself

Compare empty text, zero, `null`, and `undefined` with both equality styles. Predict the results, then replace coercing comparisons with explicit conversion and strict equality.

---

## More background

See [MDN: Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

---
