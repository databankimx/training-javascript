# Exercise solution

Here is one way to add a tree branch and extend the shared prefix in the trie.

```javascript
const organization = {
  name: "root",
  children: [
    { name: "Ada", children: [] },
    { name: "Grace", children: [] },
    { name: "Linus", children: [] }
  ]
};

const trie = {
  c: { a: { r: { end: true }, t: { end: true }, n: { end: true } } }
};

console.log(organization.children.length);
console.log(Boolean(trie.c.a.c?.end));
console.log(Boolean(trie.c.a.n.end));
```

```text
3
false
true
```

The tree gets another child in the array. The trie shares the `c` and `a` branches for `car`, `cat`, and `can`, then marks the final character of each complete word with `end`. The missing `cad` branch reports false because a shared prefix is not automatically a complete word. Optional chaining lets the missing `d` branch return `undefined` instead of throwing before `Boolean()` turns that result into `false`.

---
