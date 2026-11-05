# Events and handlers

Selectors find the element. Event handlers decide what should happen when a user interacts with it. jQuery's `.on(...)` method binds a handler, and `.off(...)` removes one. The handler receives a jQuery event object with useful information about what happened.

---

```javascript
function report(event) {
  $("#status").text(`Handled ${event.type} on ${event.currentTarget.id}.`);
  console.log(event.type, event.currentTarget.id);
}

$("#save").on("click", report);
$("#save").off("click", report);
```

The function is named so that the same function reference can be passed to `.off(...)`. If we wrote an anonymous function directly in both places, the two function objects would not be the same and removal would fail.

| Event | Typical use |
| --- | --- |
| `click` | Buttons and links |
| `change` | Select lists, checkboxes, and committed input changes |
| `input` | React immediately as text changes |
| `focus` / `blur` | Entering or leaving a control |
| `submit` | Form submission |
| `keydown` / `keyup` | Keyboard interaction |

```text
Handled click on save.
The save handler was removed.
```

> **Event handler** is a function registered to respond to an event. Keep the handler small enough to explain, and move larger operations into named functions.

---

## Try it Yourself

Add a `change` handler to a select list or an `input` handler to a text field. Then add a second save handler and remove only one named handler. Observe why careless repeated binding can make one click perform the same work twice.

---

## More Background

- [jQuery `.on()`](https://api.jquery.com/on/)
- [jQuery `.off()`](https://api.jquery.com/off/)

---
