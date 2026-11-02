## Solution

```javascript
const meeting = document.querySelector('input[name="meeting"]:checked');
const reminder = document.querySelector("#reminder");

date.classList.remove("invalid");
time.classList.remove("invalid");
if (!date.value || !time.value) {
  const firstInvalid = !date.value ? date : time;
  firstInvalid.classList.add("invalid");
  status.textContent = "Choose both a date and time.";
  firstInvalid.focus();
  return;
}

const appointment = new Date(`${date.value}T${time.value}`);
const readable = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "short" });
status.textContent = `Appointment: ${readable.format(appointment)}. Type: ${meeting.value}. Reminder: ${reminder.checked ? "yes" : "no"}.`;
```

This assignment uses several control types together without hiding the differences between them. The radio group is read through `:checked`, while the checkbox exposes a boolean `checked` property.

```text
Appointment: November 5, 2026 at 2:30 PM. Type: video. Reminder: yes.
```

---
