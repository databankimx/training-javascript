# Submit-time validation choices

The usual pattern is to listen for the form's `submit` event, call `preventDefault()`, validate the fields, and continue only when the input is acceptable. That is the clearest approach for ordinary HTML forms.

Some hosted form systems give us a different shape. We may need to hide the real submit button, run our own validation from a separate button, and click the real submit button only after validation succeeds. The real submit still owns the final submission behavior; our validation button acts as the gatekeeper. We will use this as a specific pattern, not as a replacement for the ordinary submit event everywhere.

```javascript
const form = document.querySelector("#access-form");
const requester = document.querySelector("#requester");
const message = document.querySelector("#message");
const realSubmit = document.querySelector("#real-submit");

form.addEventListener("submit", event => {
  event.preventDefault();
  message.textContent = `Submitted for ${requester.value.trim()}.`;
});

document.querySelector("#check").addEventListener("click", () => {
  const name = requester.value.trim();
  if (!name) {
    message.textContent = "Enter your name before submitting.";
    requester.focus();
    return;
  }

  message.textContent = "Validation passed. Submitting...";
  realSubmit.click();
});
```

```text
Blank input: Enter your name before submitting.
Valid input: Submitted for Ada.
```

> In an OnBase e-form, the platform may own the real submit control and its submission workflow. In that situation, a separate validation button can run our checks and programmatically click the hidden real submit button only when those checks pass. The exact hook depends on the form configuration, so treat this as a pattern to adapt, not a magic incantation.
>
> `click()` dispatches the button's click behavior. It does not replace validation. We still have to perform the checks before calling it.

---

## Try it Yourself

Add an email field and reject a value that has no `@`. Keep the real submit button hidden. Test blank, malformed, and valid input, and make sure only the valid case reaches the submit handler.

---

## More background

See [MDN: `submit` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event), [MDN: `preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault), and [MDN: `HTMLElement.click()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click).

---
