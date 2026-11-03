## Solution

```javascript
const email = document.querySelector("#email");
const updates = document.querySelector("#updates");
const save = document.querySelector("#save");
const status = document.querySelector("#status");

document.querySelector("#prepare").addEventListener("click", () => {
  email.value = "grace@example.com";
  updates.checked = true;
  save.disabled = false;
  status.textContent = "Example preferences prepared.";
});

email.addEventListener("input", () => {
  save.disabled = email.value.trim() === "";
});

save.addEventListener("click", () => {
  status.textContent = `Saved ${email.value} with updates ${updates.checked ? "on" : "off"}.`;
});
```

The input handler uses the live `value` property to control the button. The script changes current state without pretending that the original HTML attribute has changed.

```text
Saved grace@example.com with updates on.
```

---
