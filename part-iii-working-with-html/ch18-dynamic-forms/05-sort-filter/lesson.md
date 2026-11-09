# Sort and filter dynamic rows

Once row data lives in an array, sorting and filtering should happen to the data before rendering. That keeps the table a view of the data rather than a second, contradictory data store.

```javascript
data.filter(row => row.description.toLowerCase().includes(query))
  .sort((a, b) => b.amount - a.amount)
  .forEach(renderRow);
```

```text
Filter: supplies
Office supplies   $125.00
```

---

## Try it Yourself

Add a GL-code filter and a button that toggles ascending and descending order. Keep the original data array unchanged and render from the filtered copy.

---
