## Solution

```javascript
const fetchPerson = () => Promise.resolve({ ok: true, json: async () => ({ name: "Ada" }) });
const response = await fetchPerson();
if (!response.ok) throw new Error("Request failed");
console.log((await response.json()).name);
```

```text
Ada
```

The status is checked before the body is parsed.

---
