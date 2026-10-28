# Homework: prefix dictionary - exercise solution

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

The three words share the `c` and `a` branches. The final character marks a complete word with `end`, so the `d` branch is absent and `cad` reports false.

---
