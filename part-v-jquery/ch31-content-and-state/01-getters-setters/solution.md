# Solution

```javascript
const before = $("#note").val();
$("#note").val("Leave package at reception");
const after = $("#note").val();

$("#output").text(`Before: ${before}; After: ${after}`);
console.log("Read with no argument, changed with an argument.");
```

The first and third calls are getters. The middle call is a setter. The output paragraph uses another setter, `.text(...)`, to display the result safely.

---
