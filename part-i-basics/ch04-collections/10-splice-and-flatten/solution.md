# Exercise solution

Here is one way to make the changed array without disturbing the original, then flatten a separate nested value.

```javascript
const original = ["Ada", "Grace", "Linus"];
const changed = original.toSpliced(1, 1, "Margaret");
const flattened = [["red"], ["green", "blue"]].flat();

console.log(original.join(", "));
console.log(changed.join(", "));
console.log(flattened.join(", "));
```

```text
Ada, Grace, Linus
Ada, Margaret, Linus
red, green, blue
```

`toSpliced()` produces the changed copy and leaves `original` untouched. `flat()` removes one level of nesting and returns a new array. Printing both arrays makes the mutation boundary visible instead of leaving it to guesswork.

---
