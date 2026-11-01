# Promises and future values

Some work finishes later. A Promise represents a value that is not ready yet. It eventually fulfills with a result or rejects with a failure.

```javascript
function loadSettings() {
  return Promise.resolve("Loaded settings");
}

loadSettings().then(message => console.log(message));
```

> A Promise is an object representing future success or failure.
>
> `.then()` supplies a callback for a fulfilled promise.

```text
Loaded settings
```

`Promise.resolve` gives us an already-successful promise for this first example. Real work might read a file or wait for a network response before fulfilling it.

---

## Try it Yourself

Return a promise containing an array of names. Use `.then()` to print each name.

---

## More background

See [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

---
