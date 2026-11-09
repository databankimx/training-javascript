# Solution

```javascript
(function ($) {
	$.fn.showLinkLocation = function (options) {
		const settings = $.extend({
			separator: " (",
			closing: ")"
		}, options);

		return this.each(function () {
			const link = $(this);
			if (!$(this).find(".link-location").length) {
				$(this).append(`<span class="link-location">${settings.separator}${$(this).attr("href")}${settings.closing}</span>`);
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
```

The IIFE protects the alias, the options object provides defaults, `.each(...)` handles every link, and `return this` preserves chaining. The `#guide` and `#reference` targets identify real sections in the example page, so the links remain useful when clicked.

---
