$("#update").on("click", function () {
  $("#name").val("Grace");
  $("#region").val("West");
  $("#output").text(`Updated name: ${$("#name").val()}; Updated region: ${$("#region").val()}`);
});
