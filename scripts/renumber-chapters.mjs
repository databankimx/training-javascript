// One-time migration: rewrites chapter folder names after the chapter renumbering.
// Dry run by default. Pass --write to change files.
//
//   node scripts/renumber-chapters.mjs          # list the files that would change
//   node scripts/renumber-chapters.mjs --write  # change them
//
// Every old name is replaced in a single pass, so a chapter's new number is never changed again.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const write = process.argv.includes('--write');

// Old chapter folder name -> new chapter folder name.
const renames = new Map([
  ['ch18-dynamic-forms', 'ch18-dynamic-forms'],
  ['ch19-recursion', 'ch19-recursion'],
  ['ch20-regular-expressions', 'ch20-regular-expressions'],
  ['ch21-complexity', 'ch21-complexity'],
  ['ch22-bitwise-operations', 'ch22-bitwise-operations'],
  ['ch23-closures', 'ch23-closures'],
  ['ch24-internationalized-formatting', 'ch24-internationalized-formatting'],
  ['ch25-typed-arrays', 'ch25-typed-arrays'],
  ['ch26-iterators-and-generators', 'ch26-iterators-and-generators'],
  ['ch27-functional-tools', 'ch27-functional-tools'],
  ['ch28-foundations', 'ch28-foundations'],
  ['ch29-selectors', 'ch29-selectors'],
  ['ch30-events-and-dom', 'ch30-events-and-dom'],
  ['ch31-content-and-state', 'ch31-content-and-state'],
  ['ch32-ajax', 'ch32-ajax'],
  ['ch33-plugins', 'ch33-plugins'],
  ['ch34-gl-forms', 'ch34-gl-forms'],
  ['ch35-maintenance', 'ch35-maintenance'],
  ['ch36-capstone', 'ch36-capstone'],
]);

// Longest names first, so a name that contains another is matched whole.
const pattern = new RegExp([...renames.keys()].sort((a, b) => b.length - a.length).join('|'), 'g');
const skipFolders = new Set(['node_modules', '.git', '.npm-cache', '.training-work']);
const textFiles = /\.(json|md|js|mjs|html|css|ps1|txt)$/i;

async function* walk(folder) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!skipFolders.has(entry.name)) yield* walk(path.join(folder, entry.name));
    } else if (textFiles.test(entry.name) && entry.name !== 'package-lock.json') {
      yield path.join(folder, entry.name);
    }
  }
}

let changed = 0;
for await (const file of walk(root)) {
  const text = await readFile(file, 'utf8');
  const updated = text.replace(pattern, name => renames.get(name));
  if (updated !== text) {
    changed += 1;
    console.log(`${write ? 'Changed' : 'Would change'}: ${path.relative(root, file)}`);
    if (write) await writeFile(file, updated, 'utf8');
  }
}
console.log(`${changed} file(s) ${write ? 'changed' : 'would change'}.${write ? '' : ' Run with --write to apply.'}`);
