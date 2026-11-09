# Solution

```javascript
let number = 1;

$("#add").on("click", function () {
  const note = $(`<li class="note">Note ${number}<button class="delete" type="button" aria-label="Delete note ${number}">Delete</button></li>`);
  $("#notes").append(note);
  number += 1;
});

$("#notes").on("click", ".delete", function () {
  $(this).closest(".note").remove();
});
```

The add handler creates a note and an accessible delete button. The list owns one delegated delete handler, so notes added later behave like the original note.

---
