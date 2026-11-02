# S18 · Tries and prefix lookup

## Learning goal

S18 · Tries and prefix lookup: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Several words begin with the same letters. A trie stores those shared beginnings together, which is more organized than repeatedly searching the same pile of strings.

A trie represents common prefixes as shared paths. Each edge corresponds to a character and terminal markers distinguish a whole word from a prefix. A Map per node gives clear key semantics. Lookup follows the query length rather than scanning every stored word, at a memory cost. Real search also needs normalization and Unicode policy.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect true false false. ca is a shared prefix but is not a stored word.

## Example code

```javascript
const root = {children:new Map(),end:false};
function insert(word) {
  let node=root;
  for(const char of word) {
    if(!node.children.has(char)) node.children.set(char,{children:new Map(),end:false});
    node=node.children.get(char);
  }
  node.end=true;
}
function has(word) {
  let node=root;
  for(const char of word) {
    node=node.children.get(char);
    if(!node) return false;
  }
  return node.end;
}
insert('cat');
insert('car');
console.log(has('cat'),has('ca'),has('dog'));
```

## Expected output

```text
true false false
```

## Walk through the example

insert creates child nodes only for missing edges, then marks the final node as a whole word. has follows existing edges and returns false immediately when an edge is absent. A successful traversal still needs the end flag to distinguish ca from cat.

## Try it yourself

Add a hasPrefix function and distinguish an empty prefix from an empty stored word.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
