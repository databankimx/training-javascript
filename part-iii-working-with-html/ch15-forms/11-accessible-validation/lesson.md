# Accessible validation messages

Visual styling is useful, but it is not the whole message. Someone using a screen reader may not see the red border, and someone using a keyboard needs to know which field needs attention. We can mark the field with `aria-invalid`, connect it to an error paragraph with `aria-describedby`, and move focus to the problem.

```javascript
const invalid = nameInput.value.trim() === "";
nameInput.classList.toggle("invalid", invalid);
nameInput.setAttribute("aria-invalid", String(invalid));
error.textContent = invalid ? "Display name is required." : "";
if (invalid) nameInput.focus();
```

```text
Invalid input: Display name is required.
Valid input: the error message is cleared
```

The runnable page gives you a visible path through both states. Leave the name blank and choose **Save profile** first. Then enter a name and submit again. The field styling, error message, ARIA state, and success message should all change together.

> `aria-invalid="true"` tells assistive technology that the current value fails validation.
>
> `aria-describedby` points to text that explains a control.
>
> `role="alert"` asks the browser to announce a newly inserted error message.

---

## Try it Yourself

Add a second field with its own error paragraph. Make each field point to the correct message, clear `aria-invalid` when the value is fixed, and focus the first invalid field.

---

## More background

See [MDN: `aria-invalid`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid), [MDN: `aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), and [MDN: `role="alert"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role).

---
