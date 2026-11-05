# Solution

```javascript
let runs = 0;

function runCommand() {
  runs += 1;
  $("#output").text(`Command ran ${runs} time${runs === 1 ? "" : "s"}: ${$("#command").val()}`);
}

$("#run").on("click", runCommand);
$("#command").on("keydown", function (event) {
  if (event.key === "Enter") runCommand();
});
```

The same named function handles both the click and keyboard paths. The key handler checks for Enter instead of running on every keystroke.

---
