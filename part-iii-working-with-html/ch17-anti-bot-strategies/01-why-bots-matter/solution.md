## Solution

```javascript
form.addEventListener("submit", event => {
    event.preventDefault();
    // ...the same handler serves both the button and the bot
});

botButton.addEventListener("click", () => {
    comment.value = "Cheap watches, click here";
    form.requestSubmit();
});
```

```text
Saved 1 comment(s).
```

Both paths end in the same `submit` event. The bot button sets the field and calls `requestSubmit()`, which fires that event just as a click on Submit would. The handler has no way to know whether a person typed the text, so it cannot make that distinction.

This is the core problem. Anything the browser can do, a script can do, and a script can also skip the browser entirely and send the request directly. A check written in the page is a convenience for honest visitors, not a barrier for dishonest ones.

`requestSubmit()` is the modern form of this call. Older code often calls `form.submit()`, which sends the form without firing a `submit` event, so a handler that calls `preventDefault()` never sees it. Knowing which one a codebase uses explains a surprising number of "my validation doesn't run" bugs.

---
