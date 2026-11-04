# Build an integrated GL service request

This is the point where the separate techniques stop standing politely in separate lessons and start sharing a page. We are going to build a small GL service-request form that performs real HTTP lookups against the local training server, fills in invoice data, validates a GL distribution, formats currency, and shows a submission summary in a modal dialog.

It is still a training application, so the service has a deliberately small data set. That is not a weakness here. A small, predictable API lets us concentrate on the browser code instead of spending the lesson arguing with a remote service that has decided to take the afternoon off.

---

## Start with the workflow

The user experience is deliberately sequential:

1. Enter or choose an invoice number.
2. Leave the field so the blur handler calls the invoice API.
3. Review the read-only header values returned by the service.
4. Add GL rows and look up each code.
5. Enter amounts until the GL subtotal equals the invoice total after tax and freight.
6. Add optional notes.
7. Submit, validate, and review the serialized result in a modal.

The design keeps the fields that came from the lookup read-only. If the invoice service says that the vendor is Northwind Office Supply, the user should not be able to edit that value while coding the distribution. Two competing sources of truth are how forms acquire inexplicably fuzzy behavior.

The header uses ordinary HTML controls with labels and ARIA labels:

```html
<label for="invoice-number">Invoice number</label>
<input id="invoice-number"
       name="invoiceNumber"
       list="invoice-options"
       aria-label="Invoice number"
       autocomplete="off"
       placeholder="INV-1001">
<datalist id="invoice-options">
    <option value="INV-1001">
    <option value="INV-1002">
    <option value="INV-1003">
</datalist>
```

The form deliberately does not turn invoice numbers into a dropdown. The valid examples are printed beside the field, but the user can type an invalid value and exercise the failed-lookup path. The same rule applies to GL codes. A training form that only permits valid choices can hide the error handling we need to understand.

---

## Make the API call on blur

The invoice number is the primary key for the rest of the form. The page listens for `blur`, then calls the local endpoint:

```javascript
$("#invoice-number").on("blur", lookupInvoice);

async function lookupInvoice() {
    const number = $("#invoice-number").val().trim().toUpperCase();
    if (!number) return;

    $("#lookup-status").text("Looking up invoice...");
    const response = await fetch(
        `/api/capstone/invoices/${encodeURIComponent(number)}`
    );

    if (!response.ok) {
        throw new Error("Invoice not found");
    }

    const invoice = await response.json();
    $("#invoice-date").val(invoice.invoiceDate);
    $("#invoice-amount").val(currency(invoice.invoiceAmount));
    $("#vendor-name").val(invoice.vendorName);
    $("#vendor-id").val(invoice.vendorId);
    $("#freight").val(currency(invoice.freight));
    $("#tax").val(currency(invoice.tax));
}
```

The code uses the browser's `fetch` API to make a genuine HTTP request. The jQuery part is the event binding and the value updates. That combination is common in real applications. jQuery does not need to own every job simply because it is present on the page.

The real implementation also displays a loading message, catches a failed lookup, clears stale values, and marks the status as an error. Clearing stale values matters. If the user first looks up `INV-1001` and then enters a bad number, leaving the old vendor and amount on screen would be actively misleading.

> **Blur** fires when an element loses focus. It is a useful event for a lookup that should happen after the user finishes editing a field, but it is not a substitute for submit-time validation. A user can paste a value, tab around, or submit in a way that bypasses the interaction you imagined.

---

## Build rows dynamically

The distribution starts with one row. Clicking Add row creates another row with a code input, a read-only description, an amount, and a remove button:

```javascript
function addRow() {
    rowNumber += 1;

    const row = $(`
        <tr data-row="${rowNumber}">
            <td>
                <input class="gl-code"
                       list="gl-code-options"
                       aria-label="GL code ${rowNumber}">
            </td>
            <td>
                <input class="gl-description"
                       aria-label="GL description ${rowNumber}"
                       readonly>
            </td>
            <td>
                <input class="gl-amount"
                       aria-label="GL amount ${rowNumber}"
                       inputmode="decimal">
            </td>
            <td>
                <button class="remove-row"
                        type="button"
                        aria-label="Remove GL row ${rowNumber}">×</button>
            </td>
        </tr>`);

    $("#distribution-body").append(row);
}
```

The description is not another free-text field. It is the result of the GL code lookup, so it is read-only. The page also lists the valid codes next to the table:

| Code | Description |
| --- | --- |
| `6100` | Office supplies |
| `6200` | Professional services |
| `6300` | Facilities and maintenance |
| `6400` | Travel and lodging |

That list is useful for a student, and it models an important production idea: when the valid choices are limited, make the valid choices visible instead of forcing the user to guess.

---

## Look up and reject GL codes

New rows do not automatically become valid just because they exist. The code field gets its own blur handler and calls the second endpoint:

```javascript
$("#distribution-body").on("blur", ".gl-code", function () {
    lookupGlCode(this);
});

async function lookupGlCode(input) {
    const code = $(input).val().trim();
    const row = $(input).closest("tr");
    const description = row.find(".gl-description");

    try {
        const response = await fetch(
            `/api/capstone/gl-codes/${encodeURIComponent(code)}`
        );

        if (!response.ok) throw new Error("Invalid GL code");

        const result = await response.json();
        description.val(result.description);
        $(input).removeClass("invalid");
        return true;
    } catch (error) {
        description.val("");
        $(input).addClass("invalid");
        $("#distribution-status").text(
            "Enter an active GL code before adding another row."
        );
        return false;
    }
}
```

The Add row button waits for the current row's code lookup before creating another row. That prevents a page full of empty rows and means an invalid code cannot quietly become part of the request.

