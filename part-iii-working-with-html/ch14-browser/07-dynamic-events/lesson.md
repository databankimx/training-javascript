# Dynamically binding events

Sometimes the element that needs an event handler does not exist when the page loads. A list item may be created after a user clicks Add, or a form row may be added later. In the previous lesson, we created notices without giving each notice its own handler. Here, we will use a list example to show what happens when those future elements need behavior too. We have two choices.

The direct approach binds the new element immediately after creating it:

```javascript
const item = document.createElement("li");
item.textContent = text;
item.addEventListener("click", () => {
  status.textContent = `Selected: ${item.textContent}`;
});
items.append(item);
```

That works, but it means every item receives its own listener. A parent can listen once and handle clicks that bubble up from future children:

```javascript
items.addEventListener("click", event => {
  if (event.target.matches("li")) {
    status.textContent = `Selected: ${event.target.textContent}`;
  }
});
```

```text
Add an item, then click it. The parent list handles the click.
```

> **Event delegation** means binding one handler to a parent and using the bubbling event to identify which child was used.
>
> **Oversubscription** happens when code binds the same handler repeatedly, causing one click to run the work two, three, or twenty times.

The oversubscription trap often appears when an initialization function runs after every refresh:

```javascript
function wireButtons() {
  document.querySelector("#add").addEventListener("click", addItem);
}
```

If `wireButtons()` runs three times, the button has three listeners. One click adds three items. Bind once, delegate from a stable parent, or remove the old listener before adding a replacement.

---

## Try it Yourself

Add several items and click each one. Then temporarily call the binding code twice and observe the duplicate behavior. Restore the delegated version and explain why it handles items created later.

---

## More background

See [MDN: event bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling), [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), and [MDN: Element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches).

---
