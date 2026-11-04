# String methods and formatting

Strings are useful for more than saying hello. We can search them, replace part of them, pad them for alignment, and format numbers for display. The trick is to keep the stored data useful, and format it only when we need to show it to someone.

## Finding and replacing text

```javascript
const name = "Ada";
console.log(name.includes("da"));
console.log(name.replace("Ada", "Grace"));
```

```text
true
Grace
```

`.includes()` answers a yes-or-no question about whether one string contains another. `.replace()` returns a new string with the matching text replaced. Neither method changes `name`.

These methods answer different questions. `includes()` reports whether a match exists, while `replace()` gives us another string. Keeping that distinction in mind will make the larger method table much less mysterious.

## Padding text

```javascript
const hours = "9";
const minutes = "15";
const timestamp = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
console.log(timestamp);
console.log("42".padEnd(6, "*") );
```

```text
09:15
42****
```

`.padStart()` adds characters at the beginning until the string reaches the requested length. Because `minutes` already contains two characters, it is left as `15`; only the one-character hour needs a leading zero. `.padEnd()` does the same at the end. These methods return strings, so they are useful for display and alignment, not arithmetic.

## Formatting numbers for people

```javascript
const total = 1234.5;
const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
console.log(formatter.format(total));
```

```text
$1,234.50
```

> `Intl.NumberFormat` creates a formatter for a particular locale and style. A locale is a language and region setting, such as `en-US`, that determines conventions like currency symbols and separators.
>
> `.format()` applies that formatter to a value, turning the number into the display string we want.

The number remains `1234.5` for calculations. We format it only when we are ready to display it. Keeping numeric data numeric saves us from trying to add `"$1,234.50"` to something later.

That separation between data and display is the same idea we used with trimming a name. Store values in the form that is useful to the program, then format a copy for the person who needs to read it.

## Console format placeholders

```javascript
console.log("Error code: %d - %s", 500, "Internal Server Error");
```

```text
Error code: 500 - Internal Server Error
```

In the console, `%d` stands for a number and `%s` stands for a string. The console replaces those placeholders with the values that follow them. This is useful in development tools and Node.js output, but it is not the same as building a string for a page or storing data.

Here is a quick reference for the methods and formatting tools used in this lesson:

| Tool | Purpose | Result |
| --- | --- | --- |
| `includes(text)` | Check whether text appears | `true` or `false` |
| `replace(old, new)` | Replace the first matching value | A new string |
| `padStart(length, text)` | Add padding at the beginning when needed | A new string |
| `padEnd(length, text)` | Add padding at the end when needed | A new string |
| `Intl.NumberFormat` | Create a locale-aware number formatter | A formatter object |
| `.format(value)` | Apply that formatter to a number | A display string |

---

## Try it Yourself

Create a small receipt with a customer name, a quantity, and a numeric total. Use `.includes()` to check for a word, `.replace()` to change a name, `.padStart()` to align a time, and `Intl.NumberFormat` to display currency.

Run each small section as you go, and explain what each method returns. If the final output looks right but the stored values are still useful for calculations, you have kept the important boundary in the right place.

---

## More background

See [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [MDN: Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), and [Node.js: util.format](https://nodejs.org/api/util.html#utilformatformat-args).

---
