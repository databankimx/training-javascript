# Real-world example: tabbed pages

Tabbed pages are a common way to keep a busy form or dashboard from becoming a wall of controls. The page has three tabs, but only one panel is visible at a time. The selected tab looks connected to its panel, like a rolodex card sticking out of the stack. The selected tab has no bottom border, so the panel border appears to continue from the tab.

The HTML gives each tab a relationship to its panel:

```html
<div class="tabs" role="tablist" aria-label="Information sections">
  <button id="tab-overview" type="button" role="tab"
          aria-selected="true" aria-controls="panel-overview">Overview</button>
  <button id="tab-details" type="button" role="tab"
          aria-selected="false" aria-controls="panel-details">Details</button>
  <button id="tab-notes" type="button" role="tab"
          aria-selected="false" aria-controls="panel-notes">Notes</button>
</div>

<section id="panel-overview" role="tabpanel"
         aria-labelledby="tab-overview">...</section>
```

```javascript
function selectTab(tab) {
  const panelId = tab.getAttribute("aria-controls");

  tabs.forEach(item => {
    item.setAttribute("aria-selected", String(item === tab));
  });

  panels.forEach(panel => {
    panel.hidden = panel.id !== panelId;
  });

  selected.textContent = `Selected tab: ${tab.textContent}`;
}
```

```text
Selecting Details shows only the Details panel.
The status line says: Selected tab: Details
```

> `aria-selected` tells assistive technology which tab is active.
>
> `aria-controls` connects a tab to the panel it controls.
>
> The `hidden` property removes non-selected panels from the visible page.

The script updates both behavior and state. Hiding the panels is not enough. The selected tab needs a matching visual style and an accurate `aria-selected` value, or the page tells three different stories about what is active. Browsers are surprisingly literal about this sort of thing.

You have seen us add `aria-*` attributes in a few places, so this is a good moment for a brief explanation. **ARIA** means Accessible Rich Internet Applications. These attributes give assistive technology extra information about controls whose meaning is not obvious from ordinary HTML alone. They do not make bad HTML magically good, and they do not replace a proper label, button, heading, or form element. They fill in the relationships and state changes that JavaScript creates, such as which tab is selected and which panel it controls.

---

## Try it Yourself

Select each tab and confirm that only its panel is visible. Add a fourth tab and panel. Then add keyboard support so Left and Right Arrow move between tabs and focus the newly selected tab.

---

## More background

See [MDN: aria-selected](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected), [MDN: hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden), and [WAI-ARIA Authoring Practices: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

---
