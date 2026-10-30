import { createInterface } from 'node:readline/promises';
const rl = createInterface({ input: process.stdin, output: process.stdout });
try {
  const raw = await rl.question('How many lessons? ');
  const count = Number(raw);
  if (!raw.trim() || !Number.isInteger(count) || count < 0) throw new Error('Enter a nonnegative integer');
  console.log(`Plan: ${count} lessons`);
}finally {
  rl.close();
}
