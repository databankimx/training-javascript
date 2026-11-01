# Array methods

Once we have an array, the next question is usually how to change it without losing track of what changed. Adding the next item to a work queue is different from making a report from the first five items. Some methods mutate the original array. Others return a new array. That difference is more important than memorizing the names, although the names are unfortunately still required.

```javascript
const colors = ["red", "green"];

colors.push("blue");
console.log(colors.at(-1));
console.log(colors.shift());
colors.unshift("red");
console.log(colors.join(", "));

const copy = colors.slice(0, 2);
console.log(colors.length);
console.log(copy.length);
```

> `push()` adds to the end, while `shift()` removes from the beginning. Both mutate the original array.
>
> `pop()` removes and returns the last item. It is the back-of-the-array counterpart to `shift()`.
>
> `unshift()` adds to the beginning, and `join()` creates one string from the items.
>
> `slice()` returns a section as a new array and leaves the original array alone.

```text
blue
blue
red
red, green
2
2
```

Here is the practical distinction between the methods in the example:

| Method | Purpose | Mutates the original? |
| --- | --- | --- |
| `push()` | Add at the end | Yes |
| `pop()` | Remove from the end | Yes |
| `shift()` | Remove from the beginning | Yes |
| `unshift()` | Add at the beginning | Yes |
| `join()` | Create a string from items | No |
| `slice()` | Copy a range into a new array | No |

The safest choice depends on whether we want to change the shared collection or create a result for someone else to use. `toSpliced()` is the newer non-mutating alternative to `splice()` when we need to insert or remove items in the middle.

---

## Try it Yourself

Build an array, add two items, remove one from each end, and make a copy of the remaining range. Print both arrays so you can prove which operations changed the original.

---

## More background

See [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [MDN: toSpliced](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced).

---
