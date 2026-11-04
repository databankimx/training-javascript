# Promises and future values

Some work finishes later. A network request, a file read, and a timer all take time while the program may still have other work to do. JavaScript does not hand us the final value immediately, so it gives us a Promise instead.

A Promise is not the result itself. It is an object that represents the result we expect to receive later. While it is waiting, the promise is **pending**. It eventually becomes **fulfilled** with a value or **rejected** with a failure. Once it settles, it cannot switch to the other outcome. This is a little more ceremony than assigning a value to a variable, but the work really is happening at a different time, so the ceremony is earning its keep.

```javascript
function loadSettings() {
  return Promise.resolve("Loaded settings");
}

loadSettings().then(message => console.log(message));
```

> A Promise is an object representing future success or failure.
>
> `.then()` supplies a callback for a fulfilled promise.
>
> A pending promise is still waiting. A fulfilled promise has a value, and a rejected promise has a reason for failure.

```text
Loaded settings
```

`Promise.resolve` gives us an already-successful promise for this first example. Real work might read a file or wait for a network response before fulfilling it. The example is immediate so we can focus on the shape of the code before introducing a clock and the inevitable question of why the output arrived “later” when later was only two lines away.

The callback passed to `.then()` does not run until the promise has fulfilled. That means the code after the call to `loadSettings()` can continue while the result is pending. Later, the promise delivers its value to the callback. The promise gives us a dependable place to attach the next action without making us guess when the work will finish.

---

## Try it Yourself

Return a promise containing an array of names. Use `.then()` to print each name.

---

## More background

See [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

---
