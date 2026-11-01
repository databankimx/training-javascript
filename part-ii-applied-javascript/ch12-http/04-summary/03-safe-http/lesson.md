# Homework: safe HTTP wrapper

Wrap response validation and JSON parsing in one reusable async function.

```javascript
const request = ok => Promise.resolve({ ok, json: async () => ({ name: "Ada" }) });

async function safeRequest(ok) {
  try {
    const response = await request(ok);
    if (/* unsuccessful */) throw new Error("Request failed");
    return (await response.json()).name;
  } catch (error) {
    return /* error message */;
  }
}

console.log(await safeRequest(true));
console.log(await safeRequest(false));
```

```text
Ada
Request failed
```

The local `request` function stands in for a real call such as `fetch("https://api.example.com/v1/people/42")`. The runnable script avoids network access so the exercise remains repeatable.

---

## Try it Yourself

Add a status code and include it in the failure message. Explain why the wrapper is a useful boundary for the rest of an application.

Use **Show example (spoiler)** after you have tested the wrapper.

---

## More background

See [MDN: Response.ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok).

---
