# Homework: message card - exercise solution

```javascript
const name = "Grace";
const ordinaryPath = "C:\\Users\\Grace\\notes.txt";
const rawPath = String.raw`C:\Users\Grace\notes.txt`;

const card = `Hello, ${name}!\nYour notes are ready.`;
console.log(card);
console.log(ordinaryPath);
console.log(rawPath);
```

```text
Hello, Grace!
Your notes are ready.
C:\Users\Grace\notes.txt
C:\Users\Grace\notes.txt
```

The template literal handles both interpolation and the embedded newline escape. The ordinary string doubles each backslash in its source, while `String.raw` preserves the backslashes in the template. Both bindings therefore produce the same path for the reader.

---
