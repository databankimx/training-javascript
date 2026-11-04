# Vanilla JavaScript crosswalk

You do not need to choose a side in a ceremonial duel between vanilla JavaScript and jQuery. You need to understand what the code in front of you is doing. The following table translates a few common operations.

---

| Task | Vanilla JavaScript | jQuery |
| --- | --- | --- |
| Select by ID | `document.querySelector("#status")` | `$("#status")` |
| Change text | `element.textContent = "Done"` | `$(selector).text("Done")` |
| Bind an event | `element.addEventListener("click", handler)` | `$(selector).on("click", handler)` |
| Add a class | `element.classList.add("active")` | `$(selector).addClass("active")` |

```javascript
document.querySelector("#vanilla").addEventListener("click", () => {
  status.textContent = "The native event listener ran.";
});

$("#jquery").on("click", () => {
  $("#status").text("The jQuery event handler ran.");
});
```

The two buttons perform the same kind of task. The syntax differs, but the browser still receives an event and the page still receives a new piece of text.

```text
The native event listener ran.
The jQuery event handler ran.
```

> **Crosswalk** is a translation guide. It is useful when you are moving between a newer native API and an older library style, not because one side is automatically virtuous.

---

## Try it Yourself

Add a third button that toggles a class. Implement it once with native `classList` and once with jQuery `.toggleClass(...)`, or add two buttons if you want the comparison to remain obvious. Explain which object each version is operating on.

---

## More Background

- [jQuery `.on()`](https://api.jquery.com/on/)
- [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

---
