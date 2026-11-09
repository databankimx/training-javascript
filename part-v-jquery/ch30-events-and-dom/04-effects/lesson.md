# Effects and visibility

jQuery includes animation helpers such as `slideToggle`, `fadeIn`, and `fadeOut`. They can make a small interface feel responsive, but the important behavior is still show and hide. A visible change should also update the button's text and ARIA state so the interface does not become a magic trick for screen-reader users.

---

```javascript
$("#details").stop(true, true).slideToggle(200);
const visible = $("#details").is(":visible");
$(this).text(visible ? "Hide details" : "Show details").attr("aria-expanded", visible);
```

`.stop(true, true)` prevents a fast series of clicks from queuing a pile of animations. `.is(":visible")` reads the current state. The button text and `aria-expanded` value then describe that state.

```text
Hide details
Show details
```

> **Effect** is presentation layered over a state change. If the content matters, the page must remain understandable when animations are disabled or reduced.

---

## Try it Yourself

Replace the slide effect with a fade. Add a second section and make sure each button controls only its own section. Test rapid clicking and explain why stopping the current animation prevents a delayed queue of surprises.

---

## More Background

- [jQuery effects](https://api.jquery.com/category/effects/)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---
