function simulatedRequest() {
  return $.Deferred(function (deferred) {
    setTimeout(() => deferred.resolve({ status: "ready", count: 3 }), 250);
  }).promise();
}

$("#load").on("click", function () {
  $("#output").text("Loading...");
  simulatedRequest().done(function (data) {
    $("#output").text(`Status: ${data.status}; count: ${data.count}`);
  });
});
