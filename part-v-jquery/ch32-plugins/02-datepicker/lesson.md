# jQuery UI date picker

Before we use the date picker, we need to talk about jQuery UI. jQuery itself is a general-purpose library for selecting elements, handling events, and changing the DOM. jQuery UI is a companion library that adds reusable interactions and widgets such as date pickers, dialogs, accordions, tabs, sliders, and sortable lists.

Date entry is a classic reason teams reach for a plugin. A plain text field asks users to remember a format, while a date picker can offer a calendar, constrain choices, and write a consistent value. It is a useful example because many older forms use exactly this pattern, including forms maintained in systems with limited browser support.

Using jQuery UI requires three things in the correct order:

1. jQuery itself
2. The jQuery UI JavaScript file
3. A jQuery UI theme stylesheet

The lesson's HTML loads all three before `main.js`.

---

```javascript
$("#date").datepicker({
  dateFormat: "yy-mm-dd",
  onSelect: function (dateText) {
    $("#output").text(`Selected: ${dateText}`);
  }
});
```

The CSS theme and jQuery UI script are loaded after jQuery. The initialization call turns the input into a widget and passes an options object. `onSelect` is a callback supplied by the plugin, not a browser event name we invented.

```text
Selected: 2026-11-04
```

> **Plugin configuration** is usually an object containing options and callbacks. Read the widget documentation rather than guessing option names. Guessing is how a perfectly innocent date field becomes inexplicably fuzzy.

For real forms, validate the resulting date again on the server. A calendar improves entry; it does not turn the browser into a trusted business system.

---

## Try it Yourself

Set a minimum date and a maximum date. Change the format and explain why the value written to the form should match what the receiving service expects.

---

## More Background

- [jQuery UI Datepicker](https://api.jqueryui.com/datepicker/)
- [jQuery UI download builder](https://jqueryui.com/download/)

---
