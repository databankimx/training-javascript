# Solution

```javascript
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
```

The IIFE protects the `$` alias, the options object provides a default, `.each(...)` processes every link, and `return this` preserves the chain.

---
