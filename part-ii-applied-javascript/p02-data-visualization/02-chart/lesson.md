# Project 2.2 · Draw a scaled bar chart

## Learning goal

Project 2.2 · Draw a scaled bar chart: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We’ll turn values into bar heights. The arithmetic is simple enough, provided we remember that a canvas counts downward from the top left.

This stage maps values to pixel coordinates. The browser canvas has an origin at the top left, so bar y positions subtract height from a common baseline. A zero baseline preserves meaningful comparisons of bar lengths. Use a fallback maximum of one for all-zero data to avoid division by zero. Canvas alone is not a readable data table for assistive technology, so provide a textual alternative.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Four bars show 12, 18, 9, and 21 hours, with month and value labels and a textual summary.

## Example code

```javascript
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
```

## Expected output

```text
Four bars show 12, 18, 9, and 21 hours, with month and value labels and a textual summary.
```

## Walk through the example

max supplies a shared value-to-pixel scale. Each row determines its bar height and its y coordinate relative to the same baseline. Labels show the original values, and the paragraph provides a textual alternative. The fallback maximum handles an all-zero dataset without division by zero.

## Try it yourself

Add units to the chart and test all-zero data. Explain why the scale should start at zero.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
