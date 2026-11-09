const status = document.querySelector("#status");

document.querySelector("#vanilla").addEventListener("click", () => {
  status.textContent = "The native event listener ran.";
});

$("#jquery").on("click", () => {
  $("#status").text("The jQuery event handler ran.");
});
