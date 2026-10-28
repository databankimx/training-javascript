# S25 · Node HTTP routing (Flask counterpart)  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

Fetch /missing and assert response.status === 404. Fetch /health with {method:"POST"} and assert 405 plus response.headers.get("allow") === "GET". Keep the requests in try/finally so a failed assertion still closes the server.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
