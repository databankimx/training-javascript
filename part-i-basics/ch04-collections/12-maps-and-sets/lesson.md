# Maps and sets

Arrays are excellent when position and order matter. Sometimes we need a different question: “What value belongs to this key?” or “Have I already seen this value?” `Map` and `Set` answer those questions directly.

```javascript
const prices = new Map([["notebook", 19.99], ["pen", 2.5]]);
const tags = new Set(["office", "office", "supplies"]);

console.log(prices.get("notebook"));
console.log([...tags]);
```

```text
19.99
[ 'office', 'supplies' ]
```

`Map` stores key/value pairs and provides `get`, `set`, `has`, and `delete`. `Set` stores each value only once, which makes it useful for deduplication and membership checks.

| Collection | Best question | Useful methods |
| --- | --- | --- |
| `Map` | What value belongs to this key? | `get`, `set`, `has`, `delete` |
| `Set` | Have we already seen this value? | `add`, `has`, `delete` |

> A `Map` is not just an object with different punctuation. It can use values of any type as keys and has collection-specific methods.
>
> A `Set` keeps unique values. Adding the same value twice does not create a duplicate.

---

## Try it Yourself

Use a `Map` to count how many times each word appears in a sentence. Use a `Set` to report the unique words. Explain why an array alone would require more searching.

---
