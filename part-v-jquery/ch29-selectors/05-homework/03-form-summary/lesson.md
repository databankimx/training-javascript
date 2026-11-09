# Homework: form-state summary

Build a summary from the live form state. Count checked checkboxes with `:checked`, read the selected option with `:selected`, and display both values. Do not count the original HTML attributes by hand. The user is allowed to change the controls.

```javascript
const checked = $("input:checked").length;
const region = $("#region option:selected").text();
```

```text
Checked: 1
Region: Central
```

## Try it Yourself

Add a radio group for delivery speed. Report the selected speed and test the page after changing it. Then disable one control and report how many controls match `:disabled`.

The spoiler contains a complete solution.

---
