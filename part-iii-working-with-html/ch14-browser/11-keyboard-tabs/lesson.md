# Keyboard navigation for tabs

Mouse clicks are not the only way people use a page. A tab interface should also work for someone navigating with a keyboard. The selected tab needs focus, the arrow keys should move to the neighboring tab, and the panel should change with it.

The first tab receives focus when the page loads. That is especially useful in the lesson runner, where focus may initially be on the containing preview dialog. Without this step, the first Right Arrow press belongs to the dialog instead of moving to the next tab.

```javascript
tab.addEventListener("keydown", event => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

  event.preventDefault();
  const direction = event.key === "ArrowRight" ? 1 : -1;
  const next = tabs[(index + direction + tabs.length) % tabs.length];
  next.focus();
  selectTab(next);
});
```

```text
Tab to a tab, then press Left or Right Arrow.
Focus moves, selection changes, and the matching panel appears.
```

> `keydown` fires when a key is pressed.
>
> `event.key` identifies the key, such as `ArrowLeft` or `ArrowRight`.
>
> `focus()` moves keyboard focus to an element.
>
> `preventDefault()` stops the browser's built-in action when our handler is taking over.

Keyboard support is not decorative polish. If a control can be clicked, it needs a usable keyboard path too. Otherwise the page works beautifully for the people who can use a mouse and quietly excludes everyone else. That is not a feature.

---

## Try it Yourself

Use Tab to reach the tab list, then use the arrow keys. Add the Home and End keys so Home selects the first tab and End selects the last. Keep `aria-selected` and the visible panel synchronized.

---

## More background

See [MDN: keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event), [MDN: focus](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus), and [WAI-ARIA Authoring Practices: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

---
