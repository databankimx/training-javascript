const grid=[[0,0,0],[1,1,1],[0,0,0]];
function step(grid){
  return grid.map((row,y)=>row.map((alive,x)=>{
    let neighbors=0;
    for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)if(dx||dy)neighbors+=grid[y+dy]?.[x+dx]??0;
    return Number(neighbors===3 || (alive && neighbors===2));
  }));
}
console.log(step(grid).map(row=>row.join('')).join('\n'));
