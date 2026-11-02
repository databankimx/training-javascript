# Events and event handlers

The browser waits for events such as clicks, input, focus, blur, and submission. An event listener connects an event to a function that should run when it happens. The page is not just a picture. It is waiting for the next thing the user does.

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

Forms use more than clicks. Common events include:

```javascript
input.addEventListener("focus", () => console.log("Editing started"));
input.addEventListener("blur", () => console.log("Editing ended"));
input.addEventListener("input", event => console.log(event.target.value));
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("Form handled by JavaScript");
});
```

Inline `onclick="..."` attributes can demonstrate the idea, but convert them to `addEventListener` bindings in a script loaded from the head. Keeping behavior out of the HTML makes the page easier to maintain and test.

The callback closes over `value`, so each click can update the same running count.

---

## Try it Yourself

Add a Reset button. Register a second listener that sets the count back to zero.

---

## More background

See [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

---
