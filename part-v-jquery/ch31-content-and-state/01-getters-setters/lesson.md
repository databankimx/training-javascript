# Getter and setter methods

One of jQuery's most recognizable patterns is that a method can be a getter or a setter. Call it without a value and it reads. Pass a value and it writes. The parentheses stay the same, which is convenient right up until it is not obvious whether a line is inspecting the page or changing it.

---

```javascript
const before = $("#note").val();
$("#note").val("Leave package at reception");
const after = $("#note").val();
```

| Method | No argument | With an argument |
| --- | --- | --- |
| `.text()` | Get text | Set text |
| `.html()` | Get HTML | Set HTML |
| `.val()` | Get a control value | Set a control value |
| `.attr("name")` | Get an attribute | `.attr("name", value)` sets it |
| `.prop("checked")` | Get a property | `.prop("checked", true)` sets it |
| `.css("color")` | Get a style value | `.css("color", "red")` sets it |

```text
Before: Call before delivery; After: Leave package at reception
```

> **Getter** reads a value from the current selection. **Setter** changes the selected elements. The same jQuery method can often do both, depending on whether you provide a new value.

This pattern is separate from action methods. `.addClass(...)`, `.remove()`, `.append(...)`, and `.on(...)` perform actions. They are not waiting for a missing argument to become getters.

---

## Try it Yourself

Use `.text()` to read a heading, then set it to a new heading. Read and set a select list with `.val()`. Add one line to the console that makes it obvious which calls read and which calls write.

---

## More Background

- [jQuery `.val()`](https://api.jquery.com/val/)
- [jQuery `.text()`](https://api.jquery.com/text/)

---
