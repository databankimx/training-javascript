# Serialized dynamic rows

The better plain-JavaScript strategy is to let OnBase merge one hidden field that contains the row data, then rebuild the visible table from that data at load time. The field exists before rendering, so the platform can populate it. The visible `OBKey__...` fields are created afterward for the browser and are present when the form is submitted.

```javascript
const lines = JSON.parse(dataField.value || "[]");

function render() {
  body.replaceChildren();
  lines.forEach(line => {
    // create the row controls from the saved object
  });
}
```

```text
The hidden field contains JSON for the saved rows.
The table is rebuilt from that JSON at load time.
```

The example also writes the current rows back to `mikgData` after edits. The serialized field is the persistence bridge, while the table is the editable view.

> Serialization converts structured data into a string that can be stored or transported.
>
> `JSON.stringify()` writes JavaScript data as JSON. `JSON.parse()` reads it back.

---

## Try it Yourself

Add invoice and approval fields from the reference form. Save the current rows before the real submit button is clicked, and show a debug panel with the JSON so you can see exactly what would be merged on the next retrieval.

---

## More background

The reference example is `061-coding-form-dynamic-rows.html`. Its hidden field is named `mikgData`; this lesson keeps that name so the OnBase strategy is recognizable.

---
