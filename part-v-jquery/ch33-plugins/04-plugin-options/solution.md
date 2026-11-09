# Solution

```javascript
$("#start").on("click", function () {
  $("#bar").progressbar({ value: 65 });
  $("#output").text("Widget initialized at 65%.");
});
$("#stop").on("click", function () {
  if ($("#bar").hasClass("ui-progressbar")) $("#bar").progressbar("destroy");
  $("#output").text("Widget destroyed; original element remains.");
});
```

The guard prevents a destroy call before initialization, and the plugin's `destroy` command cleans up the widget instance.

---
