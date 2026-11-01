# Searching and testing arrays

After we have a collection, we often need to ask it questions. Is a value present? Where is it? Which item is the first match? Do any or all of the items meet a condition? These are the questions behind filtering a user list, checking permissions, and validating imported data. JavaScript has a method for each question, because apparently one method would have been too relaxing.

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

Here is a brief explanation of the search methods in the example:

| Method | Purpose | Output here |
| --- | --- | --- |
| `includes()` | Check membership | `true` |
| `indexOf()` | Find a position | `1` |
| `find()` | Return the first matching value | `Grace` |
| `findLast()` | Return the last matching value | The last match |
| `filter()` | Return every matching value | A new array |
| `some()` | Test whether any item matches | `true` |
| `every()` | Test whether all items match | `false` |

JavaScript does not provide a `findAll()` method for arrays. When we want every matching item, `filter()` provides the equivalent behavior:

```javascript
const scores = [62, 88, 91, 88];

console.log(scores.find(score => score === 88));
console.log(scores.filter(score => score === 88));
```

```text
88
[ 88, 88 ]
```

`find()` stops at the first match and returns one value. `filter()` checks the whole array and returns a new array containing every match. If nothing matches, `find()` returns `undefined`, while `filter()` returns an empty array.

`findLast()` is the matching counterpart when the most recent match is the one we need. It searches from the end of the array and returns one value, or `undefined` when no item passes the test. It is a modern method, so older code may use a reversed copy or a manual loop instead.

The callback in the example is an arrow function. Each method supplies an item to that callback, and the callback supplies the test result. We will study functions and callbacks in much greater detail later.

---

## Try it Yourself

Search for a name that exists and one that does not. Compare `find()` with `indexOf()`, then write one `some()` test and one `every()` test that produce opposite answers. Explain the difference between “no item matched” and “the item was at position -1.”

---

## More background

See [MDN: Array searching](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#searching_an_array) and [MDN: Array find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).

---
