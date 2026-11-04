# Splicing and flattening arrays

Sometimes we need to insert or remove an item in the middle of an array, such as removing a cancelled line item from an order. `splice()` does that by changing the original array. `toSpliced()` is the newer alternative when we want the changed result without mutating the original. `flat()` handles a different problem: removing one level of nesting from data assembled in groups.

```javascript
const colors = ["red", "green"];
colors.splice(1, 0, "blue");
console.log(colors.join(","));

const removed = colors.toSpliced(1, 1);
console.log(removed.join(","));
console.log(colors.join(","));

const nested = [[1, 2], [3, 4]];
console.log(nested.flat().join(","));
```

> `splice(start, deleteCount, ...items)` changes the original array by removing and optionally inserting items.
>
> `toSpliced()` accepts the same basic arguments but returns a changed copy, leaving the original array alone. It is the newer non-mutating form.
>
> `flat()` returns a new array with nested arrays flattened by one level. `flat(2)` would flatten two levels.

```text
red,blue,green
red,green
red,blue,green
1,2,3,4
```

Here is the practical comparison:

| Method | Purpose | Changes the original? |
| --- | --- | --- |
| `splice()` | Insert or remove in place | Yes |
| `toSpliced()` | Insert or remove in a copy | No |
| `flat()` | Remove a level of array nesting | No |

The old and new methods are both worth recognizing. Existing applications may use `splice()` deliberately, or accidentally. New code can choose `toSpliced()` when preserving the original collection makes the data flow easier to reason about.

---

## Try it Yourself

Insert an item in the middle of an array, remove one item with `splice()`, and make the same change with `toSpliced()`. Print both arrays to prove which one changed. Flatten a two-level array, then try a three-level array with and without a depth argument.

---

## More background

See [MDN: splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [MDN: toSpliced](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), and [MDN: flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat).

---
