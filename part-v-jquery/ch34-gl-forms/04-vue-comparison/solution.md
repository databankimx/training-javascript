# Solution

```javascript
const { createApp, computed } = Vue;

createApp({
	data() {
		return { rows: [{ gl: "6100", amount: 125 }] };
	},
	computed: {
		total() {
			return this.rows.reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
		}
	}
}).mount("#app");
```

Vue owns the row model and recalculates the total as the model changes. That reduces manual DOM synchronization, but it does not remove the host system's retrieval constraints.

---
