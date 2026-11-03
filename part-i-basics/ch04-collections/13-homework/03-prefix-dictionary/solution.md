# Exercise solution

Here is one way to share the common `c` and `a` branches while marking the end of each complete word.

```javascript
const trie = {
  c: { a: { r: { end: true }, t: { end: true }, n: { end: true } } }
};

console.log(Boolean(trie.c.a.r.end));
console.log(Boolean(trie.c.a.n.end));
console.log(Boolean(trie.c.a.d?.end));
```

```text
true
true
false
```

The three words share the `c` and `a` branches. The final character marks a complete word with `end`, so the `d` branch is absent and `cad` reports false. The shared branches are the reason a trie can make prefix lookup fast: the search reuses the path that earlier words already established.

---
