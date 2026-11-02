# Pseudo-dynamic rows for OnBase

Here is the constraint that matters to our team: when an OnBase e-form is retrieved, field information is merged into the HTML before the page renders. If a field did not exist in that HTML, it cannot be populated during retrieval. A load-time script can create a row for the browser, but it is too late for the merge process. In practice, only the first pre-existing line may come back populated.

The classic workaround is to create as many rows as the form might need in the original HTML, then hide the unused rows. JavaScript changes visibility, not the form's field inventory.

```javascript
const rows = [...document.querySelectorAll(".dyn-row")];
let visibleRows = 1;

function renderRows() {
  rows.forEach((row, index) => { row.hidden = index >= visibleRows; });
}
```

```text
The HTML contains five rows before load.
The script shows one row initially and reveals more as requested.
```

> This is pseudo-dynamic because the visible table changes, but the set of fields does not.
>
> The hard cap is real. If the HTML contains five rows, the user cannot create a sixth without changing the form itself.

The trade-off is blunt but dependable. It satisfies the pre-render merge constraint and is easy to inspect, but it wastes markup and forces us to choose a maximum. For a small, predictable form, that may be the least surprising solution.

---

## Try it Yourself

Pre-fill the second and fourth rows in the HTML as though OnBase had merged saved values. On load, show every row that contains data, not merely the first row. Then add a maximum-row message when the user reaches the cap.

---

## More background

The reference example is `060-coding-form-pseudo-dynamic.html` in the training repository's dynamic-forms materials. The next lesson stores row data separately so the table can truly rebuild itself.

---
