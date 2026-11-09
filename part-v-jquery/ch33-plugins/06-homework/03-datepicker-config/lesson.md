# Homework: configure a date picker

Configure the date picker so users can choose today or a future date, and so the value is written as `YYYY-MM-DD`. Report the selected value in the page.

```javascript
$("#date").datepicker({
	dateFormat: "yy-mm-dd",
	minDate: 0
});
```

```text
Date format: yy-mm-dd
```

## Try it Yourself

Add a maximum date 30 days from today. Explain why the widget improves entry but does not replace server-side validation. The spoiler contains a complete solution.

---
