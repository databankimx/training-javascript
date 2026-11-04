# Text, bytes, and encodings

Computers store text as bytes. The text looks obvious to us, but a byte is just a number from 0 through 255. An encoding defines how those numbers represent characters.

UTF-8 is the common encoding used by web pages and many files. ASCII characters usually take one byte, while characters outside the ASCII range can take several. That is why counting characters and counting bytes are not always the same thing.

JavaScript strings use UTF-16 code units internally, while `TextEncoder` writes UTF-8 bytes. Those are two different representations of the same text. For simple ASCII they often appear to agree, which is why the difference can hide until an accented character or emoji arrives.

```javascript
const message = "café";
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const bytes = encoder.encode(message);

console.log("bytes: " + [...bytes].join(", "));
console.log("JavaScript length: " + message.length);
console.log("byte count: " + bytes.length);
console.log("decoded: " + decoder.decode(bytes));
```

```text
bytes: 99, 97, 102, 195, 169
JavaScript length: 4
byte count: 5
decoded: café
```

`TextEncoder` converts a JavaScript string to UTF-8 bytes. `TextDecoder` reverses that operation. The `é` uses two bytes in UTF-8, so the five-byte result is longer than the four visible characters.

> An encoding is a rule for translating characters into bytes and translating those bytes back into characters. If the reader uses the wrong encoding, the bytes may survive while the text turns into inexplicably fuzzy nonsense.

## Try it Yourself

Replace `café` with a word containing an emoji. Compare the visible character count with the byte count. Then decode the bytes with a `TextDecoder` and confirm that the original message returns.

---
