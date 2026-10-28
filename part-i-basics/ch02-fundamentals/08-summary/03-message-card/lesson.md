# Homework: message card

Build a tiny message card for a colleague. It should greet the person by name on one line, tell them that their notes are ready on the next line, and print the notes path twice: once as an ordinary escaped string and once with `String.raw`.

The output should look like this:

```text
Hello, Grace!
Your notes are ready.
C:\Users\Grace\notes.txt
C:\Users\Grace\notes.txt
```

Use a template literal for the greeting, `\n` for the line break, and both path techniques from the previous lesson. The two paths should print the same result even though their source code uses different rules.

Here is a starting shape. It shows the values we need, but leaves the string work to you:

```javascript
const name = "Grace";
const ordinaryPath = /* write the path as an ordinary string */;
const rawPath = /* write the same path with String.raw */;
const card = /* make the two-line greeting */;
console.log(card);
console.log(ordinaryPath);
console.log(rawPath);
```

---

## Hints

- Keep the name in a binding so changing it updates the greeting.
- `\\` produces one backslash in an ordinary string.
- `String.raw` is used with backticks, not ordinary quote marks.

---

## Try it Yourself

Change the name, add a third line to the card, and use a different folder name in both paths. Check that the ordinary and raw versions still print the same path. Then add a quoted word to the greeting and escape the quote correctly.

Use **Show example (spoiler)** only after you have made a first attempt. Future-you will be less annoyed if present-you gives the problem a fair hearing.

---

## More background

See [MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and [MDN: String.raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw).

---
