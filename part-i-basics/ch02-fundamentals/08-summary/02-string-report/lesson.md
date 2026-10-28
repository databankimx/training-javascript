# Homework: string report

Create a short report from a name with accidental outside spaces and a note about what the person is learning. The report should clean the name, count its characters, and identify whether the note mentions JavaScript.

Your output should have three lines, like this:

```text
Name: Ada Lovelace
Length: 12
Topic: JavaScript
```

Use `trim()`, `length`, `includes()`, and a template literal. Keep the original value available so you can compare the raw text with the cleaned text while you work.

Here is a starting shape. The expressions that clean, inspect, and label the data are yours to add:

```javascript
const rawName = "  Ada Lovelace  ";
const note = "Ada is learning JavaScript.";
const name = /* clean the raw name */;
console.log(/* print the cleaned name */);
console.log(/* print its length */);
console.log(/* report whether the note mentions JavaScript */);
```

---

## Hints

- Clean the name once and store the result in a new binding.
- `length` is a property, so it does not have parentheses.
- `includes()` returns a boolean. A conditional expression can choose the text for the final line.

---

## Try it Yourself

Change the name and the note. Test a note that mentions JavaScript and one that does not. Add a second search for a word that should not be present, and explain the boolean result before you reveal the example.

---

## More background

See [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [MDN: trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim), and [MDN: includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes).

---
