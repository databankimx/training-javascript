# Inline events versus event binding

HTML lets us attach behavior directly to an element with attributes such as `onclick`, `onfocus`, `onblur`, and `onchange`:

```html
<button type="button" onclick="showMessage('inline click')">Click</button>
<input aria-label="Inline focus example"
       onfocus="showMessage('inline focus')"
       onblur="showMessage('inline blur')">
<select aria-label="Inline change example"
        onchange="showMessage('inline change')">
  <option>Choose one</option>
</select>
```

```javascript
function showMessage(text) {
  document.querySelector("#message").textContent = text;
}
```

```text
Interacting with a control updates the message.
```

Inline handlers work, which is why they keep appearing in old forms. They also mix two languages in one attribute, scatter behavior through the markup, make reuse awkward, and complicate testing. They should be recognized, not copied into new code.

The preferred pattern keeps the HTML descriptive and binds events in a script loaded with the page:

```html
<button id="bound-button" type="button">Click</button>
<input id="bound-input" aria-label="Bound focus example">
<select id="bound-select" aria-label="Bound change example">
  <option>Choose one</option>
</select>
```

```javascript
document.querySelector("#bound-button").addEventListener("click", () => {
  showMessage("bound click");
});

document.querySelector("#bound-input").addEventListener("focus", () => showMessage("bound focus"));
document.querySelector("#bound-input").addEventListener("blur", () => showMessage("bound blur"));
document.querySelector("#bound-select").addEventListener("change", () => showMessage("bound change"));
```

> `onclick`, `onfocus`, `onblur`, and `onchange` are inline event-handler attributes.
>
> `addEventListener()` binds a JavaScript function to an event without putting executable code in the HTML.

---

## Try it Yourself

Use both halves of the page. Add an inline `onchange` handler, then add the equivalent JavaScript listener. Move the behavior from the inline version into `main.js` and remove the attribute. The page should behave the same while the responsibilities are easier to find.

---

## More background

See [MDN: inline event handlers](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers), [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), and [MDN: focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).

---
