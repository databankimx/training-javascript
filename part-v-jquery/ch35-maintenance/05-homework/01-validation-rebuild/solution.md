# Solution

```javascript
$("#save").on("click", function () {
	const email = $("#email").val().trim();
	const valid = email.includes("@");

	$("#email").toggleClass("invalid", !valid);
	$("#message").text(valid ? "Saved." : "Enter an email address.");

	if (!valid) {
		$("#email").trigger("focus");
	}
});
```

`toggleClass` keeps the visual state synchronized with the validation result, while `trigger("focus")` puts the user's cursor where the correction is needed.

```text
Enter an email address.
```

---
