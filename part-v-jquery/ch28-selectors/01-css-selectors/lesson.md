# CSS selectors in jQuery

If you already know CSS selectors, you know a large part of jQuery's selection language. The `$` function accepts familiar selectors for IDs, classes, tags, descendants, and attributes. That is one reason jQuery felt so approachable when it arrived: the browser's styling vocabulary became a programming vocabulary too.

---

## Build a selector carefully

```javascript
$("#intro").addClass("chosen");
$(".note").addClass("note-mark");
$("#topics li[data-level='advanced']").addClass("advanced");
$("#output").text(`Notes: ${$("p.note").length}; advanced topics: ${$("li[data-level='advanced']").length}`);
```

| Selector | Matches |
| --- | --- |
| `$("#intro")` | The element with `id="intro"` |
| `$(".note")` | Every element with class `note` |
| `$("p.note")` | Paragraphs with class `note` |
| `$("#topics li")` | List items inside `#topics` |
| `$("li[data-level='advanced']")` | List items with that attribute value |

The selector `#topics li[data-level='advanced']` combines an ID, a descendant tag, and an attribute test. Read it from left to right: start at `#topics`, find its `li` descendants, then keep only the ones whose `data-level` is `advanced`.

```text
Notes: 2; advanced topics: 1
```

> **Selector** means a pattern that identifies one or more elements. jQuery returns a jQuery object containing the matches, even when there is only one.

---

## Try it Yourself

Add a class selector for a new paragraph. Then select only the second note with a more specific selector or with `.eq(1)`. Explain why a broad selector is convenient here but could become dangerous on a larger page.

---

## More Background

- [jQuery selectors](https://api.jquery.com/category/selectors/)
- [MDN: CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)

---
