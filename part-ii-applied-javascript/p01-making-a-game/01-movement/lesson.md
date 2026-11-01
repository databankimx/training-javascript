# Project 1.1 · Canvas movement

## Learning goal

Project 1.1 · Canvas movement: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Our first game needs a ship that moves where we expect. We’ll get that working before adding anything whose main purpose is to shoot at it.

A game loop reads input, updates state, and renders a frame. requestAnimationFrame schedules rendering near the browser repaint cycle. Multiply velocity by elapsed seconds so movement is not tied to monitor refresh rate. Clamp elapsed time after a paused tab and clamp the ship to the playfield. Click inside the preview before using arrow keys.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

A blue ship moves left and right and stays inside the canvas. Output is graphical.

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
```

## Expected output

```text
A blue ship moves left and right and stays inside the canvas. Output is graphical.
```

## Walk through the example

The key set records current input rather than relying on key-repeat speed. Each frame converts elapsed milliseconds to seconds, clamps a long pause, updates x, and clamps the ship to the canvas. Rendering clears the prior frame and draws the new position. blur clears held keys when focus leaves the preview.

## Try it yourself

Add up/down movement and clamp both coordinates. Explain why dt matters.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
