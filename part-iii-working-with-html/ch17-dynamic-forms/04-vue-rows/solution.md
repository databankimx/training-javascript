## Solution

```javascript
new Vue({
  el: "#app",
  data: {
    lines: [{ poNumber: "81991", glCode: "24", amount: 300, description: "Furnace Filters" }]
  },
  computed: {
    total() { return this.lines.reduce((sum, line) => sum + Number(line.amount || 0), 0); }
  },
  methods: {
    addLine() { this.lines.push({ poNumber: "", glCode: "", amount: 0, description: "" }); },
    removeLine(index) { this.lines.splice(index, 1); }
  }
});
```

Vue keeps the array, the rendered controls, the total, and the hidden serialized value connected. The form still has ordinary named inputs for the OnBase keyword instances, but the framework handles the repeated DOM structure.

```text
Total: $300.00
```

---