The event binding uses delegation on `#distribution-body`. The rows are created after the page loads, so binding directly to `.gl-code` before the rows exist would bind nothing. Delegation gives the parent one handler that can respond to current and future code inputs.

---

## Format currency and calculate exact cents

Currency is displayed as dollars and cents, but calculations should not rely on binary floating-point values such as `19.99`. The capstone converts each amount to integer cents before adding:

```javascript
const cents = value => Math.round(Number(value) * 100);

function refreshSubtotal() {
    let total = 0;

    $(".gl-amount").each(function () {
        total += cents($(this).val() || 0);
    });

    $("#gl-subtotal").text(currency(total / 100));
}
```

The amount field is formatted to two decimal places when it loses focus. That gives the user a consistent display while the program continues to compare integer cents.

The required equation is:

```text
GL subtotal + tax + freight = invoice total
```

Because the invoice service gives us tax and freight separately, the distribution subtotal must equal:

```javascript
const expected = cents(invoice.invoiceAmount)
    - cents(invoice.tax)
    - cents(invoice.freight);
```

This is a real business rule, not decorative arithmetic. A form that accepts a total which does not reconcile is not finished just because every input happens to contain text.

---

## Validate at submit time

The submit handler is the final authority. It verifies that the invoice exists, every row has a valid description and positive amount, and the exact-cent totals reconcile:

```javascript
$("#request-form").on("submit", function (event) {
    event.preventDefault();

    if (!invoice) {
        $("#message").text(
            "Look up a valid invoice before submitting."
        );
        $("#invoice-number").trigger("focus");
        return;
    }

    const distribution = validateDistribution();
    const subtotal = distribution.values.reduce(
        (sum, item) => sum + item.amount,
        0
    );
    const expected = cents(invoice.invoiceAmount)
        - cents(invoice.tax)
        - cents(invoice.freight);

    if (subtotal !== expected) {
        $("#message").text(
            `GL subtotal must equal ${currency(expected / 100)} `
            + "after tax and freight."
        );
        return;
    }

    showSummary(distribution);
});
```

Notice that the form does not use the browser's built-in `required` attribute for this business rule. A required field can tell us that something is blank. It cannot tell us that a GL subtotal reconciles with an invoice total.

---

## Keep notes safe

The notes area is read-only. Users add notes through an Add Note button, which opens a small dialog. That mirrors the real GL form more closely than letting people edit a running transcript directly, and it gives us one controlled place to reject blank notes. Each note receives a short US date and time prefix, such as `[11/04/2026, 2:35 PM]`, before it is appended.

```javascript
$("#save-note").on("click", function () {
    const note = $("#note-input").val().trim();
    if (!note) return;

    const existing = $("#notes").val().trim();
    const timestamp = new Date().toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
    const stampedNote = `[${timestamp}] ${note}`;
    $("#notes").val(existing ? `${existing}\n${stampedNote}` : stampedNote);
});
```

The notes field accepts user-entered text. When the summary is built, the code uses jQuery `.text(...)` to insert the note. It does not concatenate the note into an HTML string and pass it to `.html(...)`:

```javascript
content.append(
    $("<p>").text(`Notes: ${$("#notes").val().trim() || "None"}`)
);
```

If someone types `<strong>urgent</strong>`, the summary displays those characters as text. That is the correct default for user content. Trusted application markup is a different category and should be created deliberately. Multiple notes are rendered as separate list items in the summary, which is easier to scan than one long paragraph.

---

## Show a submission summary

This lesson does not send data to a real accounting system. A successful submission opens a modal so the user can inspect the request before we pretend that a back-end accepted it:

```javascript
function showSummary(distribution) {
    const content = $("#summary-content").empty();
    content.append(
        $("<p>").text(`Invoice total: ${currency(invoice.invoiceAmount)}`)
    );

    const lines = $("<ul>");
    distribution.values.forEach(item => {
        lines.append(
            $("<li>").text(
                `${item.code} · ${item.description} · `
                + currency(item.amount / 100)
            )
        );
    });

    content.append(lines);
    document.querySelector("#summary-dialog").showModal();
}
```

The modal is deliberately a review surface. In a production form, this is where we might display the server's submission result, a tracking number, or a list of errors returned by the service.

> **Modal** means a dialog that temporarily takes focus and asks the user to deal with it before returning to the page behind it. The native `<dialog>` element provides the browser behavior. jQuery still handles the page state and event bindings around it.

---

## Try it Yourself

1. Choose `INV-1001` and blur the invoice field. Confirm that the header fields populate and become read-only.
2. Enter `6100` in the first GL row. Confirm that the description comes from the API.
3. Try an invalid GL code. Confirm that the row is marked invalid and that Add row refuses to create a new row until the code is corrected.
4. Add enough distribution rows to reconcile the invoice total after tax and freight.
5. Enter a note containing `<strong>urgent</strong>` and submit. Confirm that the modal displays the characters instead of interpreting them as markup.
6. Submit with an incorrect subtotal, then correct it. Explain which validation message changed and why.

---

## More Background

This capstone intentionally mixes jQuery with browser APIs. The HTTP request uses `fetch`, the modal uses `HTMLDialogElement`, and the form behavior uses jQuery because that is the kind of mixed environment developers inherit. The useful skill is not memorizing which library gets to feel important. It is knowing what each part is responsible for and keeping the boundaries understandable.

- [jQuery `.on()`](https://api.jquery.com/on/)
- [jQuery `.val()`](https://api.jquery.com/val/)
- [jQuery `.text()`](https://api.jquery.com/text/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTML `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

---
