$("#toggle").on("click", function () {
  $("#status").toggleClass("highlighted plain");
  const highlighted = $("#status").hasClass("highlighted");
  $("#status").text(highlighted ? "Highlighted" : "Plain");
});
