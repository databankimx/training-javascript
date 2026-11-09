## Solution

```html
<input id="answer" type="text" inputmode="numeric" autocomplete="off"
       aria-describedby="hint">

<p id="feedback" aria-live="polite"></p>
```

```javascript
form.addEventListener("submit", event => {
    event.preventDefault();
    if (Number(answer.value.trim()) === EXPECTED) {
        feedback.textContent = "Correct. Thank you.";
    } else {
        feedback.textContent = "That answer is not right. Try again.";
    }
});
```

```text
Your answer, Type the answer as digits only.
```

`aria-describedby` points at the hint's `id`, so the description is read with the field. Nothing in the script needs to change for this, because the relationship lives in the markup.

`aria-live="polite"` tells assistive technology to announce changes to the paragraph's text once the user is idle. The message is spoken without the focus moving. This is the part that people get wrong. Setting focus to the feedback paragraph would announce the message, but it would also pull the visitor away from the field they need to fix, which is harder for everyone, not only screen reader users.

`polite` waits for a pause. `assertive` interrupts whatever is being read. Use `assertive` only for something urgent, and a wrong answer is not urgent.

The JavaScript did not need to change. The script still sets `textContent`, and the live region announces the change. Accessibility is often a matter of the markup doing its job, with the script getting out of the way.

---
