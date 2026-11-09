# Traversal and filtering

Sometimes the selector that starts a task is broad on purpose. We select a container, move to its children, filter the collection, and then move back to a useful parent or descendant. jQuery calls these operations traversal methods because we are walking through the DOM rather than writing one enormous selector.

---

```javascript
const orders = $("#orders");
const shipped = orders.children("li").filter(".shipped");
const panelTitle = orders.closest(".panel").find("h2").text();

shipped.addClass("highlight");
```

| Method | Purpose |
| --- | --- |
| `.children("li")` | Get direct child list items |
| `.filter(".shipped")` | Keep only matches with that class |
| `.first()` | Keep the first match |
| `.eq(1)` | Keep the match at index 1 |
| `.closest(".panel")` | Walk upward to the nearest matching ancestor |
| `.find("h2")` | Search descendants of the current selection |
| `.not(".archived")` | Exclude matching elements |

`children()` is deliberately different from `find()`. `children()` looks one level down. `find()` can search deeper descendants. That distinction prevents a selector from wandering into a nested list that was not part of the current task.

```text
Open orders: 2 shipped orders
First order: Order 1001
```

> **Traversal** means moving from one DOM selection to related elements. **Filtering** means narrowing a selection without starting over from the document.

---

## Try it Yourself

Add a cancelled order inside the list. Use `.not(".cancelled")` and `.filter(...)` to report the number of active orders. Then use `.closest(...)` to find the panel containing the list.

---

## More Background

- [jQuery traversal](https://api.jquery.com/category/traversing/)
- [jQuery `.closest()`](https://api.jquery.com/closest/)

---
