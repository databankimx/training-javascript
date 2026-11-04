$("#date").datepicker({
	dateFormat: "yy-mm-dd",
	minDate: 0,
	onSelect: function (value) {
		$("#output").text(`Selected: ${value}`);
	}
});

console.log("Date format: yy-mm-dd");
