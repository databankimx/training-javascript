# Stacks and queues - exercise solution

```javascript
const history = [];
history.push("home", "search", "details");
console.log(history.pop());

const requests = ["request 1", "request 2"];
requests.push("request 3");
console.log(requests.shift());
```

```text
details
request 1
```

Browser history behaves like a stack because the most recent page is the first one we leave. Waiting requests behave like a queue because the oldest request should be handled first.

---
