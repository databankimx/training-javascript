# Solution

```javascript
addRow() {
	const current = this.rows[this.rows.length - 1];
	if (current && (!current.description || this.cents(current.amount) <= 0)) {
		this.message = "Complete the current row before adding another one.";
		return;
	}

	this.rows.push({
		id: this.nextId++,
		code: "",
		description: "",
		amount: "",
		invalid: false
	});
}
```

The completed version keeps the rows in Vue state, calls the same GL-code API on blur, formats positive amounts to two decimal places, and derives the subtotal from integer cents. The validation guard prevents an incomplete row from becoming an even larger incomplete table.

```text
GL description loaded.
Subtotal updated.
```

---
