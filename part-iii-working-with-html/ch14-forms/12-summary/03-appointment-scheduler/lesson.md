# Homework: appointment scheduler

Build on the form-control and formatting lessons. The supplied page has date, time, radio-button, and checkbox controls, but the submit handler is only a placeholder.

```javascript
form.addEventListener("submit", event => {
  event.preventDefault();
  // Validate the appointment and format a confirmation.
});
```

```text
Appointment: November 5, 2026 at 2:30 PM
Type: video
Reminder: yes
```

---

## Try it Yourself

Reject a missing date or time with the `invalid` class and focus the first invalid control. Read the selected radio button and checkbox state. Use `Intl.DateTimeFormat` to produce a readable confirmation and say whether a reminder will be sent.

Use **Show example (spoiler)** only after testing both meeting types and both reminder states.

---
