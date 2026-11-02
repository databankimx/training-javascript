const rows = [{team:'A',hours:2},{team:'B',hours:3},{team:'A',hours:4}];
const totals = new Map();
for (const row of rows) totals.set(row.team,(totals.get(row.team) ?? 0)+row.hours);
console.log(Object.fromEntries(totals));
console.log(rows.filter(row => row.hours >= 3).length);
