let number = 1;

$("#add").on("click", function () {
  const note = $(`<li class="note">Note ${number}<button class="delete" type="button" aria-label="Delete note ${number}">Delete</button></li>`);
  $("#notes").append(note);
  number += 1;
});

$("#notes").on("click", ".delete", function () {
  $(this).closest(".note").remove();
});
