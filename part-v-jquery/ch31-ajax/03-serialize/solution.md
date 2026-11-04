# Solution

```javascript
$("#search-form").on("submit", function (event) {
  event.preventDefault();
  const query = $(this).serialize();
  $("#output").text(query);
  console.log(query);
});
```

The submit handler prevents navigation, serializes the form, and displays the exact request data. The `name` attributes determine the keys.

---
