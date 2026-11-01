## Solution

```javascript
function legacyAjax(url, callback) {
  callback(null, { status: 200, body: "Legacy response" });
}

legacyAjax("/api/person", (error, response) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(response.body);
});
```

```text
Legacy response
```

The callback receives either an error or a response, which is the older pattern that promises and `fetch` made easier to compose.

---
