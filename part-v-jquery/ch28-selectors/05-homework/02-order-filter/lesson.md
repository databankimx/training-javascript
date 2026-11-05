# Homework: filter an order list

The order list includes one cancelled order. Start from the list, find its containing `.orders` panel, select direct child rows, exclude cancelled rows, and mark the remaining active orders.

```javascript
const panel = $("#orders").closest(".orders");
const active = panel.find("#orders").children("li").not(".cancelled");
```

```text
Active orders: 2
```

## Try it Yourself

Add a second order panel and make sure the report still counts only the first panel. Then replace `.not(...)` with `.filter(...)` and explain which version reads more naturally for this job.

The spoiler contains a complete solution.

---
