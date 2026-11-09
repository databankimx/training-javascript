# Accordion and dialog widgets

jQuery UI provides more than date pickers. Accordions can organize a long form or help page, while dialogs can present a focused confirmation or reminder. The widget does the repetitive ARIA and keyboard work, but we still need to configure it and test the result.

---

```javascript
$("#topics").accordion({ heightStyle: "content", collapsible: true });
$("#dialog").dialog({
  autoOpen: false,
  modal: true,
  buttons: { Close: function () { $(this).dialog("close"); } }
});
```

The accordion and dialog are initialized separately. `autoOpen: false` keeps the dialog hidden until the application asks it to open. The button callback closes the same dialog instance.

```text
Accordion topics are available; the reminder opens on request.
```

> **Widget lifecycle** means initialization, use, and cleanup. A widget that is created repeatedly without being destroyed can accumulate handlers and duplicate markup.

---

## Try it Yourself

Add a third accordion panel. Add an OK button to the dialog and report which button closed it. Then inspect the generated markup so you can see what the plugin added to the page.

---

## More Background

- [jQuery UI Accordion](https://api.jqueryui.com/accordion/)
- [jQuery UI Dialog](https://api.jqueryui.com/dialog/)

---
