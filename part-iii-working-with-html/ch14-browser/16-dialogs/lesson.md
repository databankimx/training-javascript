# Dialogs, focus, and note entry

The old note-entry pattern often used a hidden div and a collection of click handlers. Modern HTML gives us `<dialog>`, which supplies modal behavior and a focus boundary. The JavaScript still has to decide where focus goes and how the saved note enters the page.

```javascript
opener.addEventListener("click", () => {
  dialog.showModal();
  note.focus();
});

dialog.addEventListener("close", () => {
  if (dialog.returnValue === "save" && note.value.trim()) {
    const item = document.createElement("li");
    item.textContent = note.value.trim();
    notes.append(item);
  }
  opener.focus();
});
```

```text
Open dialog, enter a note, save it, and see it added to the list.
```

The note uses `textContent`, just like the safe comments form from the XSS chapter. A dialog is not a security boundary; it is a user-interface boundary.

> `showModal()` opens a dialog and blocks interaction with the page behind it.
>
> `returnValue` tells the close handler which dialog button was used.

---

## Try it Yourself

Add a character count and a validation message for blank notes. Confirm that Cancel returns focus to Add Note without adding anything.

---
