# Solution

```javascript
const email = $("#email");
const valid = email.val().trim() !== "" && email.val().includes("@");
email.toggleClass("invalid", !valid);
```

The validation decision stays in JavaScript while CSS controls the invalid appearance.

---
