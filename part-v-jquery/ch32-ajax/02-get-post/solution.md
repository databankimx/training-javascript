# Solution

```javascript
function show(label, method) {
  $("#output").text(`${method} request completed for ${label}.`);
  console.log(method, label);
}

$("#get").on("click", function () { show("status", "GET"); });
$("#post").on("click", function () { show("comment", "POST"); });
```

The lesson keeps the response local, but the labels preserve the distinction between asking for status and sending a comment.

---
