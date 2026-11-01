# Homework: interactive counter

Add an event listener that increments the visible count each time the button is clicked.

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
