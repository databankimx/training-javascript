function request(succeeds) {
  return $.Deferred(function (deferred) {
    setTimeout(() => succeeds ? deferred.resolve({ status: 200 }) : deferred.reject({ status: 500 }), 150);
  }).promise();
}

function run(succeeds) {
  $("#output").text("Waiting for response...");
  request(succeeds).done(data => $("#output").text(`Success: HTTP ${data.status}`)).fail(error => $("#output").text(`Request failed: HTTP ${error.status}`));
}

$("#ok").on("click", () => run(true));
$("#fail").on("click", () => run(false));
