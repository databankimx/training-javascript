# Homework: compare AJAX styles

Complete the comparison between a callback-style request and a promise-style request.

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

In a real application, the callback style might use `XMLHttpRequest.open("GET", "https://api.example.com/v1/people/42")`, while the modern version would call `fetch("https://api.example.com/v1/people/42")`. These URLs are examples only.

---

## Try it Yourself

Make each style report a failure. Explain how the callback receives an error and how the promise uses rejection.

Use **Show example (spoiler)** after you have tested both styles.

---

## More background

See [MDN: AJAX](https://developer.mozilla.org/en-US/docs/Glossary/AJAX).

---
