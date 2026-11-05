const status = document.querySelector("#status");

document.querySelector("#native").addEventListener("click", () => {
  status.textContent = "Native JavaScript updated the page.";
  console.log("native handler ran");
});

$("#jquery").on("click", function () {
  $("#status").text("jQuery updated the page.");
  console.log("jQuery handler ran");
});
