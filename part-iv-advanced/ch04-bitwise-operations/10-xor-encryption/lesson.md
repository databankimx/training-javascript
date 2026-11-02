# XOR as a simple encryption idea

XOR has a useful property: applying the same key twice returns the original value. That makes it a nice way to demonstrate the basic shape of a reversible encoding process.

This is an educational example, not a security recommendation. A short, repeated XOR key is easy to discover and does not provide modern confidentiality. Real applications should use a well-reviewed cryptographic library.

```javascript
const message = "HELLO";
const key = 42;

function xorMessage(text, secret) {
  return [...text]
    .map(character => character.charCodeAt(0) ^ secret)
    .map(value => String.fromCharCode(value))
    .join("");
}

const encoded = xorMessage(message, key);
const decoded = xorMessage(encoded, key);
```

The function converts each character to its numeric character code, XORs that number with the key, and converts the result back to a character. For this particular message and key, the encoded characters happen to be printable, so we can display the encoded string directly. Calling the function again with the same key reverses the operation.

```text
encoded: boffe
decoded: HELLO
```

| Operation | Meaning |
| --- | --- |
| `plain ^ key` | Produce the encoded value |
| `encoded ^ key` | Recover the plain value |
| `key ^ key` | Produce zero |

> This is often called XOR encoding or a repeating-key XOR cipher. It demonstrates reversibility, but it is not suitable for protecting passwords, tokens, or personal information.

## Try it Yourself

Change the message and the key. Print the encoded character codes, decode them with the same key, and verify that the original message returns.

Then try decoding with a different key. Explain why the result is not readable.

---


