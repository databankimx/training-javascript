# Plugin options and cleanup

Plugins usually expose more than one call. You initialize a widget with options, interact with it using a method, and sometimes destroy it when the element no longer needs the widget.

---

```javascript
$("#bar").progressbar({ value: 65 });
$("#bar").progressbar("destroy");
```

The first call initializes the widget. The second calls a plugin command and removes the widget's generated behavior and markup. The original target element remains available.

```text
Widget initialized at 65%.
Widget destroyed; original element remains.
```

> **Destroy** is not the same as hiding. Hiding leaves a widget initialized. Destroying removes the plugin instance so handlers and generated elements do not linger.

---

## Try it Yourself

Initialize the progress bar twice and inspect the result. Add a guard so repeated initialization does not create duplicate widgets. Then destroy it and start it again.

---

## More Background

- [jQuery UI Widget Factory](https://api.jqueryui.com/jQuery.widget/)
- [jQuery UI Progressbar](https://api.jqueryui.com/progressbar/)

---
