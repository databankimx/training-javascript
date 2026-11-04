# Reading form-control properties

Form controls are ordinary DOM elements with a few properties that describe what the user has entered or selected. A text input exposes its current `value`. A checkbox exposes a boolean `checked` state. A button can be disabled by setting its `disabled` property. These are not mysterious form-only spells. They are values on elements, and JavaScript can read or change them.

```javascript
const email = document.querySelector("#email");
const updates = document.querySelector("#updates");
const status = document.querySelector("#status");

document.querySelector("#inspect").addEventListener("click", () => {
  status.textContent = `Email: ${email.value}; updates: ${updates.checked ? "on" : "off"}.`;
});
```

```text
Email: ada@example.com
Receive updates: on
Contact method: email
Time zone: central
```

Here is a brief explanation of the properties used. The output puts each value on its own line because a wall of semicolon-separated facts is technically compact and spiritually unhelpful.

| Property | Control | What it tells us |
| --- | --- | --- |
| `value` | Text, email, number, and other value controls | The current text or value |
| `checked` | Checkbox or radio button | `true` when selected, otherwise `false` |
| `disabled` | Most form controls | Whether the user can interact with it |
| `selected` | An individual option | Whether that option is selected |

Radio buttons are usually read by selecting the checked member of the group. A select list exposes its current option through `value`, just like a text input. Buttons expose behavior through events, and their `disabled` property controls whether the user can use them.

> `value` is usually a string, even when the control is `type="number"`. Convert it deliberately before doing arithmetic.
>
> `checked` is a boolean. Do not compare it to the string `"true"`.

---

## Try it Yourself

Inspect the radio selection and time zone in the status message. Add a button that toggles whether the email input is disabled. Change the button label to `Enable email` or `Disable email` so the action is clear before it is clicked. Then add a second checkbox and report both states.

---

## More background

See [MDN: HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) and [MDN: HTMLButtonElement.disabled](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/disabled).

---
