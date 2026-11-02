# Form validation and formatting

Validation becomes more useful when a form has several fields and each field has its own rule. A name must contain text. A quantity must be a whole number greater than zero. A price must be a finite number that is not negative. An email must at least look like an email address. None of those rules comes from the browser's `required` attribute in this example. We are writing the rules ourselves so the code shows exactly what the application considers valid.

```javascript
form.addEventListener("submit", event => {
  event.preventDefault();
  const fields = [nameInput, quantityInput, priceInput, emailInput];
  fields.forEach(field => field.classList.remove("invalid"));

  const quantity = Number(quantityInput.value);
  const price = Number(priceInput.value);
  const invalid = [];
  if (!nameInput.value.trim()) invalid.push(nameInput);
  if (!Number.isInteger(quantity) || quantity < 1) invalid.push(quantityInput);
  if (!Number.isFinite(price) || price < 0) invalid.push(priceInput);
  if (!emailInput.value.trim().includes("@")) invalid.push(emailInput);

  invalid.forEach(field => field.classList.add("invalid"));
  if (invalid.length > 0) {
    message.textContent = "Please correct the highlighted fields.";
    invalid[0].focus();
    return;
  }

  message.textContent = `Thanks, ${nameInput.value.trim()}. Total: $${(quantity * price).toFixed(2)}.`;
});
```

```text
Invalid fields: highlighted with a pale red background
Valid input: Thanks, Ada. Total: $39.98.
```

The handler clears stale error styling first, checks each field, highlights every invalid field, and focuses the first one. A user can see all the problems at once, while the focus tells them where to begin. Once the fields pass, the same handler calculates and formats the total.

> The `invalid` class is our own CSS state. It is not the browser's built-in validation system.
>
> `Number.isInteger()` checks for a whole number. `Number.isFinite()` rejects `NaN` and the infinities.
>
> `focus()` moves the keyboard focus to the first invalid control.

---

## Try it Yourself

Test blank, malformed, and valid input. Make sure old invalid styling is removed when the user corrects a field, and keep focus on the first remaining problem.

---

## More background

See [MDN: form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) and [MDN: `HTMLElement.focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).

---
