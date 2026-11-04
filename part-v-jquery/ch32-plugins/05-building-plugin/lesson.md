# Building a jQuery plugin

A jQuery plugin is a function attached to `$.fn`, the prototype shared by jQuery objects. Once attached, it becomes callable on a selection just like `.addClass(...)` or `.text(...)`.

This lesson follows the pattern used in older jQuery code: start with a small method, protect the `$` alias with an IIFE, keep private settings inside that scope, support options, handle every matched element, and return `this` so the method remains chainable.

The exercise has a practical design goal. A page contains links to sections of the same document, but the visible link text does not tell the reader where each link goes. Our plugin will pretty-print the target beside the link. That gives the user a small amount of useful context without forcing every page author to repeat the same markup by hand.

The page opens with ordinary links. Click **Apply link-location plugin** and watch the links change. The plugin adds the target beside each link and makes the links bold. That visible before-and-after is the point of the example. A plugin that runs invisibly and leaves no evidence is not a very generous teaching example.

---

## The plugin shape

```javascript
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
```

The IIFE gives the plugin a private `$` parameter, so it still means jQuery even if another library uses the global `$`. The options object provides defaults. `this` is the whole jQuery selection, and `.each(...)` applies the work to every matched link. Returning `this` keeps the call chainable.

```javascript
$("#apply").on("click", function () {
	$("a.resource")
	.showLinkLocation({ separator: " [", closing: "]" })
	.addClass("annotated");
	$(this).prop("disabled", true);
});
```

```text
Plugin applied to 2 links.
```

The links point to `#guide` and `#reference`, so clicking them moves to real content on this page rather than navigating to a server route that the lesson runner does not provide. After the button runs, the plugin adds `[ #guide ]` or `[ #reference ]` beside the visible link text. That is the “pretty-print” behavior: the target becomes readable without changing the link's actual destination.

The example also intercepts the click and scrolls to the target section itself. That keeps the interaction inside the preview document, which matters when the lesson is running inside the training runner's preview frame.

> **Chainable plugin** means the plugin returns the original jQuery selection. A plugin that returns `undefined` breaks the caller's next chained method.

Avoid creating several narrowly related plugin names when one method with an options object or action argument will do. Also avoid global variables. A plugin is already adding to a shared namespace, so it should not scatter more names around the page.

---

## Try it Yourself

Add an option that controls whether the target is wrapped in brackets or parentheses. Apply the plugin to three links and prove that the original selection remains chainable. Then call the plugin a second time and explain why the guard prevents duplicate annotations.

---

## More Background

- [jQuery plugin authoring](https://learn.jquery.com/plugins/basic-plugin-creation/)
- [jQuery `$.extend`](https://api.jquery.com/jQuery.extend/)

---
