# Render GL rows with Vue

The first capstone step manages table rows with jQuery. This companion uses Vue to render the same kind of distribution from a reactive `rows` array. The lookup service is unchanged. What changes is who owns the DOM.

```javascript
createApp({
	data() {
		return {
			rows: [{ code: "", description: "", amount: "" }]
		};
	},
	computed: {
		subtotal() {
			return this.rows.reduce(
				(total, row) => total + this.cents(row.amount),
				0
			) / 100;
		}
	}
}).mount("#app");
```

The HTML uses `v-for` to render one table row per array item. Adding or removing an item changes the array, and Vue updates the table. The jQuery version explicitly creates and appends a `<tr>`. Vue keeps the rendering relationship visible in the template instead.

```html
<tr v-for="(row, index) in rows" :key="row.id">
    <td><input v-model.trim="row.code" @blur="lookup(row)"></td>
    <td><input v-model="row.description" readonly></td>
    <td><input v-model="row.amount" @blur="formatAmount(row)"></td>
</tr>
```

The lookup still uses `fetch` and the same local API. The response fills `row.description`, which immediately updates the read-only cell because the row is reactive.

```text
GL description loaded.
Subtotal updated.
```

> **Reactive state** means that a change to the data automatically updates the parts of the page that depend on it. That is the main difference from manually creating, finding, and updating DOM nodes with jQuery.

---

## Compare the approaches

| Concern | jQuery rows | Vue rows |
| --- | --- | --- |
| Add a row | Create and append a `<tr>` | Push an object into `rows` |
| Remove a row | Find the row and remove it | Splice the array |
| Update description | Set an input value | Assign `row.description` |
| Recalculate subtotal | Walk the DOM | Use a computed property |
| Main tradeoff | Small dependency footprint and direct control | More structure, but clearer state-to-UI relationships |

Neither approach is automatically correct. In an older OnBase form, direct jQuery manipulation may be the practical choice. In a larger application with many dependent fields, Vue's state model may prevent a great deal of hand-maintained DOM bookkeeping.

---

## Try it Yourself

Add a validation message when the current row has no description or a non-positive amount. Then prevent Add row from creating another row until the current one is complete.

Compare your change with the jQuery capstone step. Identify which lines changed the data and which lines changed the page automatically.

---

## More Background

- [Vue list rendering](https://vuejs.org/guide/essentials/list.html)
- [Vue computed properties](https://vuejs.org/guide/essentials/computed.html)
- [Vue form input bindings](https://vuejs.org/guide/essentials/forms.html)

---
