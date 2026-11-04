# Attributes and properties

An HTML attribute belongs to the markup. A DOM property belongs to the live object the browser created from that markup. They often start with the same value, which is why the distinction can hide until a user changes a control.

---

```javascript
$("#updates").prop("checked", !$("#updates").prop("checked"));
$("#output").text(`attr checked: ${$("#updates").attr("checked")}; prop checked: ${$("#updates").prop("checked")}`);
```

| Operation | Reads or changes |
| --- | --- |
| `.attr("checked")` | The original `checked` attribute in the HTML |
| `.prop("checked")` | The checkbox's current live state |
| `.attr("value")` | The original value attribute |
| `.val()` | The current form value |

Here are some other properties you will meet regularly:

| jQuery property | Native DOM property | What it tells you |
| --- | --- | --- |
| `.prop("id")` | `element.id` | The element's current ID |
| `.prop("className")` | `element.className` | The current class string |
| `.prop("title")` | `element.title` | The current tooltip text |
| `.prop("value")` | `element.value` | The live value of a control |
| `.prop("checked")` | `element.checked` | Whether a checkbox or radio button is currently selected |
| `.prop("disabled")` | `element.disabled` | Whether a control is currently disabled |

These properties are not exotic jQuery inventions. jQuery is giving us a consistent wrapper around the browser's DOM objects. The native form is useful when you are translating older code to modern JavaScript.

Click the button. The property changes as the checkbox changes. The original attribute may remain present because the markup has not been rewritten.

```text
attr checked: checked; prop checked: false; id: heading; title: A live DOM property
```

> **Use `.attr()` for markup attributes and `.prop()` for live DOM properties.** For checked state, selected state, disabled state, and similar booleans, `.prop()` is usually the method you want.

---

## Try it Yourself

Add a disabled button. Use `.attr("disabled")` and `.prop("disabled")` to inspect it, then enable it with `.prop("disabled", false)`. Explain why changing the property changes what the user can do immediately.

---

## More Background

- [jQuery `.attr()`](https://api.jquery.com/attr/)
- [jQuery `.prop()`](https://api.jquery.com/prop/)

---
