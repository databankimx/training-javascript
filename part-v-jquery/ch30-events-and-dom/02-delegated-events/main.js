let nextItem = 2;

$("#items").on("click", ".remove", function () {
  $(this).closest("li").remove();
  $("#status").text("Removed an item.");
});

$("#add").on("click", function () {
  $("#items").append(`<li><button class="remove" type="button">Remove item ${nextItem}</button></li>`);
  nextItem += 1;
});
