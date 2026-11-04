# jQuery form validation

Validation plugins can be useful, but the basic pattern is worth understanding first. Intercept submission, inspect the live values, mark invalid fields with a class, and stop the request when the data is not ready.

```javascript
$("#form").on("submit", function (event) {
	event.preventDefault();
	const email = $("#email");
	const valid = email.val().trim() !== "" && email.val().includes("@");
	email.toggleClass("invalid", !valid);
});
```

The browser's `required` attribute is useful, but it is not a replacement for application rules. A real form might require matching totals, a date range, or an OnBase-specific submission path.

```text
Ready to send.
Enter a valid email address.
```

---

## Try it Yourself

Add a confirmation field and require both email values to match. Focus the first invalid field and explain why server-side validation still matters.

---
