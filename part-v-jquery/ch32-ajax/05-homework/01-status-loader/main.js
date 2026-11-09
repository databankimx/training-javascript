function loadStatus() {
  return $.Deferred(function (deferred) {
    setTimeout(() => deferred.resolve({ status: "ready" }), 250);
  }).promise();
}

$("#load").on("click", function () {
  $("#output").text("Loading...");
  loadStatus().done(data => $("#output").text(`Status: ${data.status}`)).fail(() => $("#output").text("Status unavailable."));
});
