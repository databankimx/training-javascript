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

The important distinction is between the source code and the resulting value. The two characters `\` and `n` in the source become one newline character in the string. JavaScript is interpreting the escape sequence while it builds the value.

> An escape sequence begins with a backslash and gives a character a special meaning inside a string.
>
> `\"` represents a quote character, and `\n` represents a newline character.
>
> A literal character is the character itself, rather than an instruction such as `\n` that JavaScript interprets.

Here are the escape sequences used in this lesson:

| Source text | Result | Use it for |
| --- | --- | --- |
| `\"` | `"` | A quotation mark inside a double-quoted string |
| `\\` | `\` | A literal backslash |
| `\n` | A newline | Moving the following text to the next line |

The left column shows what we type. The middle column shows what becomes part of the resulting string. That difference between source text and stored value is the part worth remembering.

### The escape sequences you are likely to meet

Here is the fuller reference. You will not use every entry every week, but knowing that an escape exists is much better than deciding that JavaScript has developed a personal grudge against your string.

| Escape | Result | Typical use |
| --- | --- | --- |
| `\0` | Null character | Low-level or legacy data formats. Do not follow it with another digit. |
| `\b` | Backspace | Terminal-style or control-character data |
| `\f` | Form feed | Older printer and text formats |
| `\n` | Line feed | A new line on most systems |
| `\r` | Carriage return | Older line-ending conventions and text protocols |
| `\t` | Horizontal tab | Indentation or tab-separated data |
| `\v` | Vertical tab | Rare control-character data |
| `\'` | Single quote | A quote inside a single-quoted string |
| `\"` | Double quote | A quote inside a double-quoted string |
| ``\` `` | Backtick | A backtick inside a template literal |
| `\\` | Backslash | A literal backslash |
| `\xNN` | Character with the given two-digit hexadecimal code | Short ASCII and Latin-1-style escapes |
| `\uNNNN` | Character with the given four-digit hexadecimal code | A Unicode character by code unit |
| `\u{N...}` | Unicode code point | Characters that need more than four hexadecimal digits |

For example, these three forms produce the same copyright symbol:

```javascript
console.log("©");
console.log("\u00A9");
console.log("\u{A9}");
```

```text
©
©
©
```

The direct character is easiest to read when the file encoding is reliable. The `\\uNNNN` form is useful when a code unit needs to be explicit, and the `\\u{...}` form is the modern choice for a Unicode code point outside the basic four-digit range.

JavaScript also permits a backslash at the end of a source line to continue a string onto the next line. That is different from `\\n`: the continuation does not add a newline character to the resulting value. It only keeps the source line going. Legacy octal escapes may appear in old scripts, but avoid writing them in new code. They are restricted in strict mode and can be confusing beside modern hexadecimal and Unicode escapes.

## Backslashes in paths

```javascript
const path = "C:\\Users\\Ada\\notes.txt";
console.log(path);
```

```text
C:\Users\Ada\notes.txt
```

Because a backslash starts an escape sequence, the source uses `\\` to produce one literal backslash in the result. Windows paths are a dependable way to discover whether we understand this rule. They are also a dependable way to discover whether we have not.

Once we understand that doubled backslash rule, we can ask whether we want JavaScript to interpret the backslashes at all. That is where `String.raw` becomes useful.

## Keeping text raw

```javascript
const rawPath = String.raw`C:\Users\Ada\notes.txt`;
console.log(rawPath);
```

```text
C:\Users\Ada\notes.txt
```

JavaScript does not have a separate raw-string prefix such as Python’s `r"..."`. `String.raw` is a tagged template that keeps backslashes from being interpreted as escape sequences. It is useful for paths, regular-expression patterns, and other text where the backslashes are data.

If you are coming from C#, this is an easy place to make the wrong assumption. In C#, a verbatim literal such as `@"C:\Path"` treats the backslash as an ordinary character. JavaScript template literals use backticks, but backticks do **not** make the contents verbatim. They still interpret escapes and still support interpolation:

```javascript
const interpretedPath = `C:\new\notes.txt`;
const rawPath = String.raw`C:\new\notes.txt`;

console.log(JSON.stringify(interpretedPath));
console.log(rawPath);
```

```text
"C:
ew
otes.txt"
C:\new\notes.txt
```

The first value interprets `\n` as a newline, twice. `String.raw` preserves the backslashes, which is what we usually want for a Windows path. JavaScript has no `@"..."` equivalent. `String.raw` is the mechanism to reach for when the backslashes are data rather than escape instructions.

---

## Try it Yourself

Make a message that includes a quoted word and two lines of output. Then print a file path twice: once with an ordinary string, using doubled backslashes, and once with `String.raw`. Choose one control-character escape from the reference table, use it in a small example, and explain what it does. Finally, try a Unicode escape and compare it with the direct character.

If you can tell the difference between a backslash in the source and a backslash in the resulting value, you have the important part. The punctuation is fussy, but at least it is consistently fussy.

---

## More background

See [MDN: Lexical grammar - string literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) and [MDN: String.raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw).

---
