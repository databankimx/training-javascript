# Solution

```javascript
$("#topics").accordion({ heightStyle: "content", collapsible: true });
$("#dialog").dialog({ autoOpen: false, modal: true, buttons: { Close: function () { $(this).dialog("close"); } } });
$("#open").on("click", function () { $("#dialog").dialog("open"); });
```

The accordion organizes the help content. The dialog is initialized once and opened by the application button.

---
