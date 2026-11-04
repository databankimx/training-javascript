# Homework: build a reusable pipeline

A pipeline is useful when several small transformations should happen in a predictable order. Your job is to build one reusable helper and use it to clean and label two messages.

```javascript
const pipe = (...functions) => value => {
  // Apply each function from left to right.
};
```

```text
INFO: READY
INFO: SAVED
```

## Try it Yourself

Implement `pipe`, then create a pipeline that trims whitespace, converts text to uppercase, and adds the `INFO: ` prefix. Use it for both messages. Try moving the functions into a different order and explain how the output changes.

---
