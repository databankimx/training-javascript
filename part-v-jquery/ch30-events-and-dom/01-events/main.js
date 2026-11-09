function report(event) {
  $("#status").text(`Handled ${event.type} on ${event.currentTarget.id}.`);
  console.log(event.type, event.currentTarget.id);
}

$("#save").on("click", report);
$("#remove").on("click", function () {
  $("#save").off("click", report);
  $("#status").text("The save handler was removed.");
});
