# Project 1.3 · Scoring and restart

## Learning goal

Project 1.3 · Scoring and restart: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A score gives us a reason to keep playing, and a restart gives us a reason to check whether we reset all the state. Those are surprisingly different jobs.

This stage displays the score and provides a restart transition after clearing the row. A reset must restore every relevant state variable, not only the visible entities. Keep the restart event outside the animation loop so a new listener is not added every frame. This small game is a complete practice project; extensions include moving aliens, lives, and levels.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Each alien scores 10. Clear all five for 50 points, then press R to restore the game.

## Example code

```javascript
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
```

## Expected output

```text
Each alien scores 10. Clear all five for 50 points, then press R to restore the game.
```

## Walk through the example

The score increases at the successful-hit boundary, then rendering displays it. A cleared row displays a restart instruction. The R listener is registered once outside frame and restores the model. If we later add levels or lives, those values need an explicit place in the reset transition too.

## Try it yourself

Add a level counter and spawn a new row when cleared. Reset the level to 1 on R.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
