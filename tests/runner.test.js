import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { createRunner } from '../lesson-runner/server.js';
import { discover, within } from '../lesson-runner/catalog.js';
import { markdown } from '../lesson-runner/markdown.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
test('catalog has complete tracks and rejects paths outside a lesson', async () => {
  const lessons = await discover(root);
  assert.equal(lessons.length,170);
  assert.equal(lessons.filter(l => l.part === 'part-ii-applied-javascript').length,57);
  assert.equal(lessons.filter(l => l.part === 'part-iii-beyond-the-book').length,27);
  await assert.rejects(within(lessons[0].folder, path.join(root,'package.json')), /outside/);
});
test('Markdown escapes raw HTML and excludes executable link schemes', () => {
  const html = markdown('# Hello\n<script>alert(1)</script>\n[x](javascript:alert(1))\n> note  \n> continues\n> > nested\n---\n```js\n<a>\n```');
  assert.ok(html.includes('<h1>Hello</h1>'));
   assert.ok(!html.includes('<script>'));
   assert.ok(!html.includes('href="javascript:'));
   assert.ok(html.includes('&lt;a&gt;'));
   assert.ok(html.includes('<hr>'));
   assert.ok(html.includes('<blockquote>') && html.includes('<blockquote>\n<p>nested</p>'));
   assert.ok(markdown('| A | B |\n| --- | --- |\n| one | two |').includes('<table>'));
   const list = markdown('* one\n    * nested\n* two');
   assert.ok(list.includes('<ul>') && list.includes('<li>one') && list.includes('<li>nested') && list.includes('<li>two'));
   const code = markdown('```javascript\nconst value = 1;\n```');
   assert.ok(code.includes('language-javascript') && code.includes('const value = 1;'));
});
test('runner API isolates edits, handles input, failures, cancellation, and rejects unauthorized requests', async () => {
  const runner = await createRunner(root);
   runner.server.listen(0,'127.0.0.1');
   await once(runner.server,'listening');
  const base = `http://127.0.0.1:${runner.server.address().port}`;
  const headers = {'X-Runner-Token':runner.token,'Content-Type':'application/json'};
  const request = (url, data, extra = {}) => fetch(base+url,{headers:{...headers,...extra},method:data === undefined?'GET':'POST',body:data === undefined?undefined:JSON.stringify(data)});
  async function finished() {
    for(let i=0;i<100;i++){
      const status=await (await request('/api/status')).json();
      if(status.done)return status;
      await wait(30);
    }
    throw new Error('Run did not finish');
  }
  try {
    assert.equal((await fetch(base+'/api/catalog')).status,403);
    assert.equal((await request('/api/catalog',undefined,{Origin:'https://example.com'})).status,403);
    assert.equal((await fetch(base+'/?token=wrong')).status,403);
    const lessons = await (await request('/api/catalog')).json();
    const first = lessons[0];
     const original = await readFile(path.join(root,first.id,'main.js'),'utf8');
    let response = await request('/api/run?id='+encodeURIComponent(first.id),{source:'console.log("edited run")'});
     assert.equal(response.status,200);
    assert.match((await finished()).output,/edited run/);
    assert.equal(await readFile(path.join(root,first.id,'main.js'),'utf8'),original);
    const inputLesson=lessons.find(l=>l.input);
    const detail=await (await request('/api/lesson?id='+encodeURIComponent(inputLesson.id))).json();
    assert.equal(Object.hasOwn(detail.contents, 'lecture.md'), false);
    assert.equal(detail.lecture, undefined);
    await request('/api/run?id='+encodeURIComponent(inputLesson.id),{source:detail.contents['main.js']});
    for(let i=0;i<100;i++){
      if(runner.jobs.status().output.includes('How many'))break;
      await wait(20);
    }
    await request('/api/input',{text:'7'});
     assert.match((await finished()).output,/Plan: 7 lessons/);
    await request('/api/run?id='+encodeURIComponent(first.id),{source:'throw new Error("intentional failure")'});
    const failed=await finished();
    assert.notEqual(failed.code,0);
    assert.match(failed.output,/intentional failure/);
    await request('/api/run?id='+encodeURIComponent(first.id),{source:'setInterval(()=>{},1000)'});
    assert.equal((await request('/api/run?id='+encodeURIComponent(first.id),{source:'console.log(1)'})).status,400);
    await request('/api/stop',{});
    assert.equal(runner.jobs.status().done,true);
    assert.equal((await request('/api/lesson?id=../../package.json')).status,404);
  }finally {
    await runner.jobs.close();
     await new Promise(resolve=>runner.server.close(resolve));
  }
});
