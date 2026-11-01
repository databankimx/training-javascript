## Solution

```javascript
const toggle = document.querySelector("#toggle-details");
const details = document.querySelector("#details");
const status = document.querySelector("#status");
const ready = document.querySelector("#ready");
const clearStatus = document.querySelector("#clear-status");

toggle.addEventListener("click", () => {
  details.hidden = !details.hidden;
  toggle.textContent = details.hidden ? "Show details" : "Hide details";
  status.textContent = details.hidden
    ? "Details are hidden."
    : "Details are visible.";
});

ready.addEventListener("click", () => {
  status.textContent = "Ready for the next lesson.";
});

clearStatus.addEventListener("click", () => {
  status.textContent = "";
});
```

```text
The first button toggles the details and keeps its label in sync.
The second button changes only the status message.
```

The exercise adds one listener for the new button. The existing listeners still own the show/hide and ready-message behavior, so each piece of code has one clear job.

---
