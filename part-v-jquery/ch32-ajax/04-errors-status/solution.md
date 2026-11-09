# Solution

```javascript
function run(succeeds) {
  $("#output").text("Waiting for response...");
  request(succeeds).done(data => $("#output").text(`Success: HTTP ${data.status}`)).fail(error => $("#output").text(`Request failed: HTTP ${error.status}`));
}
```

The success and failure paths are separate, so the page does not announce success when the simulated server returns an error.

---
