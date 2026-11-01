## Solution

```javascript
function xhrStyle(callback) {
  callback(null, "XHR result");
}

xhrStyle((error, value) => console.log(error ? error.message : value));
Promise.resolve("fetch result").then(value => console.log(value));
```

```text
XHR result
fetch result
```

The first result arrives through a callback, while the second arrives through a promise.

---
