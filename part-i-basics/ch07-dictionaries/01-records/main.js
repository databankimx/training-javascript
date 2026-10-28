const person = { name: 'Ada', team: 'Training' };
const { name } = person;
const counts = new Map();
for (const language of ['JS', 'Python', 'JS']) counts.set(language, (counts.get(language) ?? 0) + 1);
console.log(name);
console.log([...counts]);
console.log([...new Set(['JS','JS','SQL'])]);
