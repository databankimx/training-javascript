# Solution

```javascript
$("#inspect").on("click", function () {
  $("#output").text(`jQuery ${$.fn.jquery} is loaded; plugins extend $.fn.`);
  console.log(typeof $.fn.jquery, typeof $.fn);
});
```

The example inspects the loaded library without requiring an external widget. A real plugin would add another method to the same jQuery object API.

---
