# String searching and transformation

Once we can inspect a string, we can ask more useful questions about it. Does it contain a word? Does it start or end with a particular value? Can we split it into pieces, replace repeated text, or pad it for display? These methods return information or new strings. They do not rewrite the original string behind our backs.

## Searching

```javascript
const phrase = "JavaScript makes forms useful";

console.log(phrase.includes("forms"));
console.log(phrase.indexOf("a"));
console.log("red, green, red".lastIndexOf("red"));
console.log(phrase.startsWith("Java"));
console.log(phrase.endsWith("useful"));
```

```text
true
1
11
true
true
```

Here is a brief explanation of the search functions we used:

| Method | What it asks | What it returns |
| --- | --- | --- |
| `includes(searchText)` | Does the string contain this text anywhere? | `true` or `false` |
| `indexOf(searchText)` | Where does the first match begin? | An index, or `-1` when there is no match |
| `lastIndexOf(searchText)` | Where does the last match begin? | An index, or `-1` when there is no match |
| `startsWith(searchText)` | Does the string begin with this text? | `true` or `false` |
| `endsWith(searchText)` | Does the string end with this text? | `true` or `false` |

Choose the method based on the question. If we only need yes or no, `includes()` is usually the clearest. If we need the location of the match, use `indexOf()` or `lastIndexOf()` and remember that `-1` means “not found.”

## Transforming

```javascript
console.log(JSON.stringify("  Ada  ".trimStart()));
console.log(JSON.stringify("  Ada  ".trimEnd()));
console.log("red red".replaceAll("red", "blue"));
console.log("Ada,Grace".split(",").length);
console.log("ha".repeat(3));
```

```text
"Ada  "
"  Ada"
blue blue
2
hahaha
```

Here is a quick reference for the transformation methods we just used:

| Method | What it does | What it returns |
| --- | --- | --- |
| `trimStart()` | Removes whitespace from the beginning | A new string |
| `trimEnd()` | Removes whitespace from the end | A new string |
| `replaceAll(old, new)` | Replaces every matching occurrence | A new string |
| `split(separator)` | Divides a string using a separator | An array of strings |
| `repeat(count)` | Repeats the original string | A new, longer string |

One small `split()` detail is worth learning now: omitting the argument does **not** mean “split on spaces.” It returns the original string inside a one-item array:

```javascript
console.log("red green".split());
console.log("red green".split(" "));
console.log("red   green".split(/\s+/));
```

```text
["red green"]
["red", "green"]
["red", "green"]
```

Use a literal space when that is the exact separator you expect. Use `/\s+/` when the input may contain several spaces, tabs, or other whitespace between the values.

The last three methods change the shape or quantity of the data. `replaceAll()` still returns one string, `split()` gives us several values in an array, and `repeat()` gives us a longer string. That is why this lesson follows inspection and searching: we are now producing new values for the next operation.

> `indexOf()` and `lastIndexOf()` return positions, not booleans. A result of `-1` means no match was found.
>
> `split()` returns an array, which is why we can ask for the resulting array’s `.length`.

---

## Try it Yourself

Search a sentence for a word, check whether it starts with a prefix, and check whether it ends with a suffix. Split a comma-separated list into an array, replace every occurrence of one word, and repeat a short pattern.

Choose one search that returns `-1`, and explain what that result means. Then try a string with whitespace at only one end so you can see the difference between `trimStart()` and `trimEnd()`.

If you can choose the method that answers the question you actually have, you are doing the useful part of string work. Memorizing every method can wait; the documentation is not going anywhere.

---

## More background

See [MDN: String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [MDN: split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

---
