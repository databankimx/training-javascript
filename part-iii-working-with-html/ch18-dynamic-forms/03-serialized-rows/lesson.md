# Serialized dynamic rows

The better plain-JavaScript strategy is to let OnBase merge one hidden field that contains the row data, then rebuild the visible table from that data at load time. The hidden field exists before rendering, so the platform can populate it. The visible `OBKey__...` fields are created afterward for the browser and are present when the form is submitted.

## Store the repeating data in one field

The hidden field can contain JSON such as this:

```json
[
  {
    "poNumber": "PO-1007",
    "glCode": "6100",
    "amount": 125.50,
    "description": "Office supplies"
  }
]
```

The field is part of the original HTML, so it is available to the retrieval process even though the table rows are not. `JSON.parse()` turns the stored string into an array of objects.

```javascript
const dataField = document.querySelector("#mikgData");
const lines = JSON.parse(dataField.value || "[]");

function render() {
  body.replaceChildren();

  lines.forEach((line, index) => {
    const row = createRow(line, index);
    body.append(row);
  });
}

render();
```

The visible table is now a projection of `lines`. We read the one field that was guaranteed to survive and deliberately create the controls from that data.

## Give generated controls stable names

The generated controls still need names. OnBase and the form-processing code use those names when values are submitted.

```javascript
function createRow(line, index) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input name="OBKey__po_${index + 1}" value="${line.poNumber}"></td>
    <td><input name="OBKey__gl_${index + 1}" value="${line.glCode}"></td>
    <td><input name="OBKey__amount_${index + 1}" value="${line.amount}"></td>
    <td><input name="OBKey__description_${index + 1}" value="${line.description}"></td>
  `;
  return row;
}
```

This snippet is intentionally compact, but it comes with a serious warning. Do not place untrusted user text into `innerHTML`. In a production form, create the inputs with `document.createElement()`, assign `.value`, and use `textContent` for displayed text. The shortened example is here to keep the naming pattern visible; the safe construction belongs to the XSS lessons.

## Save changes back to the bridge field

The hidden field is not magic. If the user edits the table, we must write the current values back before submit.

```javascript
function saveLines() {
  const current = [...body.rows].map(row => {
    const inputs = row.querySelectorAll("input");
    return {
      poNumber: inputs[0].value.trim(),
      glCode: inputs[1].value.trim(),
      amount: Number(inputs[2].value) || 0,
      description: inputs[3].value.trim()
    };
  });

  dataField.value = JSON.stringify(current);
}

form.addEventListener("submit", saveLines);
```

`JSON.stringify()` performs the reverse of `JSON.parse()`. It turns the array back into the string that the form can carry forward. In a real form, validation should run before `saveLines()`, and the hidden field should be updated only when the data is valid.

## Removing a row means rebuilding names

If the user removes row two, row three becomes row two. Re-rendering from the array gives every control a fresh, consecutive name and avoids leaving a hole in the submitted data.

```javascript
function removeLine(index) {
  lines.splice(index, 1);
  render();
  saveLines();
}
```

The serialized field is the persistence bridge, while the table is the editable view. That separation is more work than hiding pre-built rows, but it scales to a variable number of lines without filling the HTML with speculative controls.

```text
The hidden field contains JSON for the saved rows.
The table is rebuilt from that JSON at load time.
Edits are serialized again before submit.
Removing a row rebuilds the table and renumbers the generated controls.
```

> Serialization converts structured data into a string that can be stored or transported.
>
> `JSON.stringify()` writes JavaScript data as JSON.
>
> `JSON.parse()` reads JSON text back into JavaScript data.

---

## Try it Yourself

Add invoice and approval fields from the reference form. Save the current rows before the real submit button is clicked, reject invalid amounts, and show a debug panel with the JSON so you can see exactly what would be merged on the next retrieval. Remove a middle row and confirm that the remaining generated names are consecutive.

---

## More background

The reference example is `061-coding-form-dynamic-rows.html`. Its hidden field is named `mikgData`; this lesson keeps that name so the OnBase strategy is recognizable. The final lesson shows how a framework can keep the array and the rendered table synchronized for us.

---
