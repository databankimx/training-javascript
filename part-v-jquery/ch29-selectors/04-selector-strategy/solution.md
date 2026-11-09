# Solution

```javascript
const accountSave = $("#account-panel .save");
const allSaveButtons = $("button.save");

accountSave.addClass("preferred");
$("#output").text(`Account buttons: ${accountSave.length}; all save buttons: ${allSaveButtons.length}`);
console.log("Prefer a selector that states the relationship you actually need.");
```

The ID-based relationship is specific to the account panel, while the class-based selector intentionally finds every save button. The distinction makes the code's scope visible.

```text
Prefer a selector that states the relationship you actually need.
```

---
