# Project 1.2 · Bullets and collisions

## Learning goal

Project 1.2 · Bullets and collisions: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Now the ship can fire and the targets can be hit. We’ll keep track of exactly when things disappear, because removing array elements while we walk through them has a few opinions of its own.

This stage adds bullets, a fixed alien row, and rectangle collision tests. Update positions before testing overlaps, mark hits, then filter removed entities. Separating iteration from deletion avoids skipping array elements. A firing cooldown limits the number of bullets independently of frame rate. The rectangle test intentionally treats touching edges as no overlap.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Arrow keys move; Space fires. Aliens disappear when hit. The previous stage had movement only; inspect bullets, aliens, and overlaps for the new behavior.

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
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
```

## Expected output

```text
Arrow keys move; Space fires. Aliens disappear when hit. The previous stage had movement only; inspect bullets, aliens, and overlaps for the new behavior.
```

## Walk through the example

The frame updates movement and a firing cooldown before moving bullets. For each bullet, find selects one live overlapping alien, then marks both objects for removal. Filtering runs after hit detection, keeping iteration stable. Inspect overlaps separately with known rectangles before changing the game loop.

## Try it yourself

Count a hit only once even when two bullets overlap the same alien in a frame. Add a test for rectangles that just touch.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
