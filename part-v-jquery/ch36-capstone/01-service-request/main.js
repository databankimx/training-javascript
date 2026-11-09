const currency = value => `$${Number(value).toFixed(2)}`;
const cents = value => Math.round(Number(value) * 100);
let invoice = null;
let rowNumber = 0;

$("#review-date").datepicker({ dateFormat: "yy-mm-dd" });

function closeNoteDialog() {
	document.querySelector("#note-dialog").close();
}

$("#add-note").on("click", function () {
	$("#note-input").val("");
	document.querySelector("#note-dialog").showModal();
	$("#note-input").trigger("focus");
});
$("#save-note").on("click", function () {
	const note = $("#note-input").val().trim();
	if (!note) {
		$("#note-input").addClass("invalid");
		$("#note-input").trigger("focus");
		return;
	}
	$("#note-input").removeClass("invalid");
	const timestamp = new Date().toLocaleString("en-US", {
		month: "2-digit",
		day: "2-digit",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit"
	});
	const existing = $("#notes").val().trim();
	const stampedNote = `[${timestamp}] ${note}`;
	$("#notes").val(existing ? `${existing}\n${stampedNote}` : stampedNote);
	closeNoteDialog();
});
$("#cancel-note, #close-note").on("click", closeNoteDialog);
$("#note-dialog").on("keydown", function (event) {
	if (event.key === "Escape") {
		event.preventDefault();
		closeNoteDialog();
	}
	if (event.key === "Enter" && event.target.id === "note-input") {
		event.preventDefault();
		$("#save-note").trigger("click");
	}
});

function addRow() {
	rowNumber += 1;
	const row = $(`
		<tr data-row="${rowNumber}">
			<td><input class="gl-code" aria-label="GL code ${rowNumber}" placeholder="6100"></td>
			<td><input class="gl-description" aria-label="GL description ${rowNumber}" readonly></td>
			<td><input class="gl-amount currency" aria-label="GL amount ${rowNumber}" inputmode="decimal" placeholder="0.00"></td>
			<td><button class="remove-row icon-button" type="button" aria-label="Remove GL row ${rowNumber}">×</button></td>
		</tr>`);
	$("#distribution-body").append(row);
}

function refreshSubtotal() {
	let total = 0;
	$(".gl-amount").each(function () {
		total += cents($(this).val() || 0);
	});
	$("#gl-subtotal").text(currency(total / 100));
}

async function lookupInvoice() {
	const number = $("#invoice-number").val().trim().toUpperCase();
	if (!number) {
		$("#lookup-status").text("Enter an invoice number.").removeClass("success").addClass("error");
		return;
	}
	$("#lookup-status").text("Looking up invoice...");
	try {
		const response = await fetch(`/api/capstone/invoices/${encodeURIComponent(number)}`);
		if (!response.ok) throw new Error("Invoice not found");
		invoice = await response.json();
		$("#invoice-date").val(invoice.invoiceDate);
		$("#invoice-amount").val(currency(invoice.invoiceAmount));
		$("#vendor-name").val(invoice.vendorName);
		$("#vendor-id").val(invoice.vendorId);
		$("#freight").val(currency(invoice.freight));
		$("#tax").val(currency(invoice.tax));
		$("#lookup-status").text("Invoice loaded").addClass("success");
	} catch (error) {
		invoice = null;
		$("#lookup-status").text(error.message).removeClass("success").addClass("error");
		$("#invoice-date, #invoice-amount, #vendor-name, #vendor-id, #freight, #tax").val("");
	}
}

async function lookupGlCode(input) {
	const code = $(input).val().trim();
	const row = $(input).closest("tr");
	const description = row.find(".gl-description");
	if (!code) {
		description.val("");
		$(input).addClass("invalid");
		$("#distribution-status").text("Enter a GL code before leaving this row.");
		return false;
	}
	try {
		const response = await fetch(`/api/capstone/gl-codes/${encodeURIComponent(code)}`);
		if (!response.ok) throw new Error("Invalid GL code");
		const result = await response.json();
		description.val(result.description);
		$(input).removeClass("invalid");
		return true;
	} catch (error) {
		description.val("");
		$(input).addClass("invalid");
		$("#distribution-status").text("Enter an active GL code before adding another row.");
		return false;
	}
}

