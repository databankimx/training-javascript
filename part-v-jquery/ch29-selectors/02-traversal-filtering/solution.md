# Solution

```javascript
const orders = $("#orders");
const shipped = orders.children("li").filter(".shipped");
const panelTitle = orders.closest(".panel").find("h2").text();

shipped.addClass("highlight");
$("#output").text(`${panelTitle}: ${shipped.length} shipped orders`);
console.log(`First order: ${orders.children().first().text()}`);
```

The code starts with the list, selects direct children, narrows them to shipped orders, and walks back to the containing panel for its heading. Each step has one job, which makes the chain easier to debug than a selector that attempts to say everything at once.

```text
Open orders: 2 shipped orders
First order: Order 1001
```

---
