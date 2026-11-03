# Homework: profile draft

Build a small profile-draft form. The page already has a display name, a time-zone select list, Save draft, and Discard draft buttons.

```javascript
form.addEventListener("submit", event => {
  event.preventDefault();
  // Save the current draft and report its state.
});
```

```text
Draft saved for Ada in central.
Draft discarded.
```

---

## Try it Yourself

Prevent navigation on submit and report the saved display name and time zone. Handle the reset event separately so Discard draft restores the status message. Add a validation rule that refuses to save a blank display name and focuses the field instead.

Use **Show example (spoiler)** only after testing save, reset, and blank input.

---
