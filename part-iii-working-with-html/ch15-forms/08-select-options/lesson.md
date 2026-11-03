# Populating select options

A select list is often driven by data from a service or configuration file. Hard-coding every option into the HTML works for a short list, but it becomes maintenance confetti when the list changes. JavaScript can create each `option`, set its value and visible text, and append it to the select.

```javascript
const departments = ["Claims", "Human Resources", "Information Technology"];

departments.forEach(name => {
  const option = document.createElement("option");
  option.value = name.toLowerCase().replaceAll(" ", "-");
  option.textContent = name;
  department.append(option);
});
```

```text
Claims
Human Resources
Information Technology
```

The option's `value` is the stable value sent to the application. Its `textContent` is what the user sees. Those do not have to be identical, and usually should not be when display names contain spaces or punctuation.

> `option.value` is the value JavaScript reads after the user chooses an option.
>
> `option.textContent` is the label shown in the list.

---

## Try it Yourself

Add a placeholder option such as `Choose a department`, and populate the list from an array of objects with separate `value` and `label` properties. Reject the placeholder during validation.

---

## More background

See [MDN: `<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and [MDN: `<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option).

---
