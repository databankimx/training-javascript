# jQuery objects

The `$` function does more than find one element. It can wrap a collection of matching elements in a jQuery object. Once we have that object, many jQuery methods apply to every match automatically. That behavior is called implicit iteration, and it is one of the reasons old jQuery code can look compact while still doing several jobs.

---

## One selection, several elements

```javascript
const items = $("#items li");

items.addClass("highlighted").text(function (index, text) {
  return `${index + 1}. ${text}`;
});

$("#count").text(`jQuery matched ${items.length} list items.`);
```

The selector matches all three `li` elements. `.addClass(...)` applies to each one. `.text(function...)` also runs once per match, giving us the zero-based `index` and the old text so we can return a new label. Finally, `.length` tells us how many elements were wrapped.

| Expression | Meaning |
| --- | --- |
| `$("#items li")` | Wrap every matching list item |
| `items.length` | Count the wrapped elements |
| `items[0]` | Get the first native DOM element |
| `items.get(0)` | Get the first native DOM element explicitly |
| `items.eq(1)` | Create a jQuery object for the second match |

```text
1. First item
2. Second item
3. Third item
jQuery matched 3 list items.
```

> **Implicit iteration** means a jQuery method operates on every element in the current jQuery object unless you deliberately narrow the selection.

Chaining works because methods such as `.addClass(...)` return the jQuery object again. It is convenient, but do not chain so much that the next person needs a map and a snack to understand it.

---

## Try it Yourself

Add a fourth list item. Change the class and the numbering so the page still reports the correct count. Then use `.eq(0)` to change only the first item and explain why the other three are untouched.

---

## More Background

- [jQuery object documentation](https://api.jquery.com/Types/%23jQuery/)
- [jQuery `.each()`](https://api.jquery.com/each/)

---
