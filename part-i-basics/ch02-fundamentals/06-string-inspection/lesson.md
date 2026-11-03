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

`length` counts the string’s UTF-16 code units. `at(0)` gets the first character, and `at(-1)` gets the last character. `charAt(0)` also gets the first character, but it does not accept negative indexes. `charCodeAt(0)` returns the numeric UTF-16 code unit for the character instead of returning the character itself.

The negative-index example is why `at()` is worth learning even though `charAt()` already exists. If the question is “what is the last character?” then counting backward is clearer than calculating `length - 1` yourself.

Here is a quick reference for the inspection tools we just used:

| Tool | What it tells us | Example result |
| --- | --- | --- |
| `length` | How many UTF-16 code units the string contains | `10` |
| `at(index)` | The character at a position, including negative positions | `language.at(-1)` returns `"t"` |
| `charAt(index)` | The character at a nonnegative position | `language.charAt(0)` returns `"J"` |

Here is the code-point detail in isolation:

```javascript
const letter = "A";

console.log(letter.at(0));
console.log(letter.charAt(0));
console.log(letter.charCodeAt(0));
console.log(letter.at(4));
console.log(letter.charAt(4));
console.log(Number.isNaN(letter.charCodeAt(4)));
```

```text
A
A
65
undefined

true
```

The two character-access methods return different results when the index is outside the string. `at(4)` returns `undefined`, while `charAt(4)` returns an empty string. `charCodeAt(4)` also returns `NaN` when there is no character at that position. These are not interchangeable failure values, so choose the method whose result makes the next decision clear.

One more wrinkle: JavaScript strings use UTF-16 code units internally. Most everyday characters behave exactly as we expect, but some emoji and other Unicode characters use two code units. That means `length` is not always the same as the number of visible symbols. The computer is counting storage units, not doing typography.

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

The differences become easier to see with deliberately awkward inputs:

```javascript
const text = "JavaScript";

console.log(text.slice(-6, -1));
console.log(text.substring(-6, 4));
console.log(text.slice(6, 2));
console.log(text.substring(6, 2));
```

```text
Scrip
Java

vaSc
```

`slice(-6, -1)` counts from the end and returns characters up to, but not including, the final position. `substring(-6, 4)` converts the negative value to zero, so it returns the first four characters. When `start` is greater than `end`, `slice()` follows the requested direction and returns an empty string, while `substring()` swaps the two arguments and returns the range between them.

> The ending index in `slice(start, end)` and `substring(start, end)` is exclusive. A range ending at `4` includes indexes `0` through `3`, not index `4`.

---

## Try it Yourself

Use a sentence of your own. Print its length, its first character, its last character, and a character code. Try an index that is outside the string and compare `at()`, `charAt()`, and `charCodeAt()`. Extract a slice from the middle, then try the same range with both `slice()` and `substring()` and a negative index with `slice()`.

If you can explain where the indexes begin, what the ending position means, and why `at(-1)` is useful, you are ready to search through strings.

---

## More background

See [MDN: String length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), [MDN: at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at), [MDN: slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice), and [MDN: substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring).

---
