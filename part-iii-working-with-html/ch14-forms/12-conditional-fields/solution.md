## Solution

```javascript
type.addEventListener("change", () => {
  const business = type.value === "business";
  details.hidden = !business;
  ["company", "tax-id"].forEach(id => { document.querySelector(`#${id}`).disabled = !business; });
  status.textContent = `${business ? "Business" : "Personal"} account selected.`;
});
```

The controls are disabled while irrelevant, so keyboard users and form submission do not accidentally treat hidden business fields as active input.

---
