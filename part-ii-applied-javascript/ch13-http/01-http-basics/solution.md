## Solution

```javascript
const response = { status: 200, ok: true, body: "OK" };

console.log(response.status);
console.log(response.body);
```

```text
200
OK
```

The status describes the outcome, and the body carries the returned content. In a real client, those values come from the network, but the questions are the same: what status arrived, what metadata came with it, and what does the body contain?

---
