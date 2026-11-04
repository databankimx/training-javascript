# Truthiness

An `if` condition needs a boolean, but JavaScript will convert other values when it has to. This automatic conversion is called truthiness. The short version is useful, as long as we know which values count as false.

```javascript
const values = [false, 0, "", null, undefined, NaN, [], {}];

for (const value of values) {
  console.log(Boolean(value));
}
```

> A truthy value behaves like `true` in a condition. Truthy does not mean the value is literally the boolean `true`.
>
> A falsy value behaves like `false` in a condition. It does not mean the value is literally the boolean `false`.
>
> The common falsy values are `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
>
> Empty arrays and empty objects are truthy. They are collections, not missing values, even when they contain nothing.

```text
false
false
false
false
false
false
true
true
```

`Boolean(value)` makes the conversion visible. In an `if` statement, JavaScript performs the same conversion implicitly. The empty-array and empty-object cases are where many otherwise sensible assumptions wander into a ditch.

## More values worth memorizing

The less familiar falsy values include negative zero and the BigInt zero. Non-empty strings are truthy, even when their text looks like a falsy value:

```javascript
const values = [-0, 0n, "0", "false"];

for (const value of values) {
  console.log(Boolean(value));
}
```

```text
false
false
true
true
```

`"0"` and `"false"` are strings with characters in them, so they are truthy. Their spelling does not give them boolean meaning.

## Truthiness is not equality

The EForms examples also demonstrate why we should not test truthiness by comparing a value to `true` or `false` with `==`. Equality coercion follows its own rules:

```javascript
console.log(null == false);
console.log(NaN == false);
console.log(undefined == false);
console.log("0" == true);
console.log(1 == true);
console.log([] == false);
```

> `null`, `NaN`, and `undefined` are falsy in a condition, but none of them is loosely equal to `false`.
>
> `"0"` is truthy in a condition, but it is not loosely equal to `true`.
>
> `1 == true` is `true` because loose equality converts the boolean to a number. That does not make every truthy value equal to `true`.

```text
false
false
false
false
true
true
```

The reliable questions are different: use `if (value)` to ask whether a value is truthy, use `items.length > 0` to ask whether an array contains items, and use strict equality when comparing a value with a specific value.

## Coercion beyond booleans

Coercion also appears in the `+` operator. If one operand is text, JavaScript concatenates instead of adding:

```javascript
console.log("0" + 1);
console.log(1 + Number("1"));
```

```text
01
2
```

Convert explicitly when the value should be numeric. Relying on `+` to guess what we meant is how a small form field acquires a surprisingly long debugging session.

## The empty-array trap

An empty array is truthy when JavaScript needs a boolean. It can still appear falsy in a loose comparison because `==` performs coercion before it compares:

```javascript
const emptyArray = [];

console.log(Boolean(emptyArray));
console.log(emptyArray == false);
console.log(emptyArray === false);
console.log(emptyArray == "");
```

> In a condition, `[]` is truthy. The array exists, even though it has no items.
>
> In a loose comparison, `[]` can be converted to an empty string, and that value can then compare equal to `false` or `0`.
>
> `[] === false` is `false` because an array and a boolean are different types. Strict comparison exposes the values as they really are.

```text
true
true
false
true
```

| Expression | What JavaScript is doing | Result |
| --- | --- | --- |
| `Boolean([])` | Asking whether the array exists | `true` |
| `[] == false` | Coercing before comparing | `true` |
| `[] === false` | Comparing type and value directly | `false` |
| `[] == ""` | Coercing the empty array to empty text | `true` |

This is why a check such as `if (items)` does not tell us whether an array has items. It tells us whether the array reference is present. Use `items.length > 0` when the question is whether the collection contains anything, and use strict comparisons when comparing values.

---

## Try it Yourself

Test a whitespace string, a negative number, an empty array, and an array containing one `false` value. Predict each boolean and explain why the collection cases are truthy.

Then compare `if (items)` with `if (items.length > 0)` for an empty array and a one-item array. Try the loose comparisons from the trap example, but explain why strict equality is easier to reason about.

---

## More background

See [MDN: Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [MDN: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

---
