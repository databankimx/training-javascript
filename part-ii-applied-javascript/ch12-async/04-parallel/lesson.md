# Parallel work with `Promise.all`

Independent asynchronous operations do not need to wait for one another. `Promise.all` starts with a collection of promises and fulfills when every one succeeds. This matters when a page needs settings, profile data, and notifications that do not depend on one another. Waiting unnecessarily is not a virtue.

```javascript
function delay(value, milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

const settings = delay("settings", 30);
const profile = delay("profile", 0);

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

The profile promise resolves first because its delay is zero. The settings promise is deliberately slower, but `Promise.all` still returns `settings` first because it preserves the order of the input array. The output order is not a stopwatch.

Loading settings and a profile are independent, so they can be requested together. Do not use parallel work when the second operation needs the first operation's result. In that case, sequential `await` expresses the dependency honestly instead of making the code look faster than it can actually be.

> `setTimeout` schedules a callback after at least the requested delay. It does not freeze the entire program while it waits.
>
> `Promise.all([settings, profile])` starts with both promises already in progress, waits for both to fulfill, and returns their results in the same order as the array.

---

## Try it Yourself

Add a third independent promise. Then make the second promise depend on the first and explain why a sequential `await` is clearer in that case.

---

## More background

See [MDN: Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

---
