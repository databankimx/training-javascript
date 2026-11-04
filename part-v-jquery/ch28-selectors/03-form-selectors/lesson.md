# Form selectors

Forms are where jQuery selectors become especially recognizable in older code. jQuery provides pseudo-selectors for controls and states, and attribute selectors let us target a field by its `name` without depending on a generated ID.

---

```javascript
const inputs = $(":input");
const checked = $("input:checked").length;
const selected = $("#region option:selected").text();

$("#output").text(`${inputs.length} controls; ${checked} checked choice; region: ${selected}`);
console.log($("input[name='email']").val());
```

| Selector or method | Purpose |
| --- | --- |
| `$(":input")` | Match jQuery's form-control set |
| `$("input[name='email']")` | Match an input by its `name` attribute |
| `$("input:checked")` | Match checked checkboxes or radio buttons |
| `$("option:selected")` | Match the selected option |
| `.val()` | Read or write a control's value |
| `:disabled`, `:enabled` | Match controls by enabled state |

```text
5 controls; 1 checked choice; region: West
ada@example.com
```

The `:input` selector is a jQuery extension, not a CSS selector accepted by `querySelectorAll`. That difference matters when translating code to vanilla JavaScript. Also remember that `:checked` asks about state, while `[checked]` asks whether the original HTML included the attribute.

> **Attribute versus property:** `[checked]` examines markup. `:checked` and a native element's `.checked` property examine the current state after the user interacts with the form.

---

## Try it Yourself

Add a radio-button group and report which option is checked. Disable the select list and use `:disabled` to report its state. Keep labels associated with controls, and keep the `name` values meaningful. A selector is only helpful if the markup gives it something sensible to find.

---

## More Background

- [jQuery form selectors](https://api.jquery.com/category/selectors/form-selectors/)
- [jQuery `.val()`](https://api.jquery.com/val/)

---
