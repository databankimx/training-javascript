# Solution

```javascript
function updateTotal() {
	let total = 0;
	$("#rows input[name='amount']").each(function () {
		total += Number($(this).val()) || 0;
	});
	$("#total").text(`$${total.toFixed(2)}`);
}
```

The total is calculated from the current inputs. The delegated handlers continue to work for rows added later.

---
