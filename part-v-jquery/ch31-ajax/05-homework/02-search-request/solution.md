# Solution

```javascript
$("#search").on("submit", function (event) {
  event.preventDefault();
  $("#output").text($(this).serialize());
});
```

The form's named controls become the encoded request string. Preventing the default submit keeps the exercise on the current page.

---
