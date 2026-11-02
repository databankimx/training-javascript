## Solution

```javascript
const email = document.querySelector("#email");
const updates = document.querySelector("#updates");
const status = document.querySelector("#status");
const toggle = document.querySelector("#toggle-email");
const timezone = document.querySelector("#timezone");

document.querySelector("#inspect").addEventListener("click", () => {
  const contact = document.querySelector('input[name="contact"]:checked');
  status.textContent = [
    `Email: ${email.value}`,
    `Receive updates: ${updates.checked ? "on" : "off"}`,
    `Contact method: ${contact.value}`,
    `Time zone: ${timezone.value}`
  ].join("\n");
});

toggle.addEventListener("click", () => {
  email.disabled = !email.disabled;
  toggle.textContent = email.disabled ? "Enable email" : "Disable email";
});
```

The toggle reads the current boolean and assigns its opposite. The button text changes at the same time, so the interface tells the truth about what the next click will do.

```text
Email: ada@example.com
Receive updates: on
Contact method: email
Time zone: central
```

---
