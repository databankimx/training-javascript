# Writing form-control properties

Reading a control is only half the job. Forms also need to change controls as the application state changes. We can put text into an input, check or uncheck a checkbox, disable a button, and update an attribute when the meaning of the control changes.

```javascript
email.value = "grace@example.com";
updates.checked = true;
save.disabled = false;
```

```text
Example preferences prepared.
Saved grace@example.com with updates on.
```

Here is the distinction that causes many form bugs:

| Term | What it is | How we access it |
| --- | --- | --- |
| Attribute | Markup information written on the HTML element | `getAttribute()`, `setAttribute()`, `removeAttribute()` |
| Property | The live JavaScript value on the DOM object | `input.value`, `checkbox.checked`, `button.disabled` |

The `value` attribute is the initial value in the HTML. The `value` property is the current value after the user types. Likewise, `checked` in markup describes the initial state, while the `checked` property tells us what is selected right now.

```javascript
email.setAttribute("aria-describedby", "status");
const describedBy = email.getAttribute("aria-describedby");
email.removeAttribute("aria-describedby");
```

> Use properties for live control state. Use attribute methods when you specifically need to inspect or change markup attributes.
>
> Changing `input.value` does not rewrite the original `value` attribute. That is usually exactly what we want.

---

## Try it Yourself

Add a select list and set its `value` from JavaScript. Disable the Save button until the email contains text, then enable it again when the user changes the field.

---

## More background

See [MDN: attributes versus properties](https://developer.mozilla.org/en-US/docs/Web/API/Element#instance_properties) and [MDN: `getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute).

---
