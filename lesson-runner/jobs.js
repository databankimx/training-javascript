import { spawn } from 'node:child_process';
import { cp, mkdir, writeFile, rm } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { within } from './catalog.js';
import path from 'node:path';
export class Jobs {
  constructor(root) {
    this.root = root;
    this.current = null;
  }
  async start(lesson, source, edits = {}) {
    if (this.current && !this.current.done) throw new Error('Stop the current run first');
    if (this.current) await rm(this.current.folder, { recursive: true, force: true });
    const folder = path.join(this.root, '.training-work', randomUUID());
    await mkdir(folder, { recursive: true });
    await cp(lesson.folder, folder, { recursive: true });
    for (const [name, value] of Object.entries(edits)) await writeFile(await within(folder, name), value);
    await writeFile(path.join(folder, 'main.js'), source);
    
    
    // Every workspace is explicitly ESM even when the repository lives in another project.
    await writeFile(path.join(folder, 'package.json'), '{"type":"module"}');
    const child = spawn(process.execPath, ['main.js'], { cwd: folder, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true, env: { ...process.env, NODE_OPTIONS: '' } });
    const job = { id: randomUUID(), child, folder, output: '', done: false, code: null };
    this.current = job;
    const append = chunk => {
      job.output = (job.output + chunk).slice(-200000);
    };
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', append);
    child.stderr.on('data', append);
    child.stdin.on('error', () => {
    });
    child.on('error', error => {
      append(error.message);
    });
    child.on('close', (code, signal) => {
      job.done = true;
       job.code = code;
       job.signal = signal;
       clearTimeout(job.timer);
    });
    job.timer = setTimeout(() => {
      append('\n[Stopped after 60 seconds. Run longer programs from a terminal.]\n');
       this.stop();
    }, 60000);
    return this.status();
  }
  status() {
    const j = this.current;
    return j ? { id: j.id, output: j.output, done: j.done, code: j.code, signal: j.signal } : { done: true, output: '' };
  }
  input(text) {
    if (this.current && !this.current.done) this.current.child.stdin.write(text + '\n');
  }
  async stop() {
    const job = this.current;
    if (job && !job.done) await new Promise(resolve => {
      job.child.once('close', resolve);
       job.child.kill();
    });
  }
  async close() {
    const j = this.current;
    if (j && !j.done) await this.stop();
    if (j) await rm(j.folder, { recursive: true, force: true });
  }
}
