# Persistent XSS: comments form (textContent fix)

The previous lesson showed the older `sanitize()` pattern. It is useful to recognize, but it still relies on an HTML sink and on our escaping function being complete. When the feature only needs to display text, the newer pattern is simpler: create the element ourselves and assign the user value with `textContent`.

```javascript
function render() {
    const nodes = stored.map(comment => {
        const paragraph = document.createElement("p");
        paragraph.className = "comment";
        paragraph.textContent = comment;
        return paragraph;
    });

    comments.replaceChildren(...nodes);
}
```

```text
<strong>Important</strong>
```

> `createElement()` creates an element under our control.
>
> `textContent` inserts characters as text, so `<strong>` remains visible rather than becoming a tag.
>
> `replaceChildren()` replaces the output area with the nodes we deliberately created.

This is the methodology change: the older code asks, “How do I make this HTML sink safe?” The newer code asks, “Do I need an HTML sink at all?” If the answer is no, `textContent` removes an entire class of mistakes.

The jQuery equivalent is `.text(value)` rather than `.html(value)`. You will see both in older forms, so learn to recognize the distinction even when you are writing vanilla JavaScript.

---

## Try it Yourself

Save `<strong>Important</strong>` and reload the page. The newer version displays the characters literally. Then save this JavaScript comment:

```html
<script>alert("I injected JavaScript!");</script>
```

Reload the page. The script should appear as ordinary text and no alert should run. Compare this with the sanitized version, then explain why this version does not need a `sanitize()` function. Clear the comments when you are finished.

---

## More background

See [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), [MDN: Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), and [MDN: Node.replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren).

---
