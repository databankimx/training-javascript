import { discover, filesFor } from '../lesson-runner/catalog.js';
import { readFile, mkdtemp, cp, rm, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lessons = await discover(root);
const work = await mkdtemp(path.join(tmpdir(), 'training-js-check-'));
let count = 0;
function execute(args, cwd, input = '') {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, args, { cwd, windowsHide: true });
    let output = '';
    child.stdout.on('data', chunk => {
      output += chunk;
    });
     child.stderr.on('data', chunk => {
      output += chunk;
    });
    child.on('error', reject);
    const timer = setTimeout(() => {
      child.kill();
       reject(new Error(`Timeout: ${cwd}`));
    }, 8000);
    child.on('close', code => {
      clearTimeout(timer);
       code === 0 ? resolve(output) : reject(new Error(`${cwd}\n${output}`));
    });
    child.stdin.on('error', () => {
    });
     child.stdin.end(input);
  });
}
try {
  assert.ok(lessons.length >= 65, 'Curriculum unexpectedly shrank');
  for (const lesson of lessons) {
    const files = await filesFor(lesson);
    for (const name of ['lesson.md', 'main.js', 'solution.md']) assert.ok(files.includes(name), `${lesson.id} missing ${name}`);
    const text = await readFile(path.join(lesson.folder, 'lesson.md'), 'utf8');
    assert.ok(text.includes('```javascript\n'), `${lesson.id} missing JavaScript example block`);
    assert.ok(text.includes('```text\n'), `${lesson.id} missing expected-output block`);
    const cwd = path.join(work, String(count++));
    await cp(lesson.folder, cwd, { recursive: true });
    await writeFile(path.join(cwd,'package.json'),'{"type":"module"}');
    for (const name of files.filter(name => name.endsWith('.js'))) await execute(['--check', name], cwd);
    if (lesson.runtime === 'node') {
      const output = await execute(['main.js'], cwd, lesson.input);
      const expected = lesson.verify || [];
      for (const fragment of expected) assert.ok(output.includes(fragment), `${lesson.id} expected ${fragment}, got ${output}`);
    }
  }
  console.log(`Validated ${lessons.length} lesson packages; all Node examples executed; all JavaScript parsed. Browser behavior is covered by manual/browser QA.`);
}finally {
  await rm(work, { recursive: true, force: true });
}
