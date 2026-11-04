$("#search").on("submit", function (event) {
  event.preventDefault();
  $("#output").text($(this).serialize());
});
