# Escapes and raw strings - exercise solution

Here is one reasonable way through this exercise:

```javascript
const message = "She said, \"JavaScript is useful.\"\nIt is also particular about backslashes.";
console.log(message);

const ordinaryPath = "C:\\Users\\Ada\\notes.txt";
const rawPath = String.raw`C:\Users\Ada\notes.txt`;
console.log(ordinaryPath);
console.log(rawPath);

console.log("Line one\tLine two");
```

```text
She said, "JavaScript is useful."
It is also particular about backslashes.
C:\Users\Ada\notes.txt
C:\Users\Ada\notes.txt
Line one\tLine two
```

The quote is escaped so it remains part of the message, and `\n` creates the line break. The ordinary path doubles each backslash in the source, while `String.raw` lets the template keep the backslashes as written. `\t` inserts a tab, which is another escape sequence worth recognizing when it appears in existing code.

---
