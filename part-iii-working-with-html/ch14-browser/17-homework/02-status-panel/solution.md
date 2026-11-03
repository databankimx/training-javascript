## Solution

```javascript
const run = document.querySelector("#run");
const messages = document.querySelector("#messages");

run.addEventListener("click", () => {
  const message = document.createElement("p");
  message.textContent = "Import complete.";
  messages.replaceChildren(message);
});
```

The solution creates a fresh paragraph and replaces the previous message, so repeated runs do not build an accidental history of identical notices. A failure button can use the same pattern and add the `error` class before appending.

```text
Import complete.
```

---
