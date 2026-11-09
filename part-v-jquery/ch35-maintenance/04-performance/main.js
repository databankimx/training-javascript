const items = $("#items li");

$("#run").on("click", function () {
	items.addClass("updated");
	$("#output").text(`Updated ${items.length} items with one cached selection.`);
});
