## Solution

```javascript
const form = document.querySelector("#access-form");
const requester = document.querySelector("#requester");
const message = document.querySelector("#message");
const realSubmit = document.querySelector("#real-submit");
const email = document.querySelector("#email");

form.addEventListener("submit", event => {
  event.preventDefault();
  message.textContent = `Submitted for ${requester.value.trim()}.`;
});

document.querySelector("#check").addEventListener("click", () => {
  const name = requester.value.trim();
  const address = email.value.trim();
  if (!name || !address.includes("@")) {
    message.textContent = "Enter a name and a valid-looking email address.";
    return;
  }

  realSubmit.click();
});
```

The separate validation button checks both fields. Only after both checks pass does it click the hidden submit control, which keeps the real form workflow in charge of the final submission.

```text
Valid input: Submitted for Ada.
```

---
