# Form validation and formatting

Forms turn user input into application data. Read the value, clean it, validate it, and format a result without allowing the browser to navigate away before JavaScript handles the submission.

```javascript
const form = document.querySelector("#person-form");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = nameInput.value.trim();
  message.textContent = name ? `Welcome, ${name}` : "Name is required";
});
```

```text
Valid input: Welcome, Ada
Blank input: Name is required
```

> `preventDefault` stops the browser's ordinary form submission.
>
> `trim` removes surrounding whitespace before validation.
>
> `textContent` formats the result safely as text.

The same pattern scales to required fields, numbers, dates, and OnBase form controls. Keep the validation decision separate from the formatting so each part is easy to inspect.

---

## Try it Yourself

Add an email field and validate that it is not blank. Add a debug message for each rejected field, using the debug channel from the previous lesson.

---

## More background

See [MDN: HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) and [MDN: Constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation).

---
