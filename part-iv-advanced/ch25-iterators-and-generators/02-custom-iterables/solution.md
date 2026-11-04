# Solution

```javascript
const guests = {
  names: ["Ada", "Grace", "Alan"],
  *[Symbol.iterator]() {
    for (const name of this.names) {
      yield name;
    }
  }
};

for (const guest of guests) {
  console.log(guest);
}

console.log("count: " + [...guests].length);
```

```text
Ada
Grace
Alan
count: 3
```

The object remains responsible for its own storage, while `[Symbol.iterator]` defines the values consumers are allowed to traverse. The generator creates a fresh iterator for each traversal, and each `yield` supplies one name. `for...of` repeatedly calls `next()` until `done` is `true`; spread does the same thing while collecting the values into a new array.

---
