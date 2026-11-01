import { createServer } from "node:http";

const server = createServer((request, response) => {
  if (request.url === "/api/person") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ name: "Ada", tasks: 3 }));
    return;
  }

  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ error: "Not found" }));
});

await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;

try {
  const response = await fetch(`http://127.0.0.1:${port}/api/person`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const person = await response.json();
  console.log(person.name);
  console.log(person.tasks);
} finally {
  await new Promise(resolve => server.close(resolve));
}
