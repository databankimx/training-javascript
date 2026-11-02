## Solution

```javascript
tabs.forEach(tab => {
  tab.addEventListener("click", () => selectTab(tab));
});

function selectTab(tab) {
  const panelId = tab.getAttribute("aria-controls");

  tabs.forEach(item => {
    item.setAttribute("aria-selected", String(item === tab));
  });

  panels.forEach(panel => {
    panel.hidden = panel.id !== panelId;
  });
}
```

```text
One panel is visible, and the selected tab has no bottom border.
```

The tab and panel stay synchronized through `aria-controls`, `aria-selected`, and `hidden`. The CSS removes the selected tab's bottom border so it visually joins the panel beneath it.

---
