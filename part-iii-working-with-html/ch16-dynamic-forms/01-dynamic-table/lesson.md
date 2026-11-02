# Adding rows to a table

The ordinary browser problem is straightforward: create a row, create its cells and controls, append it to the table, and remove it when the user asks. This is the part that works beautifully in an ordinary page. It is also the part that becomes complicated when a platform expects fields to exist before it renders a form. We will start with the ordinary version so the DOM work is clear. The Accounting Notes area uses the same safe comment pattern from the XSS chapter: read text, create a list item, and write it with `textContent`.

```javascript
function addRow() {
  const row = document.createElement("tr");
  // Create the inputs, append the cells, then append the row.
  body.append(row);
}
```

```text
Add a row: a new distribution line appears.
Remove a row: that line disappears and the total updates.
```

The example keeps the row element and its amount input together in a small JavaScript object. That makes removal and recalculation explicit rather than asking the DOM to remember our bookkeeping for us.

> A dynamic table creates rows while the page is running instead of placing every possible row in the original HTML.

---

## Try it Yourself

Add a row, enter an amount, and remove it again. Then add validation for blank GL codes and prevent a negative amount from contributing to the subtotal.

---
