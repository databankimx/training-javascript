# Escapes and raw strings

Strings are usually easy to read until the text itself contains a quote, a line break, or a backslash. Then JavaScript needs us to explain which characters belong to the string and which characters control the code. This is one of those places where a tiny mark can do a surprising amount of work.

## Escaping characters

```javascript
// Quotation marks inside a string
const quote = "She said, \"Hello.\"";
console.log(quote);

// Escape sequences can add characters that are hard to type directly
const lines = "First line\nSecond line";
console.log(lines);
```

```text
She said, "Hello."
First line
Second line
```

The backslash introduces an escape sequence. `\"` means a quote belongs inside the string instead of ending it. `\n` means a newline, so the second `console.log` call prints two lines even though the source has one line of JavaScript.

> An escape sequence begins with a backslash and gives a character a special meaning inside a string.
>
> `\"` represents a quote character, and `\n` represents a newline character.
>
> A literal character is the character itself, rather than an instruction such as `\n` that JavaScript interprets.

## Backslashes in paths

```javascript
const path = "C:\\Users\\Ada\\notes.txt";
console.log(path);
```

```text
C:\Users\Ada\notes.txt
```

Because a backslash starts an escape sequence, the source uses `\\` to produce one literal backslash in the result. Windows paths are a dependable way to discover whether we understand this rule. They are also a dependable way to discover whether we have not.

## Keeping text raw

```javascript
const rawPath = String.raw`C:\Users\Ada\notes.txt`;
console.log(rawPath);
```

```text
C:\Users\Ada\notes.txt
```

JavaScript does not have a separate raw-string prefix such as Python’s `r"..."`. `String.raw` is a tagged template that keeps backslashes from being interpreted as escape sequences. It is useful for paths, regular-expression patterns, and other text where the backslashes are data.

---

## Try it Yourself

Make a message that includes a quoted word and two lines of output. Then print a file path twice: once with an ordinary string, using doubled backslashes, and once with `String.raw`. Add one escape sequence of your own and explain what it does.

If you can tell the difference between a backslash in the source and a backslash in the resulting value, you have the important part. The punctuation is fussy, but at least it is consistently fussy.

---

## More background

See [MDN: Lexical grammar - string literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) and [MDN: String.raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw).

---
