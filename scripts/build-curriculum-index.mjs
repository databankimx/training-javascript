// Writes resources/curriculum-index.json from the lesson folders, using the same discovery as the runner.
// Run it after adding, renaming, or removing lessons:
//
//   node scripts/build-curriculum-index.mjs

import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { discover } from '../lesson-runner-web/catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lessons = await discover(root);

const index = lessons.map(lesson => ({
  part: lesson.part,
  chapter: lesson.chapter,
  step: lesson.id.split('/').slice(2).join('/'),
  title: lesson.title,
  runtime: lesson.runtime,
}));

await writeFile(path.join(root, 'resources', 'curriculum-index.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');
console.log(`Wrote ${index.length} lesson entries to resources/curriculum-index.json.`);
