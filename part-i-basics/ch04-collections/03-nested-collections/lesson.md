# Nested arrays

An array can contain other arrays. This is useful for rows and columns, groups of related values, or any data that naturally has another level. We have not introduced objects yet, so we will keep the example to arrays and positions.

```javascript
const groups = [
  ["Ada", "Grace"],
  ["Linus", "Margaret"]
];

console.log(groups[0][1]);
console.log(groups[1][0]);

const copy = [...groups];
copy[0].push("changed");
console.log(groups[0].at(-1));
```

> A nested array is an array with one or more arrays as its elements.
>
> To reach a nested value, read one index at a time. `groups[1][0]` means “the first item in the second inner array.”
>
> A shallow copy creates a new outer array but keeps the same inner arrays.

```text
Grace
Linus
changed
```

The spread operator protects the outer array, but `copy[0]` and `groups[0]` still refer to the same inner array. That is why pushing into `copy[0]` changes what we see through `groups[0]`. To make independent nested data, copy each inner array as well.

---

## Try it Yourself

Add a third group, read one value from it, and write a nested loop that prints every name. Make a shallow copy, change an inner array, and observe the original. Then create a copy with `map()` and spread so the inner arrays are separate.

---

## More background

See [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [MDN: Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

---
