# Pseudo-dynamic rows for OnBase

Here is the constraint that matters to our team: when an OnBase e-form is retrieved, field information is merged into the HTML before the page renders. If a field did not exist in that HTML, it cannot be populated during retrieval. A load-time script can create a row for the browser, but it is too late for the merge process.

That is why an ordinary dynamic table can behave strangely in an e-form. The script may create ten rows, but retrieved values can appear only in fields that were already present when OnBase performed its merge. In the historical form pattern, the first pre-existing line is the one that comes back populated.

## Put every possible field in the HTML

The classic workaround is to create as many rows as the form might need in the original document, then hide the unused rows. JavaScript changes visibility, not the form's field inventory.

```html
<tbody id="distribution-body">
  <tr class="dyn-row">
    <td><input name="OBKey__po_1" aria-label="Purchase order number"></td>
    <td><input name="OBKey__gl_1" aria-label="GL code"></td>
    <td><input name="OBKey__amount_1" aria-label="Amount"></td>
    <td><input name="OBKey__description_1" aria-label="Description"></td>
  </tr>
  <!-- Repeat the complete row through the chosen maximum. -->
</tbody>
```

The important detail is that every input has already been given a name and exists in the markup before the retrieval merge. The page can hide row five, but it cannot invent row five soon enough for that earlier process.

## Show rows with data

The script starts with all rows hidden except the first. On load, it examines the values that OnBase has already merged and reveals any row containing data.

```javascript
const rows = [...document.querySelectorAll(".dyn-row")];
const addButton = document.querySelector("#add-row");
const maximum = rows.length;

function rowHasData(row) {
  return [...row.querySelectorAll("input")]
    .some(input => input.value.trim() !== "");
}

function loadRows() {
  let lastVisible = 0;

  rows.forEach((row, index) => {
    const hasData = rowHasData(row);
    row.hidden = !hasData && index !== 0;
    if (hasData) {
      lastVisible = index;
    }
  });

  rows[lastVisible].hidden = false;
}

loadRows();
```

The first empty row remains visible so the user has somewhere to begin. If saved data exists in rows two and four, those rows remain visible, and the next blank row can be revealed for another entry.

## Reveal the next slot

```javascript
function showNextRow() {
  const next = rows.find(row => row.hidden);

  if (!next) {
    addButton.disabled = true;
    message.textContent = `This form supports ${maximum} rows.`;
    return;
  }

  next.hidden = false;
  next.querySelector("input")?.focus();
}

addButton.addEventListener("click", showNextRow);
```

This is pseudo-dynamic. The visible table changes, but the set of fields does not. The row is not really being created. It was waiting in the HTML the entire time, rather like a very patient intern.

## The trade-off

The approach is blunt but dependable. It satisfies the pre-render merge constraint, it is easy to inspect in the source, and it works without a serialization layer. It also wastes markup, makes the form longer than it appears, and forces us to choose a maximum. If the business process allows ten lines but someone needs an eleventh, we have to change the form and publish it again.

```text
The HTML contains five complete rows before load.
Rows with merged values are shown immediately.
An empty row remains available for a new entry.
The sixth row does not exist, so the script cannot create one that OnBase can populate later.
```

> A pre-render merge happens before the browser's load-time script runs.
>
> A pseudo-dynamic form changes which existing fields are visible; it does not change the form's field inventory.

---

## Try it Yourself

Pre-fill the second and fourth rows in the HTML as though OnBase had merged saved values. On load, show every row that contains data, keep one blank row available, and disable the Add Row button when the cap is reached. Then add a message explaining why a sixth row cannot be created by this strategy.

---

## More background

The reference example is `060-coding-form-pseudo-dynamic.html`. Its fixed slots are a workaround for a platform constraint, not a general replacement for ordinary DOM creation. The next lesson moves the repeating data into one field so the table can truly rebuild itself.

---
