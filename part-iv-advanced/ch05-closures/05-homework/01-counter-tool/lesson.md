# Homework: private counter tool

Build a counter whose value is private to a closure. The outside code should interact with it through methods instead of changing the value directly.

Your tool should provide:

- increment, which adds one,
- getValue, which returns the current value, and
- reset, which restores the starting value.

The finished program should demonstrate two increments followed by a reset.

```javascript
function makeCounter(start = 0) {
  let value = start;

  return {
    increment() {
      value += 1;
    },
    getValue() {
      return value;
    },
    reset() {
      value = start;
    }
  };
}
```

```text
count: 2
after reset: 0
```

## Try it Yourself

Create the counter from scratch, then create a second counter with a different starting value. Prove that the counters do not share state.

The spoiler contains one complete solution. Give your own version a fair chance first.

---

