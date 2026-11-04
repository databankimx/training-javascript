# Accordions

An accordion shows a heading and keeps the longer answer hidden until someone asks for it. The heading should be a real button, not a clickable paragraph wearing a button costume. The button's `aria-expanded` state and the panel's visibility must change together.

```javascript
const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);
const expanded = button.getAttribute("aria-expanded") === "true";
button.setAttribute("aria-expanded", String(!expanded));
panel.hidden = expanded;
```

```text
Closed: the answer is hidden
Open: the answer is visible and aria-expanded is true
```

> `aria-expanded` reports whether the controlled content is open.
>
> `aria-controls` connects the button to the panel it controls.

---

## Try it Yourself

Add a third panel. Then decide whether several panels may remain open or whether opening one should close the others. Whichever behavior you choose, keep the ARIA state accurate.

---
