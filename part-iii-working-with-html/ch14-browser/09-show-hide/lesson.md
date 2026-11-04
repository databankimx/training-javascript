# Show, hide, and update the page

A page becomes useful when it can respond without making the user reload it. We can hide details until they are needed, reveal them on demand, and update a message as the page changes. Those small interactions are the basic machinery behind accordions, conditional fields, status banners, and the buttons people expect to do something.

The HTML gives JavaScript three controls to work with:

```html
<main>
  <h1>Show and hide details</h1>
  <p id="status">Details are hidden.</p>
  <button id="toggle-details" type="button">Show details</button>
  <button id="ready" type="button">Set ready message</button>
  <section id="details" hidden>
    <h2>A little more context</h2>
    <p>The script updates this section without reloading the page.</p>
  </section>
</main>
```

The `hidden` attribute gives the page a sensible starting state. JavaScript changes that property when the first button is clicked, while the second button updates only the status paragraph.

```javascript
const toggle = document.querySelector("#toggle-details");
const details = document.querySelector("#details");
const status = document.querySelector("#status");
const ready = document.querySelector("#ready");

toggle.addEventListener("click", () => {
  details.hidden = !details.hidden;
  toggle.textContent = details.hidden ? "Show details" : "Hide details";
  status.textContent = details.hidden
    ? "Details are hidden."
    : "Details are visible.";
});

ready.addEventListener("click", () => {
  status.textContent = "Ready for the next lesson.";
});
```

```text
The page starts with the details hidden.
Clicking Show details reveals them and changes the button to Hide details.
Clicking again hides them and changes the status message.
```

> The `hidden` property tells the browser whether an element should be displayed.
>
> `textContent` changes the text inside an element. It treats the value as text, not as HTML markup.
>
> A conditional expression chooses one of two values: `condition ? valueIfTrue : valueIfFalse`. We will use longer conditional statements later, but this compact form is handy for a small choice.

The JavaScript changes the page in three small ways. It flips `details.hidden`, changes the button label, and writes a matching status message. The second button demonstrates that a page can have an independent update as well. Keeping those updates together prevents the interface from saying one thing while showing another. Computers are quite literal about that sort of mismatch, and users notice it immediately.

---

## Try it Yourself

Add a third button that changes the status message to `Nothing to see here.` without changing the details. Use `textContent`, and bind the button in `main.js` rather than adding an inline `onclick` attribute.

---

## More background

See [MDN: HTMLElement.hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) and [MDN: Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).

---
