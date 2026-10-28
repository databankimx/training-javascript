const source={created:new Date('2026-01-01T00:00:00Z'), tags:new Set(['js']), nested:{score:1}};
const copy=structuredClone(source);
copy.nested.score=2;
console.log(source.nested.score,copy.nested.score);
console.log(copy.created instanceof Date,copy.tags instanceof Set);
