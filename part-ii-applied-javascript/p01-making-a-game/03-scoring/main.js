const app=document.querySelector('#app');
const canvas=document.createElement('canvas');
canvas.width=480;
canvas.height=320;
app.append(canvas);
const ctx=canvas.getContext('2d');
let ship={x:220,y:280,width:30,height:15};
const keys=new Set();
addEventListener('keydown',e=>{
  if(['ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();
  keys.add(e.code);
});
addEventListener('keyup',e=>keys.delete(e.code));
addEventListener('blur',()=>keys.clear());
let bullets=[],aliens=[60,150,240,330,420].map(x=>({x,y:50,width:24,height:18}));
let previous=performance.now(),cooldown=0,score=0;
const overlaps=(a,b)=>a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y;
function frame(now){
  const dt=Math.min((now-previous)/1000,0.05);
  previous=now;
  cooldown-=dt;
  ship.x=Math.max(0,Math.min(450,ship.x+((keys.has('ArrowRight')?1:0)-(keys.has('ArrowLeft')?1:0))*240*dt));
  if(keys.has('Space')&&cooldown<=0){
    bullets.push({x:ship.x+13,y:ship.y,width:4,height:10});
    cooldown=0.2;
  }
  for(const bullet of bullets)bullet.y-=300*dt;
  for(const bullet of bullets){
    const hit=aliens.find(alien=>!alien.dead&&overlaps(bullet,alien));
    if(hit){
      hit.dead=true;
      bullet.dead=true;
      score+=10;
    }
  }
  bullets=bullets.filter(b=>!b.dead&&b.y>-10);
  aliens=aliens.filter(a=>!a.dead);
  ctx.clearRect(0,0,480,320);
  ctx.fillStyle='#1565c0';
  ctx.fillRect(ship.x,ship.y,30,15);
  ctx.fillStyle='#b43a32';
  for(const a of aliens)ctx.fillRect(a.x,a.y,a.width,a.height);
  ctx.fillStyle='#182330';
  for(const b of bullets)ctx.fillRect(b.x,b.y,b.width,b.height);
  ctx.fillStyle='#182330';
  ctx.fillText('Score: '+score,10,20);
  if(!aliens.length)ctx.fillText('Cleared! Press R to restart.',140,160);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
addEventListener('keydown',event=>{
  if(event.code==='KeyR'){
    score=0;
    bullets=[];
    aliens=[60,150,240,330,420].map(x=>({x,y:50,width:24,height:18}));
    ship.x=220;
    cooldown=0;
  }
});
