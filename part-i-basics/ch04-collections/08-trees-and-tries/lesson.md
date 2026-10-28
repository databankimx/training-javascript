# Trees and tries

Some collections are not naturally a line. A reporting structure, a folder hierarchy, or a page outline has parents and children. A tree represents that shape. A trie is a specialized tree that stores words by sharing their prefixes, which makes prefix lookup useful for search suggestions and dictionaries.

```javascript
const organization = {
  name: "root",
  children: [
    { name: "Ada", children: [] },
    { name: "Grace", children: [] }
  ]
};

console.log(organization.name);
console.log(organization.children[0].name);

// A tiny trie for the words "car" and "cat"
const trie = { c: { a: { r: { end: true }, t: { end: true } } } };
console.log(Boolean(trie.c.a.r.end));
console.log(Boolean(trie.c.a.d?.end));
```

> A tree is a collection of nodes connected by parent-child relationships.
>
> A root is the starting node. A leaf is a node with no children.
>
> A trie is a tree that stores a key one character or component at a time, sharing common prefixes.

```text
root
Ada
true
false
```

The organization example uses an array of child objects. The trie uses nested properties for characters. Tries are often used for fast traversal of a dictionary by prefix, which is why they show up in autocomplete and word-search tools. Both are ordinary JavaScript objects and arrays; the data structure comes from the relationships we choose to represent, not from a special `Tree` keyword hiding somewhere in the language.

---

## Try it Yourself

Add a third child to the organization tree. Extend the trie with `can`, then check both a complete word and a prefix that is not a complete word. Sketch the relationships before writing the nested object. It is much easier to find a missing branch on paper than inside a punctuation thicket.

---

## More background

See [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects) and [Wikipedia: Trie](https://en.wikipedia.org/wiki/Trie) for the data-structure idea.

---
