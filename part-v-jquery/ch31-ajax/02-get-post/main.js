function show(label, method) {
  $("#output").text(`${method} request completed for ${label}.`);
  console.log(method, label);
}

$("#get").on("click", function () { show("status", "GET"); });
$("#post").on("click", function () { show("comment", "POST"); });
