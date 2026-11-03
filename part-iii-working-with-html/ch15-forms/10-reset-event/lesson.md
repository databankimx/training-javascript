# Resetting a form

The browser can reset a form without any JavaScript at all, but the page may have related state that the browser cannot know about. A status message, an error class, or a calculated total may need to be restored too. The `reset` event gives us a place to do that cleanup.

```javascript
form.addEventListener("reset", () => {
  status.textContent = "Search settings reset.";
});
```

```text
After Reset: Search settings reset.
```

> The reset button restores the form controls to their initial HTML values.
>
> The `reset` event lets JavaScript restore related page state.

---

## Try it Yourself

Add an error class to the search field, then remove it when the form resets. Add a result count and restore it to zero as part of the reset handler.

---

## More background

See [MDN: `reset` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event) and [MDN: `<button type="reset">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

---
