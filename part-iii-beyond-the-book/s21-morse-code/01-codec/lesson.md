# S21 · Morse code and codecs

## Learning goal

S21 · Morse code and codecs: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Encoding a message means agreeing on both the symbols and the separators. Leaving out the separators saves a little space and introduces a fairly substantial interpretation problem.

A codec transforms a representation in both directions under documented rules. A lookup Map makes an encoding table explicit. Unsupported characters need a policy; silently dropping them destroys information. Delimiters are part of the format, because concatenating variable-length codes without separators is ambiguous. This deliberately small alphabet keeps the decoding rules visible.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect ... --- ... . Only S, O, A, and T are supported in this starter.

## Example code

```javascript
const codes=new Map([['S','...'],['O','---'],['A','.-'],['T','-']]);
function encode(text){
  return [...text.toUpperCase()].map(char=>{
    if(!codes.has(char))throw new Error('Unsupported: '+char);
    return codes.get(char);
  }).join(' ');
}
console.log(encode('SOS'));
```

## Expected output

```text
... --- ...
```

## Walk through the example

The encoding table maps each supported letter to its code. The function normalizes case, rejects an unsupported character, and joins codes with spaces. Building the reverse map lets the decoder apply the same table in the other direction, provided the delimiter policy stays unambiguous.

## Try it yourself

Build a reverse map and decode the output back to SOS. Define how spaces between words would work.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
