# Solution

```javascript
const urgent = $("#tasks li.task[data-priority='urgent']");
const tasks = $("#tasks .task");

urgent.addClass("urgent");
$("#output").text(`Urgent: ${urgent.length}; Total tasks: ${tasks.length}`);
console.log(`Urgent: ${urgent.length}`);
```

The selectors are scoped to `#tasks`. The first combines several selector ideas to find only urgent task rows; the second counts every task in that list.

```text
Urgent: 2
Total tasks: 3
```

---
