# Solution

The runnable example uses the same XOR function for both directions:

```javascript
const message = "HELLO";
const key = 42;
const encoded = xorMessage(message, key);
const decoded = xorMessage(encoded, key);
console.log(decoded);
```

```text
HELLO
```

The interesting property is that XORing with the same key twice restores the original character code. That is useful for demonstrating reversible transformations, but the short fixed key is not secure encryption.

---

