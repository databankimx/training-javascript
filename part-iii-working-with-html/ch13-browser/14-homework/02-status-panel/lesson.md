# Homework: live status panel

Build a small status panel for an import button. When the button is clicked, create a paragraph inside `#messages`, set its text, and apply an `error` class when the simulated import fails. Keep the message in the DOM so a screen reader can announce it through `aria-live`.

```javascript
const run = document.querySelector("#run");
const messages = document.querySelector("#messages");
```

```text
Import complete.
```

---

## Try it Yourself

Create the message with `document.createElement("p")`, append it to `messages`, and add a second button that reports an error. Use `classList.add("error")` for the error state and `classList.remove("error")` when the next run succeeds.

Use **Show example (spoiler)** only after you have tested both paths.

---
