# Classes and styles

Classes are usually the best way to express a visual state. JavaScript decides whether an element is highlighted, invalid, selected, or plain. CSS decides what those states look like. That separation keeps the script from becoming a pile of color codes with a user interface attached.

---

```javascript
$("#status").toggleClass("highlighted plain");
const highlighted = $("#status").hasClass("highlighted");
$("#status").text(highlighted ? "Highlighted" : "Plain");
```

`.toggleClass(...)` changes the classes. `.hasClass(...)` reads the resulting state, and the text reports it to the user. `.css(...)` is useful for a calculated one-off value, but a reusable appearance usually belongs in a stylesheet and a class.

```text
Highlighted
Plain
```

> **State class** is a class whose name describes a condition, such as `selected`, `invalid`, or `highlighted`. It is more useful than a class named after a color because the design can change without rewriting the JavaScript.

---

## Try it Yourself

Add an `invalid` class to a field when a value is empty. Keep the validation decision in JavaScript and the border/background styling in CSS. Then change the CSS colors without changing the script.

---

## More Background

- [jQuery class manipulation](https://api.jquery.com/category/manipulation/class-attribute/)
- [MDN: classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

---
