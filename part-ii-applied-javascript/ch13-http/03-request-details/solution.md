# Solution: building an HTTP request

```javascript
const baseUrl = "https://api.example.com/v1/repositories";
const query = new URLSearchParams({
  language: "javascript",
  sort: "stars",
  limit: "10",
  owner: "databankimx"
});

const request = {
  method: "POST",
  url: `${baseUrl}?${query}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};
```

```text
POST
https://api.example.com/v1/repositories?language=javascript&sort=stars&limit=10&owner=databankimx
application/json
```

The added `owner` parameter narrows the request. The `POST` method and `Content-Type` header describe a request that would normally include a JSON body. The example only prints the request details, so it does not create anything on a real service.

---
