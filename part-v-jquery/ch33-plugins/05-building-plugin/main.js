(function ($) {
	$.fn.showLinkLocation = function (options) {
		const settings = $.extend({
			separator: " (",
			closing: ")"
		}, options);

		return this.each(function () {
			const link = $(this);
			if (!link.find(".link-location").length) {
				link.append(`<span class="link-location">${settings.separator}${link.attr("href")}${settings.closing}</span>`);
			}
		});
	};
}(jQuery));

$("#apply").on("click", function () {
	$("a.resource")
		.showLinkLocation({ separator: " [", closing: "]" })
		.addClass("annotated");
	$("#output").text("The plugin pretty-printed both in-page link targets and remained chainable.");
	$(this).prop("disabled", true);
});

$("a.resource").on("click", function (event) {
	event.preventDefault();
	$(this.getAttribute("href"))[0]?.scrollIntoView({ behavior: "smooth" });
});

console.log("Plugin applied to 2 links.");
