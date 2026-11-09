# Solution

```javascript
$("#update").on("click", function () {
  $("#name").val("Grace");
  $("#region").val("West");
  $("#output").text(`Updated name: ${$("#name").val()}; Updated region: ${$("#region").val()}`);
});
```

The first two `.val(...)` calls are setters. The calls inside the template literal are getters.

---
