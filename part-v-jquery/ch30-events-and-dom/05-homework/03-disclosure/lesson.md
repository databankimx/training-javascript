# Homework: accessible disclosure

Build a disclosure panel for help text. The button must show or hide the panel, update its own label, and keep `aria-expanded` synchronized with the actual state. Use the existing `hidden` property rather than relying only on a visual effect.

```javascript
$("#toggle").on("click", function () {
  // Read the hidden state, change it, and update the button.
});
```

```text
Show details
Hide details
```

## Try it Yourself

Add a second disclosure panel and make sure each button controls only its own panel. Then add a keyboard test using Enter and Space. Explain why the `aria-controls` relationship belongs in the HTML even though JavaScript performs the state change.

The spoiler contains a complete solution.

---
