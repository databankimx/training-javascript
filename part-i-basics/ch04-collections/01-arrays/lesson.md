# Arrays

When several values belong together, an array gives us one name for the collection and a position for each item. We use arrays for search results, line items, names returned by a service, and the rows waiting to be displayed on a page. JavaScript arrays are ordered, start counting at zero, and can grow or shrink as the program runs. They can also hold mixed types, although a collection whose items have no understandable relationship becomes a drawer full of cables pretty quickly.

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

## Reading and changing positions

Indexes start at zero. The first item is at index `0`, and `at(-1)` asks for the last item without requiring us to calculate `length - 1`:

```javascript
const values = ["first", 42, true];

console.log(values[0]);
console.log(values.at(-1));

values[1] = 43;
console.log(values[1]);
console.log(values[3]);
```

```text
first
true
43
undefined
```

Assigning to an existing index replaces that item. Reading an index beyond the end does not throw an `IndexError` as Python does. JavaScript returns `undefined`, which means a typo can look like missing data unless we check the index deliberately. Assigning to an index beyond the current end creates a sparse array with empty slots, so use `push()` when you mean “add the next item.”

> A sparse array has one or more empty slots between its beginning and its highest assigned index. Empty slots are not the same thing as a deliberate value such as `undefined`, so avoid creating them accidentally.

The bracket syntax creates an array, commas separate its items, and the items can be different types:

```javascript
const mixed = ["Ada", 37, true];
console.log(mixed.length);
```

The flexibility is useful when the data really is mixed. For a collection of records, an array of objects is usually clearer. We will introduce that shape after objects and collections have both had their turn.

---

## Try it Yourself

Create an array of three things you know, read the first and last item, add a fourth item, and replace one item by index. Try reading an index that does not exist and explain the result. Then assign a value two positions beyond the end and inspect the resulting `length` and empty slot. Reset the example afterward so the sparse array does not become an accidental design decision.

---

## More background

See [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [MDN: Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

---
