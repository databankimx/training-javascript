# Homework: selector report

Use the task list to build a small report. Select urgent tasks with a combined descendant, class, and attribute selector. Select all tasks with a separate class-based selector. Mark the urgent items and write both counts into the output paragraph.

```javascript
const urgent = $("#tasks li.task[data-priority='urgent']");
const tasks = $("#tasks .task");
```

```text
Urgent: 2
Total tasks: 3
```

## Try it Yourself

Add a low-priority task and a second list. Make sure your selectors still count only the intended list. Explain why starting from `#tasks` is safer than selecting every `.task` on a large page.

The spoiler contains a complete solution.

---
