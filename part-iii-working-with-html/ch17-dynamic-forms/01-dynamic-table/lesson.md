# Adding rows to a table

Dynamic tables are a good example of JavaScript doing useful work in the page. The original HTML can contain a table header and an empty `<tbody>`, then JavaScript can create a row when the user asks for one. The browser is happy to create elements whenever we ask. The interesting part is deciding where the data lives and how the visible table stays in step with it.

Our example is an accounting table. Each distribution row has a purchase-order number, a GL code, an amount, and a description. The total is calculated from the rows currently in the table, rather than typed by hand and trusted forever.

## Start with data, not markup

The script keeps the rows in an array. The array is our source of truth, and the table is the visible copy of that data.

```javascript
const lines = [];

function addLine() {
  lines.push({
    poNumber: "",
    glCode: "",
    amount: 0,
    description: ""
  });

  renderTable();
}
```

The object gives each value a name. The empty strings are intentional: they give a new control something sensible to display, while `amount` starts as a number because we will add it to the total later.

## Build a row

`document.createElement()` creates an element that does not appear on the page until we append it. We create the row, create a cell for each value, and put an input inside the editable cells.

```javascript
function createInput(value, className) {
  const input = document.createElement("input");
  input.value = value;
  input.className = className;
  return input;
}

function renderTable() {
  body.replaceChildren();

  lines.forEach((line, index) => {
    const row = document.createElement("tr");
    const poCell = document.createElement("td");
    const glCell = document.createElement("td");
    const amountCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const actionCell = document.createElement("td");

    poCell.append(createInput(line.poNumber, "po-number"));
    glCell.append(createInput(line.glCode, "gl-code"));
    amountCell.append(createInput(line.amount, "amount"));
    descriptionCell.append(createInput(line.description, "description"));

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeLine(index));
    actionCell.append(removeButton);

    row.append(poCell, glCell, amountCell, descriptionCell, actionCell);
    body.append(row);
  });

  updateTotal();
}
```

The `index` is captured by the button handler so the correct object can be removed. The handler is bound when the row is created. That is a small example of dynamic event binding, which we covered earlier in the browser chapter.

## Read the edited values

An input's `value` is always a string, even when its `type` is `number`. We convert the amount before adding it. `Number(value) || 0` gives us a usable zero when the field is blank, although a real form would also validate invalid text before saving.

```javascript
function syncLinesFromTable() {
  [...body.rows].forEach((row, index) => {
    const inputs = row.querySelectorAll("input");
    lines[index].poNumber = inputs[0].value;
    lines[index].glCode = inputs[1].value;
    lines[index].amount = Number(inputs[2].value) || 0;
    lines[index].description = inputs[3].value;
  });
}

function updateTotal() {
  syncLinesFromTable();
  const total = lines.reduce((sum, line) => sum + line.amount, 0);
  totalElement.textContent = total.toFixed(2);
}
```

The table is still the thing the user edits, so `syncLinesFromTable()` copies those edits into the array before calculating. In a larger application, we might update the array on every `input` event instead. Either way, we need one clear place where the data is authoritative. Two competing sources of truth are how forms acquire inexplicably fuzzy bugs.

## Add and remove

```javascript
function removeLine(index) {
  lines.splice(index, 1);
  renderTable();
}

addButton.addEventListener("click", addLine);
addLine();
```

`splice(index, 1)` removes one object from the array. Calling `renderTable()` afterward gives us a clean table with the remaining rows and fresh remove-button indexes.

```text
Add a row: a new distribution line appears.
Enter 125.50: the total becomes 125.50.
Add another row with 24.50: the total becomes 150.00.
Remove the first row: the total returns to 24.50.
```

> `createElement()` makes a new DOM element.
>
> `append()` puts an element inside another element.
>
> `replaceChildren()` removes the current children and inserts the new ones.
>
> `splice()` removes or inserts items in an array.

This ordinary dynamic table assumes that creating fields after page load is acceptable. That assumption is not safe for every form platform. The next lesson explains why an OnBase e-form may need every possible field to exist in the original HTML before retrieval.

---

## Try it Yourself

Add a row, enter an amount, and remove it again. Then extend the example so that it rejects a negative amount, marks a blank GL code with the `invalid` class, keeps the total formatted as currency, and uses the safe `textContent` pattern from the XSS chapter for Accounting Notes.

---

## More background

The reference examples are `060-coding-form-pseudo-dynamic.html`, `061-coding-form-dynamic-rows.html`, and `062-coding-form-dynamic-rows-vue.html` in the dynamic-forms materials. We will use this lesson to understand ordinary DOM work before comparing platform-specific strategies.

---
