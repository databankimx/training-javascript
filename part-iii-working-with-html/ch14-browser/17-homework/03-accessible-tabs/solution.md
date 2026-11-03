## Solution

```javascript
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function selectTab(tab) {
  tabs.forEach(item => item.setAttribute("aria-selected", String(item === tab)));
  panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute("aria-controls"); });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    next.focus();
    selectTab(next);
  });
});
```

The same selection function serves both mouse and keyboard paths. That keeps the two ways of using the control from drifting apart, which is a surprisingly easy bug to create when each path has its own copy of the logic.

```text
The selected tab has aria-selected="true" and only its panel is visible.
```

---
