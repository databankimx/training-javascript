# Changing CSS classes

JavaScript should usually change the page's state, while CSS decides what that state looks like. That division keeps the script from becoming a pile of inline colors and margins. Instead of setting five style properties by hand, we add or remove one class and let the stylesheet do its job.

```javascript
const message = document.querySelector("#message");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  const highlighted = message.classList.toggle("highlighted");
  toggle.textContent = highlighted ? "Remove highlight" : "Highlight message";
});
```

`classList.toggle()` adds the class when it is absent and removes it when it is present. It also returns a boolean, so the script can update both the button label and the status text to match the current state. The page should not merely look highlighted while its words claim otherwise. That sort of disagreement is how interfaces acquire an inexplicably fuzzy reputation.

```text
Initial state: A quiet message
After one click: the heading says “A highlighted message,” and the status agrees
After a second click: the heading says “A plain message,” and the status agrees
```

> `classList.add()` applies a class.
>
> `classList.remove()` removes a class.
>
> `classList.toggle()` switches a class on or off and reports the resulting state.

---

## Try it Yourself

Add a second button that applies a `muted` class. Then use `classList.contains()` to report whether the message is currently highlighted. Keep the visual rules in CSS rather than assigning `style.color` from JavaScript.

---

## More background

See [MDN: `Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and [MDN: CSS classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors).

---
