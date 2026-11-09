# Selector and event performance

Most pages do not need heroic optimization. They do benefit from avoiding needless repeated work. Cache a selection when the same elements will be used repeatedly, scope selectors to a meaningful container, and bind one delegated handler instead of subscribing the same work to hundreds of rows.

```javascript
const items = $("#items li");

$("#run").on("click", function () {
	items.addClass("updated");
});
```

The selection is made once, not every time the button is clicked. That is a small improvement, but it also makes the code's target obvious.

```text
Updated 3 items with one cached selection.
```

> **Do not optimize by superstition.** Measure a slow page, then improve the repeated selector, event storm, or unnecessary redraw that the measurement identifies.

---

## Try it Yourself

Create a version that selects the items inside the click handler. Compare the two versions in a page with many rows. Then add a delegated handler instead of one handler per row and explain the tradeoff.

---
