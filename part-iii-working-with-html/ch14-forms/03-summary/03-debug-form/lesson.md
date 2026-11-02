# Homework: debug a form

Add a debug helper that writes to the console and the visible debug area when validation runs.

```javascript
const debug = message => { console.log(message); debugOutput.textContent += `${message}\n`; };
```

```text
Validation ran
```

---

## Try it Yourself

Log both a successful validation and a validation error. Add a clear button.

Use **Show example (spoiler)** after testing.

---
