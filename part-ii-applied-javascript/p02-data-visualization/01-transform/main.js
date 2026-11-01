const rows=[{month:'Jan',hours:12},{month:'Feb',hours:18},{month:'Mar',hours:9},{month:'Apr',hours:21}];
if(!rows.every(row=>typeof row.month==='string'&&Number.isFinite(row.hours)&&row.hours>=0))throw new Error('Invalid row');
const total=rows.reduce((sum,row)=>sum+row.hours,0);
console.log('Total:',total);
console.log('Mean:',total/rows.length);
console.log('Maximum:',Math.max(...rows.map(row=>row.hours)));
