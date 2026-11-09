# Homework: build a plugin method

Create a `markResource` plugin. It should accept an options object with a `prefix` default, apply that prefix to every matched link, and return `this` so the caller can chain `.addClass(...)`.

```javascript
(function ($) {
	$.fn.markResource = function (options) {
		// Merge defaults, process every match, and return this.
	};
}(jQuery));
```

```text
Plugin applied to 2 links
```

## Try it Yourself

Prevent the prefix from being added twice if the plugin is called again. Then add an option that controls the class name. The spoiler contains a complete solution.

---
