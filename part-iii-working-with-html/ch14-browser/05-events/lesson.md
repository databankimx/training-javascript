# Events and event handlers

An HTML page may look still, but the browser is paying attention. It notices clicks, keystrokes, focus changes, form submissions, mouse movement, and a small army of other happenings. Those happenings are **events**. JavaScript can listen for an event and run a function when it occurs.

An event listener is simply the connection between “this happened” and “run this code.” It is the difference between a button that merely sits there looking optimistic and a button that actually does something.

The HTML supplies a button and an element where the result can be displayed:

```html
<main>
  <button id="add" type="button">Add</button>
  <output id="count">0</output>
</main>
```

`type="button"` matters when a button lives inside a form. It prevents this particular control from submitting the form while we are learning about click events.

```javascript
const button = document.querySelector("#add");
const count = document.querySelector("#count");
let value = 0;

button.addEventListener("click", () => {
  value += 1;
  count.textContent = value;
});
```

```text
Clicking Add changes the visible count from 0 to 1, then 2, and so on.
```

> `addEventListener` registers a callback for a named browser event.
>
> The event callback runs later, when the user performs the action.

Here is a tour of the events you are most likely to meet in browser forms and interactive pages:

| Event | Usually fires when... | Common use |
| --- | --- | --- |
| `click` | A user activates a button, link, or other clickable element | Run a command or toggle a display |
| `dblclick` | A user clicks twice quickly | Specialized desktop-style actions; use sparingly |
| `focus` | A control becomes the active field | Show help or prepare a field for editing |
| `blur` | A control loses focus | Check or format a value after editing |
| `input` | The value of a text control changes | Live search, character counts, and immediate feedback |
| `change` | A control's committed value changes | React to a select, checkbox, radio button, or completed text edit |
| `keydown` | A key is pressed down | Keyboard shortcuts or detecting navigation keys |
| `keyup` | A pressed key is released | Read the value after a keystroke |
| `submit` | A form is submitted | Validate the form or send it to a server |
| `reset` | A form is reset | Clear related messages or restore calculated values |
| `mouseover` | The pointer enters an element | Hover effects; CSS is often better for these |
| `mousemove` | The pointer moves over an element | Drawing, dragging, or idle timers |
| `load` | A document or resource finishes loading | Start work that depends on the whole page or resource |

Events are not interchangeable. `input` can fire on every character while someone types. `change` generally waits until the value is committed. `focus` tells us that editing began; `blur` tells us that editing ended. Choosing the right event is part of solving the problem, not a decorative detail.

Here are a few common form bindings:

```javascript
input.addEventListener("focus", () => console.log("Editing started"));
input.addEventListener("blur", () => console.log("Editing ended"));
input.addEventListener("input", event => console.log(event.target.value));
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("Form handled by JavaScript");
});
```

The callback closes over `value`, so each click can update the same running count.

---

## Try it Yourself

Add a Reset button and bind its `click` event. Then add a text input and bind `input`, `focus`, and `blur` listeners that report what is happening. Type slowly and watch which events fire. Finally, add a small form and bind `submit`; use `event.preventDefault()` so the page does not navigate away while you are experimenting.

---

## More background

See [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

---
