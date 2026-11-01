## Solution

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

The handler prevents navigation, trims the value, validates it, and writes a safe formatted message.

---
