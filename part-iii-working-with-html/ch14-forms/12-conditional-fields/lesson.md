# Conditional form sections

Forms should not make someone fill out irrelevant fields. A personal account does not need company details, so the business section stays hidden until the user chooses Business. The controls still exist in the HTML, but visibility and validation can follow the selected state.

```javascript
const business = type.value === "business";
details.hidden = !business;
status.textContent = `${business ? "Business" : "Personal"} account selected.`;
```

```text
Personal account selected.
Business account selected.
```

> `hidden` is a boolean property. `true` removes the section from the visible page and accessibility tree.

---

## Try it Yourself

Disable the business fields while the section is hidden and re-enable them when it is shown. Then validate the company name only for business accounts.

---
