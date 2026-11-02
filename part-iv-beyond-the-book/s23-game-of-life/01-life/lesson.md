# S23 · Game of Life and simultaneous updates

## Learning goal

S23 · Game of Life and simultaneous updates: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Every cell decides its next state from the same current generation. Updating the board as we go gives later cells privileged information, which seems unfair even by cellular standards.

Conway’s Game of Life updates a grid from neighbor counts. A live cell survives with two or three neighbors; a dead cell becomes live with three. Compute a separate next grid, because mutating the current grid while counting neighbors makes results depend on traversal order. This version treats cells outside the bounded grid as dead.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect three rows of 010: a horizontal blinker becomes vertical.

## Example code

```javascript
const grid=[[0,0,0],[1,1,1],[0,0,0]];
function step(grid){
  return grid.map((row,y)=>row.map((alive,x)=>{
    let neighbors=0;
    for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)if(dx||dy)neighbors+=grid[y+dy]?.[x+dx]??0;
    return Number(neighbors===3 || (alive && neighbors===2));
  }));
}
console.log(step(grid).map(row=>row.join('')).join('\n'));
```

## Expected output

```text
010
010
010
```

## Walk through the example

For each position, the nested loops inspect eight neighbors while optional chaining handles the boundary. The rule returns a numeric zero or one into a new grid. The current grid remains intact throughout the calculation, so every cell sees the same generation.

## Try it yourself

Advance two generations and compare with the initial grid. Add a still-life 2×2 block inside a larger grid.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
