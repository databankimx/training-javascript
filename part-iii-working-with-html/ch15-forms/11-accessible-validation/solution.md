## Solution

```javascript
const invalid = nameInput.value.trim() === "";
nameInput.classList.toggle("invalid", invalid);
nameInput.setAttribute("aria-invalid", String(invalid));
error.textContent = invalid ? "Display name is required." : "";
if (invalid) nameInput.focus();
```

The visual class and ARIA state are updated from the same boolean, so they cannot quietly disagree. Clearing the error text on valid input matters just as much as showing it on invalid input.

```text
Invalid input: Display name is required.
Valid input: the error message is cleared
```

---
