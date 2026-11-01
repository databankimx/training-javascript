# String inspection and extraction

Sometimes we need to know how much text we have, look at one character, or take a smaller piece of a larger string. JavaScript gives us several ways to do that. A few look similar, so we’ll compare them instead of pretending the differences will politely explain themselves later.

## Inspecting a string

```javascript
const language = "JavaScript";

console.log(language.length);
console.log(language.at(0));
console.log(language.at(-1));
console.log(language.charAt(0));
```

```text
10
J
t
J
```

`length` counts the string’s UTF-16 code units. `at(0)` gets the first character, and `at(-1)` gets the last character. `charAt(0)` also gets the first character, but it does not accept negative indexes.

The negative-index example is why `at()` is worth learning even though `charAt()` already exists. If the question is “what is the last character?” then counting backward is clearer than calculating `length - 1` yourself.

Here is a quick reference for the inspection tools we just used:

| Tool | What it tells us | Example result |
| --- | --- | --- |
| `length` | How many UTF-16 code units the string contains | `10` |
| `at(index)` | The character at a position, including negative positions | `language.at(-1)` returns `"t"` |
| `charAt(index)` | The character at a nonnegative position | `language.charAt(0)` returns `"J"` |

> An index is a position in a string. JavaScript starts counting at zero, so the first character is index `0`.
>
> `at()` accepts negative indexes, which count backward from the end. `at(-1)` means the last character.
>
> `charAt()` is an older character-access method. It does not support negative indexes, but you are likely to encounter it in existing code.

## Extracting text

```javascript
const language = "JavaScript";

console.log(language.slice(0, 4));
console.log(language.substring(4, 10));
```

```text
Java
Script
```

Both methods take a starting position and an ending position. The ending position is not included. `slice()` accepts negative indexes, while `substring()` treats negative values as zero and swaps its arguments if the first is larger than the second.

Here is the comparison to keep handy:

| Method | Negative indexes | If the first argument is larger | Good default when... |
| --- | --- | --- | --- |
| `slice(start, end)` | Counts backward from the end | Returns the range in the requested direction | You want behavior that matches other modern string methods |
| `substring(start, end)` | Treats them as `0` | Swaps the arguments | You are reading older code that already uses it |

The methods are close enough to be confused and different enough to produce different results. In new code, `slice()` is often the easier default because its negative-index behavior is consistent with `at()`.

---

## Try it Yourself

Use a sentence of your own. Print its length, its first character, its last character, and a slice from the middle. Try the same range with both `slice()` and `substring()`, then try a negative index with `slice()`.

If you can explain where the indexes begin, what the ending position means, and why `at(-1)` is useful, you are ready to search through strings.

---

## More background

See [MDN: String length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), [MDN: at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at), [MDN: slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice), and [MDN: substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring).

---
