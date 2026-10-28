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

`includes()` returns a boolean. `indexOf()` returns the first matching position, and `lastIndexOf()` returns the last matching position. Both return `-1` when they find nothing. `startsWith()` and `endsWith()` return booleans about the edges of the string.

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

`.trimStart()` removes whitespace from the beginning, and `.trimEnd()` removes it from the end. `replaceAll()` replaces every matching occurrence. `split()` divides a string into an array using a separator. `repeat()` returns a new string containing the original string more than once.

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
