# Homework: prefix dictionary

Build a tiny trie for the words `car`, `cat`, and `can`. Use nested arrays or objects only as introduced in the lesson, and mark the end of each complete word. Then report whether `car`, `can`, and `cad` are complete words.

```javascript
const trie = {
  c: { a: { /* add the shared word branches */ } }
};

console.log(/* is car complete? */);
console.log(/* is can complete? */);
console.log(/* is cad complete? */);
```

```text
true
true
false
```

---

## Try it Yourself

Add `cap` and check that it shares the `c` and `a` branches without changing the other words. Try a prefix such as `ca` and explain why being a prefix is not the same as being a complete word.

Use **Show example (spoiler)** after you have drawn the branches and made a first attempt.

---

## More background

See [Wikipedia: Trie](https://en.wikipedia.org/wiki/Trie) and [MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

---
