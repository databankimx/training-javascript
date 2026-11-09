# Solution

```javascript
const inputs = $(":input");
const checked = $("input:checked").length;
const selected = $("#region option:selected").text();

$("#output").text(`${inputs.length} controls; ${checked} checked choice; region: ${selected}`);
console.log($("input[name='email']").val());
```

The example combines jQuery's form selectors with `.val()` and `.text()`. The selected option and checked state are properties of the live controls, not merely details copied from the original HTML.

```text
5 controls; 1 checked choice; region: West
ada@example.com
```

---
