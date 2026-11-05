# Homework: maintain a legacy jQuery page

This is the maintenance assignment. The page already has a short jQuery script that binds a click handler to every shipping choice. Read it before changing anything.

The handler should remove the old selection, add the `selected` class to the clicked item, and update the status paragraph with the clicked item's `data-name` value. The script should also log how many choices it matched and confirm that jQuery loaded before `main.js`.

```javascript
$("#choices li").on("click", function () {
  // Maintain the selected class and status text here.
});
```

```text
Matched 3 items
jQuery loaded before main.js
Selected: Shipping
```

## Try it Yourself

Add a fourth choice and make sure the count changes automatically. Then change the status text so it includes a short explanation of why the selected item is active. Do not hard-code the item name in the handler. A maintenance change that only works for the original three rows is not much of a maintenance change.

The spoiler contains a complete implementation.

---
