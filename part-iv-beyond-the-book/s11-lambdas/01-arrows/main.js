const items = [1,2,3];
const doubled = items.map(n => n * 2);
const records = items.map(id => ({id, active:true}));
console.log(doubled);
console.log(records[0]);
