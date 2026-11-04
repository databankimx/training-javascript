# Choosing selectors well

The most powerful selector is not automatically the best selector. A selector should identify the relationship your code actually depends on, remain readable to the next person, and survive ordinary markup changes.

---

```javascript
const accountSave = $("#account-panel .save");
const allSaveButtons = $("button.save");

accountSave.addClass("preferred");
$("#output").text(`Account buttons: ${accountSave.length}; all save buttons: ${allSaveButtons.length}`);
```

The first selector says “the save button inside the account panel.” The second says “every button with the save class.” Neither is universally right. The correct choice depends on whether the operation belongs to one panel or every matching button.

```text
Account buttons: 1; all save buttons: 2
```

Prefer a stable ID or a meaningful class over a fragile chain such as `body > main > section:nth-child(1) > button`. The fragile chain describes today's layout, not the element's role. We will also avoid selecting by presentation-only classes when a semantic class or `data-*` attribute can state the intent more clearly.

> **Practical rule:** Start with the narrowest selector that clearly expresses the job. If it becomes hard to read, split the operation into selection, traversal, and filtering steps.

---

## Try it Yourself

Add a third panel with a save button. Decide which existing selector should find all three and which selector should find only the account button. Then change the order of the panels and confirm that the ID-based selector still finds the right button.

---

## More Background

- [jQuery performance notes](https://learn.jquery.com/performance/)
- [MDN: Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

---
