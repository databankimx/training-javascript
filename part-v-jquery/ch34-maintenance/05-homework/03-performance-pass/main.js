$("#run").on("click", function () {
	const items = $("#items li");
	items.addClass("updated");
	$("#output").text(`Updated ${items.length} items.`);
});
