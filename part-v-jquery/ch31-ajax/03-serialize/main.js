$("#search-form").on("submit", function (event) {
  event.preventDefault();
  const query = $(this).serialize();
  $("#output").text(query);
  console.log(query);
});
