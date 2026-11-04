## Solution

```javascript
dialog.addEventListener("close", () => {
  if (dialog.returnValue === "save" && note.value.trim()) {
    const item = document.createElement("li");
    item.textContent = note.value.trim();
    notes.append(item);
    note.value = "";
  }
  opener.focus();
});
```

The dialog handles entry, while the page owns the saved list. Returning focus to the opener keeps keyboard users from being dropped somewhere mysterious after the modal closes.

---
