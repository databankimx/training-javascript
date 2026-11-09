function report(label) {
  const events = document.querySelector("#events");
  $(events).append($(`<li>${label}</li>`));
  console.log(label);
}

$(document).ready(function () {
  report("jQuery ready fired");
});
document.addEventListener("DOMContentLoaded", function () {
  report("DOMContentLoaded fired");
});
window.addEventListener("load", function () {
  report("window load fired");
});
