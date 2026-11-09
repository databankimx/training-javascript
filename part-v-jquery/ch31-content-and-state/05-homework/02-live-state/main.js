$("#enable").on("click", function () {
  $("#action").prop("disabled", false);
  $("#output").text(`Attribute: ${$("#action").attr("disabled")}; Property: ${$("#action").prop("disabled")}`);
});
