# Stacks and queues

Arrays can model several familiar data structures if we choose the operations carefully. A stack removes the newest item first. A queue removes the oldest item first. The computer will not stop us from mixing the rules, so the names are a useful reminder of the contract we intend to keep.

```javascript
const stack = [];
stack.push("first", "second", "third");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

const queue = ["first", "second", "third"];
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
```

> A stack is last in, first out. `push()` adds to the top, and `pop()` removes from the top.
>
> **LIFO** means “last in, first out.” It is the short name for the stack’s removal rule.
>
> A queue is first in, first out. `push()` adds at the back, and `shift()` removes from the front.
>
> **FIFO** means “first in, first out.” It is the short name for the queue’s removal rule.

```text
third
second
first
first
second
third
```

| Structure | Add | Remove | First item removed |
| --- | --- | --- | --- |
| Stack, LIFO | `push()` | `pop()` | Newest |
| Queue, FIFO | `push()` | `shift()` | Oldest |

`shift()` is easy to understand, but repeatedly removing from the front of a large array can be expensive because the remaining items may need to move. For a high-volume queue, use a head index or a dedicated deque implementation. Starting with the clear version is still sensible; premature cleverness is not a performance strategy.

---

## Try it Yourself

Model a browser history as a stack and a line of waiting requests as a queue. Add and remove items in both orders, then explain why the same array methods produce different behavior.

---

## More background

See [MDN: Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [MDN: Array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), and [MDN: Array.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).

---
