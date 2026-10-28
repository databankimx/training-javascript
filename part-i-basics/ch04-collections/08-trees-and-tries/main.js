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
