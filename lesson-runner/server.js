import http from 'node:http';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readFile } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
import { discover, filesFor, within } from './catalog.js';
import { markdown } from './markdown.js';
import { Jobs } from './jobs.js';
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(here);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml' };
async function body(request) {
  let text = '';
  for await (const chunk of request) {
    text += chunk;
    if (Buffer.byteLength(text) > 200000) throw new Error('Request too large');
  }
  return JSON.parse(text || '{}');
}
export async function createRunner(repo = root) {
  const lessons = await discover(repo);
  const jobs = new Jobs(repo);
  const token = randomBytes(24).toString('hex');
  let starting = false;
  const server = http.createServer(async (req, res) => {
    const send = (status, data, type = 'application/json; charset=utf-8') => {
      res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer' });
      res.end(type.startsWith('application/json') ? JSON.stringify(data) : data);
    };
    try {
      const address = server.address();
      const host = `127.0.0.1:${address.port}`;
      if (req.headers.host !== host) return send(403, { error: 'Use the loopback URL printed by the runner' });
      const url = new URL(req.url, `http://${host}`);
      if (url.pathname === '/' && req.method === 'GET') {
        if (url.searchParams.get('token') !== token) return send(403, { error: 'Open the full URL printed in the terminal' });
        return send(200, await readFile(path.join(here, 'public/index.html'), 'utf8'), types['.html']);
      }
      if (['/app.js', '/style.css', '/katex.css', '/databank-d.svg'].includes(url.pathname) && req.method === 'GET') return send(200, await readFile(path.join(here, 'public', url.pathname.slice(1)), 'utf8'), types[path.extname(url.pathname)]);
      if (req.headers['x-runner-token'] !== token) return send(403, { error: 'Invalid session token' });
      if (req.headers.origin && req.headers.origin !== `http://${host}`) return send(403, { error: 'Invalid origin' });
      if (req.method === 'GET' && url.pathname === '/api/catalog') return send(200, lessons.map(({ folder, ...item }) => item));
      const lesson = lessons.find(item => item.id === url.searchParams.get('id'));
      if (req.method === 'GET' && url.pathname === '/api/lesson' && lesson) {
        const files = await filesFor(lesson);
        const contents = {};
        for (const name of files) {
          // Lecture notes are instructor material. They remain in the repository for
          // authoring, but are never sent to the student-facing application.
          if (name === 'lecture.md') continue;
          contents[name] = await readFile(await within(lesson.folder, name), 'utf8');
        }
        const solutionVisible = !lesson.spoiler || url.searchParams.get('reveal') === '1';
        return send(200, { ...lesson, folder: undefined, contents, html: markdown(contents['lesson.md']), solution: solutionVisible ? markdown(contents['solution.md'] || '') : '' });
      }
      if (req.method === 'POST' && url.pathname === '/api/run' && lesson) {
        if (lesson.runtime !== 'node') return send(400, { error: 'Use the browser preview for this lesson' });
        if (starting) return send(409, { error: 'A run is starting' });
        const payload = await body(req);
        if (typeof payload.source !== 'string') return send(400, { error: 'Source must be text' });
        const edits = payload.edits ?? {};
        if (typeof edits !== 'object' || edits === null || Array.isArray(edits)) return send(400, { error: 'Invalid edits' });
        const allowed = (await filesFor(lesson)).filter(name => name.endsWith('.js'));
        for (const [name, value] of Object.entries(edits)) if (!allowed.includes(name) || typeof value !== 'string') return send(400, { error: 'Only existing JavaScript source files may be edited' });
        if (starting) return send(409, { error: 'A run is starting' });
        starting = true;
        try {
          return send(200, await jobs.start(lesson, payload.source, edits));
        }finally {
          starting = false;
        }
      }
      if (req.method === 'GET' && url.pathname === '/api/status') return send(200, jobs.status());
      if (req.method === 'POST' && url.pathname === '/api/input') {
        const data = await body(req);
         jobs.input(String(data.text ?? ''));
         return send(200, { ok: true });
      }
      if (req.method === 'POST' && url.pathname === '/api/stop') {
        await jobs.stop();
         return send(200, { ok: true });
      }
      return send(404, { error: 'Not found' });
    }catch (error) {
      return send(400, { error: error.message });
    }
  });
  return { server, jobs, token };
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  if (Number(process.versions.node.split('.')[0]) < 24) throw new Error('Install Node.js 24 or later');
  const runner = await createRunner();
  const port = Number(process.env.PORT || 4173);
  runner.server.listen(port, '127.0.0.1', () => console.log(`JavaScript Training\nOpen http://127.0.0.1:${runner.server.address().port}/?token=${runner.token}\nCtrl+C to stop. Lessons run with your user account; use trusted local code.`));
  runner.server.on('error', error => {
    console.error(error.message);
     process.exitCode = 1;
  });
  let closing = false;
  const shutdown = async () => {
    if (closing) return;
    closing = true;
    await runner.jobs.close();
    runner.server.close();
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}
