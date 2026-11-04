(function ($) {
	$.fn.markResource = function (options) {
		const settings = $.extend({ prefix: "Resource: " }, options);
		return this.each(function () {
			$(this).prepend(settings.prefix);
		});
	};
}(jQuery));

$("a.resource").markResource().addClass("marked");
$("#output").text("Plugin applied to 2 links");
