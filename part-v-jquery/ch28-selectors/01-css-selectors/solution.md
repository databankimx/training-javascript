# Solution

```javascript
$("#intro").addClass("chosen");
$(".note").addClass("note-mark");
$("#topics li[data-level='advanced']").addClass("advanced");
$("#output").text(`Notes: ${$("p.note").length}; advanced topics: ${$("li[data-level='advanced']").length}`);
console.log("CSS selectors can be combined in jQuery.");
```

The code uses ID, class, descendant, and attribute selectors. The final selector is deliberately specific so it does not accidentally style an unrelated advanced element elsewhere on the page.

```text
CSS selectors can be combined in jQuery.
```

---
