# Solution

```javascript
let attempt = 0;
function request() {
  attempt += 1;
  return $.Deferred(function (deferred) {
    setTimeout(() => attempt === 1 ? deferred.reject({ status: 503 }) : deferred.resolve({ status: 200 }), 150);
  }).promise();
}

$("#run").on("click", function () {
  attempt = 0;
  const output = $("#output");
  function tryOnce() {
    request().done(data => output.append(`Attempt ${attempt}: HTTP ${data.status}\n`)).fail(error => { output.append(`Attempt ${attempt}: HTTP ${error.status}\n`); tryOnce(); });
  }
  output.text("");
  tryOnce();
});
```

The first request rejects, the failure handler records the status, and the second attempt succeeds. A production retry policy must cap attempts and usually add a delay.

---
