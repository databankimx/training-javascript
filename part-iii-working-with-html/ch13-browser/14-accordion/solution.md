## Solution

```javascript
document.querySelectorAll(".heading").forEach(button => {
  button.addEventListener("click", () => {
    const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
});
```

The button remains the interaction target, and the panel is connected through `aria-controls`. No click-only styling is standing in for actual state.

---
