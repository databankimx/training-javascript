## Solution

```javascript
const response = { status: 404, url: "https://api.example.com/v1/missing", body: "Not found" };

console.log(`Status: ${response.status}`);
console.log(response.body);
```

```text
Status: 404
Not found
```

The diagnostic output makes the status and body visible. In a real browser, the Network panel and a traffic inspector such as Fiddler provide the surrounding request and header details.

---
