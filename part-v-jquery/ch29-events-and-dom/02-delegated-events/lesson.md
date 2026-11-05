# Delegated events

Directly binding a handler to every current item is easy. It becomes awkward when the page creates new items later. Event delegation solves that by binding once to a stable parent and asking jQuery to handle events that bubble from matching descendants.

---

```javascript
$("#items").on("click", ".remove", function () {
  $(this).closest("li").remove();
});

$("#items").append(`<li><button class="remove" type="button">Remove a new item</button></li>`);
```

The handler belongs to `#items`, but the selector argument says it should respond only when the event came from a `.remove` button. The newly appended button works immediately because the parent handler was already listening.

```text
Removed an item.
```

> **Event delegation** uses event bubbling. A parent handles events from matching current or future descendants, so we do not need to bind a new handler every time we add an element.

---

## Try it Yourself

Add several items, then remove any of them. Add a button that marks an item complete without removing it. Keep one delegated handler on the list rather than binding a new handler inside every add operation.

---

## More Background

- [jQuery delegated events](https://learn.jquery.com/events/event-delegation/)
- [MDN: Event bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling)

---
