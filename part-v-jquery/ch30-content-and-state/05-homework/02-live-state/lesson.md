# Homework: live control state

The Action button starts disabled in the HTML. Enable it with `.prop("disabled", false)`, then report both the original `disabled` attribute and the live `disabled` property.

```javascript
$("#action").prop("disabled", false);
```

```text
Attribute: disabled
Property: false
```

## Try it Yourself

Add a checked checkbox. Toggle it with `.prop("checked", ...)` and report both `.attr("checked")` and `.prop("checked")`. Explain why the attribute can remain present while the live state changes. The spoiler contains a complete solution.

---
