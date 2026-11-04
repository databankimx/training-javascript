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

There is one return-value detail worth calling out because it catches people who are thinking in terms of “change the list and give me the list back.” `push()` returns the new length, `unshift()` returns the new length, and `pop()` or `shift()` return the item they removed. They do not return the updated array:

```javascript
const names = ["Ada"];
const newLength = names.push("Grace");
const removed = names.pop();

console.log(newLength);
console.log(removed);
console.log(names);
```

```text
2
Grace
[ 'Ada' ]
```

Calling `names = names.push("Grace")` would replace the array binding with the number `2`. That is legal JavaScript and a poor afternoon.

## Inserting and removing in the middle

`splice()` changes the original array in the middle. Its first argument is the starting index, its second argument is the number of items to remove, and any remaining arguments are inserted at that position:

```javascript
const colors = ["red", "blue"];
colors.splice(1, 0, "green");
console.log(colors);
```

```text
[ 'red', 'green', 'blue' ]
```

When we want the result without changing the original, `toSpliced()` is the newer alternative:

```javascript
const original = ["red", "blue"];
const revised = original.toSpliced(1, 0, "green");
console.log(original);
console.log(revised);
```

```text
[ 'red', 'blue' ]
[ 'red', 'green', 'blue' ]
```

The older `splice()` method is common in existing code, so recognize it. The non-mutating form is often easier to reason about when several parts of a program share the original array.

The safest choice depends on whether we want to change the shared collection or create a result for someone else to use. `toSpliced()` is the newer non-mutating alternative to `splice()` when we need to insert or remove items in the middle.

---

## Try it Yourself

Build an array, add two items, remove one from each end, and make a copy of the remaining range. Print both arrays so you can prove which operations changed the original. Then insert an item with `splice()` and compare that with `toSpliced()`. Capture the return value of `push()` and explain why it is a number instead of an array.

---

## More background

See [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [MDN: toSpliced](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced).

---
