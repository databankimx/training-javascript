# Parallel work with `Promise.all`

Independent asynchronous operations do not need to wait for one another. `Promise.all` starts with a collection of promises and fulfills when every one succeeds.

```javascript
const settings = Promise.resolve("settings");
const profile = Promise.resolve("profile");

async function loadPageData() {
  const results = await Promise.all([settings, profile]);
  for (const result of results) {
    console.log(result);
  }
}

loadPageData();
```

> `Promise.all` waits for every promise in an array.
>
> The results preserve the order of the input promises, even if the operations finish in a different order.
>
> If any promise rejects, `Promise.all` rejects and the caller should handle that failure.

```text
settings
profile
```

Loading settings and a profile are independent, so they can be requested together. Do not use parallel work when the second operation needs the first operation's result.

---

## Try it Yourself

Add a third independent promise. Then make the second promise depend on the first and explain why a sequential `await` is clearer in that case.

---

## More background

See [MDN: Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

---
