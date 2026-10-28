# S22 · Rock, paper, scissors and rule tables

## Learning goal

S22 · Rock, paper, scissors and rule tables: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Rock beats scissors, scissors beats paper, and paper beats rock. We can write those rules down directly instead of building a conditional maze in their honor.

Separate game rules from input and randomness. A lookup of what each move beats is easier to audit than a long nest of conditions. Validate both moves before comparing them. A pure outcome function can be exhaustively tested because the input domain has only nine pairs.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect win, lose, draw.

## Example code

```javascript
const beats={rock:'scissors',paper:'rock',scissors:'paper'};
function outcome(player,opponent){
  if(!Object.hasOwn(beats,player)||!Object.hasOwn(beats,opponent))throw new Error('Invalid move');
  return player===opponent?'draw':beats[player]===opponent?'win':'lose';
}
console.log(outcome('rock','scissors'));
console.log(outcome('rock','paper'));
console.log(outcome('rock','rock'));
```

## Expected output

```text
win
lose
draw
```

## Walk through the example

The beats record expresses the game rule directly. outcome validates both keys before checking draw or win. The last branch then has a clear meaning: both moves are valid, unequal, and the player does not beat the opponent. That is enough information to return lose.

## Try it yourself

Test all nine pairs. Assert that reversing a non-draw pairing reverses the winner.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
