# Solution

```javascript
const items = $("#items li");

items.addClass("highlighted").text(function (index, text) {
  return `${index + 1}. ${text}`;
});

$("#count").text(`jQuery matched ${items.length} list items.`);
console.log(`Matched ${items.length} elements.`);
```

The selection wraps every list item. The chained methods apply to all matches, while the callback adds a different number to each item.

```text
Matched 3 elements.
```

---
