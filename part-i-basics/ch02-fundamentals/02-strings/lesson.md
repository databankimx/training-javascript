# Strings: cleaning and case

Sooner or later, someone will enter a name with a few extra spaces. We can handle that without asking them to become a different sort of person. Strings also need to be displayed in different ways, depending on whether we are talking to a computer or a human.

The Source pane contains a small script with two commented sections. We’ll look at one idea at a time.

## Cleaning text

```javascript
const name = "  Ada  ";
const trimmedName = name.trim();
console.log(trimmedName);
```

```text
Ada
```

The original value has spaces at both ends. `.trim()` returns a new string without those outside spaces. It does not change `name`.

## Changing letter case

```javascript
const name = "Ada";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
```

```text
ADA
ada
```

`.toUpperCase()` and `.toLowerCase()` each return a new string. They are useful for display, searching, or normalizing input, but do not assume that uppercase is always the right display choice. The computer is not a tiny office manager with a preferred filing system.

> A string is an immutable sequence of text. String methods return new strings rather than changing the original string.
>
> A method is a function attached to a value. We call one with a dot, as in `name.trim()`.
>
> `.trim()` returns a new string with whitespace removed from the beginning and end.
>
> `.toUpperCase()` returns a new string with its letters converted to uppercase. `.toLowerCase()` does the same thing with lowercase letters.

---

## Try it Yourself

Try a name with extra spaces, clean it with `.trim()`, and then display it in uppercase and lowercase. Run each small change, and explain what each method returns.

If you can explain the difference between changing a value and creating a new string, you are ready for template literals.

---

## More background

See [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

---
