# Solution

The completed source uses the local runner API at `/api/capstone/invoices/{number}` and `/api/capstone/gl-codes/{code}`. The important parts are shown below. The source pane contains the complete, formatted implementation.

```javascript
$("#invoice-number").on("blur", lookupInvoice);
$("#distribution-body").on("blur", ".gl-code", function () {
	lookupGlCode(this);
});
$("#distribution-body").on("input", ".gl-amount", refreshSubtotal);

async function lookupInvoice() {
	const number = $("#invoice-number").val().trim().toUpperCase();
	const response = await fetch(
		`/api/capstone/invoices/${encodeURIComponent(number)}`
	);

	if (!response.ok) throw new Error("Invoice not found");

	const invoice = await response.json();
	$("#invoice-date").val(invoice.invoiceDate);
	$("#invoice-amount").val(currency(invoice.invoiceAmount));
	$("#vendor-name").val(invoice.vendorName);
	$("#vendor-id").val(invoice.vendorId);
	$("#freight").val(currency(invoice.freight));
	$("#tax").val(currency(invoice.tax));
}
```

The invoice fields are populated from the HTTP response and remain read-only. The code lookup follows the same pattern, but writes only the trusted description returned for a valid active code.

```javascript
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
```

The calculation is performed in integer cents, so the validation does not depend on binary floating-point equality. The modal summary is built with jQuery element creation and `.text(...)`, including the user-entered notes. That preserves the safe text-insertion rule from the XSS chapter.

The notes area is read-only and the Add Note dialog appends each trimmed note with `.val(...)`. That gives users a controlled note-entry interaction without ever interpreting the note as HTML.

```text
Request reviewed successfully.
```

The date picker is initialized with jQuery UI for the review date. The invoice date itself is returned by the service and remains read-only, which keeps the lookup response authoritative.

---
