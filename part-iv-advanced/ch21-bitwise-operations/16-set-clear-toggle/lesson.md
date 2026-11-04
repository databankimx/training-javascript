# Set, clear, and toggle flags

Testing a flag is only half the job. A real permissions system also needs to grant a permission, remove one, and sometimes toggle a setting.

| Operation | Expression | Effect |
| --- | --- | --- |
| Set | `flags |= MASK` | Turn the selected bit on |
| Clear | `flags &= ~MASK` | Turn the selected bit off |
| Toggle | `flags ^= MASK` | Flip the selected bit |

```javascript
let permissions = READ | WRITE;

permissions |= EXECUTE;
console.log("Granted execute: " + permissions);

permissions &= ~WRITE;
console.log("Removed write: " + permissions);

permissions ^= EXECUTE;
console.log("Toggled execute: " + permissions);
```

```text
Granted execute: 7
Removed write: 5
Toggled execute: 1
```

The tilde, `~`, flips every bit. That is why `~WRITE` creates a mask with every bit enabled except the WRITE position. ANDing with that mask clears only WRITE. XOR is a good toggle because one XOR operation changes a bit and a second operation changes it back.

## Try it Yourself

Toggle EXECUTE twice. Print the binary value after each operation and explain why the original permissions return.

---
