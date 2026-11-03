# Closures in callbacks

Callbacks are functions passed to another function so they can run later. When a callback uses a surrounding variable, it is also a closure.

```javascript
function makeSaver(label) {
  return function save() {
    return label + ": saved";
  };
}

const saveAda = makeSaver("Ada");
const saveGrace = makeSaver("Grace");

console.log(saveAda());
console.log(saveGrace());
```

```text
Ada: saved
Grace: saved
```

Each call to makeSaver creates a separate label binding. The callback does not need the original function call to remain on the call stack. It retains access to the environment that created it.

This pattern appears in event handlers, timers, promise callbacks, and array methods. A common mistake is accidentally sharing one mutable binding among callbacks created in a loop. Prefer a block-scoped let binding or a factory function that creates a fresh environment for each callback.

## Try it Yourself

Create a function that accepts a list of names and returns an array of callbacks. Call every callback and verify that each one remembers the correct name.

---