function validateDistribution() {
	const rows = $("#distribution-body tr");
	const values = [];
	let valid = rows.length > 0;
	rows.each(function () {
		const code = $(this).find(".gl-code").val().trim();
		const description = $(this).find(".gl-description").val().trim();
		const amount = cents($(this).find(".gl-amount").val() || 0);
		const rowValid = code !== "" && description !== "" && amount > 0;
		$(this).toggleClass("invalid-row", !rowValid);
		valid = valid && rowValid;
		values.push({ code, description, amount });
	});
	return { valid, values };
}

function showSummary(distribution) {
	const content = $("#summary-content").empty();
	content.append($("<p>").append($("<strong>").text(invoice.invoiceNumber), ` for ${invoice.vendorName} (${invoice.vendorId})`));
	content.append($("<p>").text(`Invoice total: ${currency(invoice.invoiceAmount)}`));
	content.append($("<p>").text(`Tax: ${currency(invoice.tax)} · Freight: ${currency(invoice.freight)}`));
	content.append($("<p>").text(`GL subtotal: ${$("#gl-subtotal").text()}`));
	content.append($("<p>").text(`Review date: ${$("#review-date").val() || "Not selected"}`));
	const lines = $("<ul>");
	distribution.values.forEach(item => lines.append($("<li>").text(`${item.code} · ${item.description} · ${currency(item.amount / 100)}`)));
	content.append(lines);
	content.append($("<h3>").text("Notes"));
	const notes = $("<ul>");
	const noteValues = $("#notes").val().trim().split("\n").filter(Boolean);
	(noteValues.length ? noteValues : ["None"]).forEach(note => notes.append($("<li>").text(note)));
	content.append(notes);
	document.querySelector("#summary-dialog").showModal();
}

$("#invoice-number").on("blur", lookupInvoice);
$("#add-row").on("click", async function () {
	const lastRow = $("#distribution-body tr:last");
	const lastCode = lastRow.find(".gl-code");
	const lastAmount = lastRow.find(".gl-amount");
	if (lastCode.length) {
		if (!lastCode.val().trim()) {
			$("#distribution-status").text("Enter a GL code before adding another row.");
			lastCode.addClass("invalid").trigger("focus");
			return;
		}
		if (!(await lookupGlCode(lastCode))) return;
		if (cents(lastAmount.val() || 0) <= 0) {
			$("#distribution-status").text("Enter a positive amount before adding another row.");
			lastAmount.addClass("invalid").trigger("focus");
			return;
		}
	}
	addRow();
});
$("#distribution-body").on("blur", ".gl-code", function () {
	lookupGlCode(this);
});
$("#distribution-body").on("input", ".gl-amount", refreshSubtotal);
$("#distribution-body").on("blur", ".gl-amount", function () {
	const value = Number($(this).val());
	if (Number.isFinite(value) && value >= 0) $(this).val(value.toFixed(2));
	refreshSubtotal();
});
$("#distribution-body").on("click", ".remove-row", function () {
	$(this).closest("tr").remove();
	refreshSubtotal();
});
$("#request-form").on("submit", function (event) {
	event.preventDefault();
	$("#message").text("");
	if (!invoice) {
		$("#message").text("Look up a valid invoice before submitting.");
		$("#invoice-number").trigger("focus");
		return;
	}
	const distribution = validateDistribution();
	if (!distribution.valid) {
		$("#message").text("Complete every GL row with a valid code and a positive amount.");
		$(".invalid-row .gl-code, .invalid-row .gl-amount").first().trigger("focus");
		return;
	}
	const subtotal = distribution.values.reduce((sum, item) => sum + item.amount, 0);
	const expected = cents(invoice.invoiceAmount) - cents(invoice.tax) - cents(invoice.freight);
	if (subtotal !== expected) {
		$("#message").text(`GL subtotal must equal ${currency(expected / 100)} after tax and freight.`);
		return;
	}
	showSummary(distribution);
});
$("#close-summary").on("click", () => document.querySelector("#summary-dialog").close());

addRow();
