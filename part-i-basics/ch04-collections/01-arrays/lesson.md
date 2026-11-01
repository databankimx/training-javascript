# Arrays

When several values belong together, an array gives us one name for the collection and a position for each item. We use arrays for search results, line items, names returned by a service, and the rows waiting to be displayed on a page. JavaScript arrays are ordered, start counting at zero, and can grow or shrink as the program runs.

```javascript
const names = ["Ada", "Grace", "Linus"];

console.log(names[0]);
console.log(names.length);
names.push("Margaret");
console.log(names);
```

> An array is an ordered collection of values.
>
> An index is a zero-based position in the array. Index `0` is the first item.
>
> `length` is a property that reports how many items the array contains.

```text
Ada
3
[ 'Ada', 'Grace', 'Linus', 'Margaret' ]
```

Here is a quick explanation of the expressions in the example:

| Expression | Purpose | Output here |
| --- | --- | --- |
| `names[0]` | Read the first item | `Ada` |
| `names.length` | Count the items | `3` |
| `names.push(...)` | Add an item at the end | Four items remain in the array |

Arrays are mutable, which means an operation such as `push()` changes the existing array. That is useful when we are deliberately building a collection, but it is worth noticing whenever the same array is shared by more than one binding.

---

## Try it Yourself

Create an array of three things you know, read the first and last item, add a fourth item, and replace one item by index. Try reading an index that does not exist and explain the result.

---

## More background

See [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [MDN: Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

---
