import { createServer } from 'node:http';
const server = createServer((req,res) => {
  res.setHeader('Content-Type','application/json');
   res.end(JSON.stringify({lessons: 16}));
});
await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
try {
  const response = await fetch(`http://127.0.0.1:${server.address().port}`, {signal:AbortSignal.timeout(2000)});
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const data = await response.json();
  if (!Number.isInteger(data.lessons)) throw new TypeError('Invalid lesson count');
  console.log(data.lessons);
}finally {
  await new Promise(resolve => server.close(resolve));
}
