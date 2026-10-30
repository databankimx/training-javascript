import { setTimeout as delay } from 'node:timers/promises';
console.log('start');
const pending = Promise.resolve().then(() => console.log('microtask'));
console.log('sync');
await pending;
const results = await Promise.all([delay(10,'A'), delay(5,'B')]);
console.log(results.join(', '));
