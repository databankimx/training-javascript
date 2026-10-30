import { readFile, writeFile } from 'node:fs/promises';
const filename = new URL('./progress.json', import.meta.url);
await writeFile(filename, JSON.stringify({ completed: ['hello'] }, null, 2));
try {
  const progress = JSON.parse(await readFile(filename, 'utf8'));
  console.log(progress.completed.join(', '));
}catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
