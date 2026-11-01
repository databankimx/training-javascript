import { readdir, readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
export const parts = ['part-i-basics', 'part-ii-applied-javascript', 'part-iii-beyond-the-book'];
export async function discover(root) {
  const lessons = [];
  async function walk(folder) {
    for (const entry of (await readdir(folder, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
      if (entry.isSymbolicLink()) continue;
      const full = path.join(folder, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name === 'lesson.json') {
        const meta = JSON.parse(await readFile(full, 'utf8'));
        const id = path.relative(root, folder).split(path.sep).join('/');
        if (!meta.title || !['node', 'browser'].includes(meta.runtime)) throw new Error(`Invalid lesson: ${id}`);
        lessons.push({ ...meta, id, part: id.split('/')[0], chapter: id.split('/')[1], folder });
      }
    }
  }
  for (const part of parts) await walk(path.join(root, part));
  return lessons;
}
export async function within(root, filename) {
  const base = await realpath(root);
  const target = await realpath(path.resolve(root, filename));
  const relative = path.relative(base, target);
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) throw new Error('Path is outside the lesson');
  return target;
}
export async function filesFor(lesson) {
  const files = [];
  async function walk(folder) {
    for (const entry of await readdir(folder, { withFileTypes: true })) {
      if (entry.isSymbolicLink()) continue;
      const full = path.join(folder, entry.name);
      if (entry.isDirectory()) await walk(full);
      else files.push(path.relative(lesson.folder, full).split(path.sep).join('/'));
    }
  }
  await walk(lesson.folder);
  return files.sort();
}
