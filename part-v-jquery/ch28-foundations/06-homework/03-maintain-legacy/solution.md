# Solution

```javascript
$("#choices li").on("click", function () {
  $("#choices li").removeClass("selected");
  $(this).addClass("selected");
  $("#status").text(`Selected: ${$(this).data("name")}`);
});

console.log(`Matched ${$("#choices li").length} items`);
console.log("jQuery loaded before main.js");
```

The handler uses `$(this)` to wrap the item that was actually clicked. `.data("name")` reads the `data-name` attribute, so adding another choice does not require a new conditional. Removing the class from the whole collection and adding it to the clicked item keeps the page's selection state consistent.

```text
Matched 3 items
jQuery loaded before main.js
Selected: Shipping
```

---
