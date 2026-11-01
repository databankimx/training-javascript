const rows=[{month:'Jan',hours:12},{month:'Feb',hours:18},{month:'Mar',hours:9},{month:'Apr',hours:21}];
const app=document.querySelector('#app');
const canvas=document.createElement('canvas');
canvas.width=480;
canvas.height=300;
app.append(canvas);
const ctx=canvas.getContext('2d');
const max=Math.max(1,...rows.map(row=>row.hours));
rows.forEach((row,i)=>{
  const height=row.hours/max*200;
  ctx.fillStyle='#1565c0';
  ctx.fillRect(35+i*110,240-height,60,height);
  ctx.fillStyle='#182330';
  ctx.fillText(row.month,45+i*110,265);
  ctx.fillText(String(row.hours),45+i*110,230-height);
});
const summary=document.createElement('p');
summary.textContent=rows.map(row=>row.month+': '+row.hours+' hours').join('; ');
app.append(summary);
