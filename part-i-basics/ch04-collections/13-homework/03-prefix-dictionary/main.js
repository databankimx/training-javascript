const trie = {
  c: { a: { r: { end: true }, t: { end: true }, n: { end: true } } }
};

console.log(Boolean(trie.c.a.r.end));
console.log(Boolean(trie.c.a.n.end));
console.log(Boolean(trie.c.a.d?.end));
