const { createApp } = Vue;

createApp({
	data() {
		return {
			nextId: 2,
			message: "Enter a GL code to load its description.",
			rows: [{ id: 1, code: "", description: "", amount: "", invalid: false }]
		};
	},
	computed: {
		subtotal() {
			return this.rows.reduce((total, row) => total + this.cents(row.amount), 0) / 100;
		}
	},
	methods: {
		cents(value) {
			const number = Number(value);
			return Number.isFinite(number) ? Math.round(number * 100) : 0;
		},
		currency(value) {
			return `$${Number(value).toFixed(2)}`;
		},
		addRow() {
			const current = this.rows[this.rows.length - 1];
			if (current && (!current.description || this.cents(current.amount) <= 0)) {
				this.message = "Complete the current row before adding another one.";
				return;
			}
			this.rows.push({ id: this.nextId++, code: "", description: "", amount: "", invalid: false });
			this.message = "New row added.";
		},
		removeRow(index) {
			if (this.rows.length === 1) {
				this.message = "Keep one distribution row on the form.";
				return;
			}
			this.rows.splice(index, 1);
		},
		async lookup(row) {
			if (!row.code) return;
			const response = await fetch(`/api/capstone/gl-codes/${encodeURIComponent(row.code)}`);
			if (!response.ok) {
				row.description = "";
				row.invalid = true;
				this.message = "That GL code is not active.";
				return;
			}
			const result = await response.json();
			row.description = result.description;
			row.invalid = false;
			this.message = "GL description loaded.";
		},
		formatAmount(row) {
			if (this.cents(row.amount) > 0) row.amount = Number(row.amount).toFixed(2);
		},
		refresh() {
			this.message = "Subtotal updated.";
		}
	}
}).mount("#app");
