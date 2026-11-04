# Homework: interactive counter

Add an event listener that increments the visible count each time the button is clicked. Then give the user a way to undo the count, because interfaces that only go in one direction are usually saving a complaint for later.

The supplied HTML already includes the starting value and button:

```html
<output id="count" aria-live="polite">0</output>
<button id="add" type="button">Add</button>
```

Add the reset and decrement controls to the HTML, then bind them from `main.js`.

```javascript
const count = document.querySelector("#count");
let value = 0;
document.querySelector("#add").addEventListener("click", () => { value += 1; count.textContent = value; });
```

```text
Clicking Add increases the count.
```

---

## Try it Yourself

Add a reset button and a decrement button.

Use **Show example (spoiler)** after testing.

---
