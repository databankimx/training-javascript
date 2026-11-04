# Arithmetic operators

Values become useful when we can combine them. A form might give us a quantity and a price. A report might need a total. A schedule might need to add minutes or calculate the time remaining. JavaScript uses arithmetic operators for those ordinary jobs, and each operator has a specific rule.

```javascript
const left = 13;
const right = 4;

console.log(left + right);
console.log(left - right);
console.log(left * right);
console.log(left / right);
console.log(left % right);
console.log(left ** 2);
console.log(left + right * 2);
```

```text
17
9
52
3.25
1
169
21
```

The first five operators should look familiar. The sixth, `**`, raises a number to a power. The final line gives us an early look at precedence: multiplication happens before addition, so JavaScript evaluates `right * 2` before adding `left`.

> `+` adds numbers. If one side is a string, JavaScript may concatenate instead, which is why checking types before arithmetic matters.
>
> `-` subtracts, `*` multiplies, and `/` divides.
>
> `%` is JavaScript’s **remainder operator**. People often call it the modulo or modulus operator, especially when discussing other languages. “Remainder” is the precise JavaScript term because negative values can behave differently from mathematical modulo. In the ordinary positive examples here, it gives the amount left over after division.
>
> `**` is the exponentiation operator. `left ** 2` means “left raised to the second power.” It was added in ECMAScript 2016, so older JavaScript code commonly uses `Math.pow(left, 2)` instead.

Here is a quick reference for the arithmetic operators:

| Operator | What it does | Example | Result |
| --- | --- | --- | ---: |
| `+` | Adds two values | `13 + 4` | `17` |
| `-` | Subtracts the right value from the left | `13 - 4` | `9` |
| `*` | Multiplies two values | `13 * 4` | `52` |
| `/` | Divides the left value by the right | `13 / 4` | `3.25` |
| `%` | Returns the remainder after division. Often called modulo or modulus in conversation. | `13 % 4` | `1` |
| `**` | Raises the left value to a power | `13 ** 2` | `169` |

## Remainders in real programs

The remainder operator is especially useful when a calculation repeats in cycles. It can tell us whether a number is even, select every other item, or wrap a position back to the beginning of a list:

```javascript
console.log(42 % 2);
console.log(43 % 2);
console.log(7 % 3);
```

```text
0
1
1
```

An even number has a remainder of `0` when divided by `2`. A remainder of `1` tells us that one item is left over. We will use this idea again when we work with loops and collections.

## Precedence and parentheses

JavaScript follows familiar arithmetic precedence rules. Multiplication, division, and remainder happen before addition and subtraction. This is the same order from the mnemonic **PEMDAS**: parentheses, exponents, multiplication and division, then addition and subtraction. You probably remember it from middle school, although middle school had the advantage of not also asking you to debug a form at the same time. Parentheses make the intended order explicit:

```javascript
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
```

```text
14
20
```

> A good rule of thumb is to use parentheses whenever the intended order of operations might not be immediately obvious to the reader. This helps prevent mistakes and makes the code easier to understand.

The first expression multiplies before adding. The second expression evaluates the parenthesized addition first. When the calculation matters, parentheses are cheap insurance against making the reader reconstruct the order from memory.

Here is the small part of the precedence hierarchy we need for these examples:

| Priority | Operators | What happens |
| ---: | --- | --- |
| 1 | Parentheses `( ... )` | Evaluate the grouped expression first |
| 2 | Exponentiation `**` | Raise a value to a power |
| 3 | Multiplication, division, remainder `* / %` | Perform these before addition or subtraction |
| 4 | Addition and subtraction `+ -` | Perform these after the higher-priority operations |

When two operations have the same priority, JavaScript generally evaluates them from left to right. Parentheses are still the clearest way to express a grouping that matters to the reader. They also protect the expression if someone later adds another operation and forgets the original precedence rule.

---

## Try it Yourself

Calculate the total cost of three items at `$19.99` each. Then calculate how many complete groups of four fit into `17` and how many items remain. Use parentheses to change the order in one expression and predict both results before you run the program.

Try `"13" + 4` as well as `13 + 4`. Explain why the output changes, and identify which value is text. Finally, use `**` to calculate a square and a cube.

---

## More background

See [MDN: Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators) and [MDN: Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

---
