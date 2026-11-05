$("#choices li").on("click", function () {
  $("#choices li").removeClass("selected");
  $(this).addClass("selected");
  $("#status").text(`Selected: ${$(this).data("name")}`);
});

console.log(`Matched ${$("#choices li").length} items`);
console.log("jQuery loaded before main.js");
