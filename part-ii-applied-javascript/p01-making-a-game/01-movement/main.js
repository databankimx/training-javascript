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
let previous=performance.now();
function frame(now){
  const dt=Math.min((now-previous)/1000,0.05);
  previous=now;
  ship.x+=((keys.has('ArrowRight')?1:0)-(keys.has('ArrowLeft')?1:0))*240*dt;
  ship.x=Math.max(0,Math.min(canvas.width-ship.width,ship.x));
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#1565c0';
  ctx.fillRect(ship.x,ship.y,ship.width,ship.height);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
