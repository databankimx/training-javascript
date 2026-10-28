# Searching and testing arrays

After we have a collection, we often need to ask it questions. Is a value present? Where is it? Which item is the first match? Do any or all of the items meet a condition? JavaScript has a method for each question, because apparently one method would have been too relaxing.

```javascript
const names = ["Ada", "Grace", "Linus"];

console.log(names.includes("Grace"));
console.log(names.indexOf("Grace"));
console.log(names.find(name => name.startsWith("G")));
console.log(names.some(name => name.length > 4));
console.log(names.every(name => name.length > 3));
```

> `includes()` returns `true` or `false` when it checks for a value.
>
> `indexOf()` returns the first matching position, or `-1` when there is no match.
>
> `find()` returns the first matching value, or `undefined` when there is no match.
>
> `some()` asks whether at least one item passes a test. `every()` asks whether all items pass it.

```text
true
1
Grace
true
false
```

| Method | Purpose | Output here |
| --- | --- | --- |
| `includes()` | Check membership | `true` |
| `indexOf()` | Find a position | `1` |
| `find()` | Return the first matching value | `Grace` |
| `some()` | Test whether any item matches | `true` |
| `every()` | Test whether all items match | `false` |

The callback in the example is an arrow function. Each method supplies an item to that callback, and the callback supplies the test result. We will study functions and callbacks in much greater detail later.

---

## Try it Yourself

Search for a name that exists and one that does not. Compare `find()` with `indexOf()`, then write one `some()` test and one `every()` test that produce opposite answers. Explain the difference between “no item matched” and “the item was at position -1.”

---

## More background

See [MDN: Array searching](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#searching_an_array) and [MDN: Array find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).

---
