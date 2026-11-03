const dialog = document.querySelector("#note-dialog");
const opener = document.querySelector("#open");
const note = document.querySelector("#note");
const notes = document.querySelector("#notes");

opener.addEventListener("click", () => { dialog.showModal(); note.focus(); });
dialog.addEventListener("close", () => {
  if (dialog.returnValue === "save" && note.value.trim()) {
    const item = document.createElement("li");
    item.textContent = note.value.trim();
    notes.append(item);
    note.value = "";
  }
  opener.focus();
});
