# Homework: fetch and parse JSON

Use the response shape provided by `fetchPerson`. Check `ok`, parse the JSON body, and print the person's name.

```javascript
const fetchPerson = () => Promise.resolve({ ok: true, json: async () => ({ name: "Ada" }) });
const response = await fetchPerson();
if (!response.ok) throw new Error("Request failed");
console.log((await response.json()).name);
```

```text
Ada
```

The local `fetchPerson` function stands in for a real call such as `fetch("https://api.example.com/v1/people/42")`. The URL is illustrative and is not used by the runnable script.

---

## Try it Yourself

Add an age to the response and print it. Then set `ok` to false and handle the failure.

Use **Show example (spoiler)** after you have tested your request.

---

## More background

See [MDN: Response.json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json).

---
