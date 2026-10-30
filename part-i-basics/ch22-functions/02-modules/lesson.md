# 10 · ES modules and reusable code

## Learning goal

10 · ES modules and reusable code: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Once we’ve written a useful function, we should be able to use it somewhere else. Copying it into twelve files technically achieves that, but I’d rather leave the future bug fixes in one place.

An ES module explicitly exports its public interface. Import named bindings with braces and use a relative path with a file extension for local modules in Node. Each module has its own scope and executes once per process for a resolved module URL. This repo declares type: module, so .js files use ESM. Avoid mixing require and import while learning one module model.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 32 and 212. Select temperature.js in Source to inspect the exported function.

## Example code

```javascript
import { celsiusToFahrenheit } from './temperature.js';
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
```

## Expected output

```text
32
212
```

## Walk through the example

main.js imports a named function from temperature.js. The relative path and .js extension identify the local module. The helper owns the conversion formula, and main.js owns these two demonstrations. Edit the support module through Source and observe that the caller uses the changed implementation on its next run.

## Try it yourself

Add a fahrenheitToCelsius export to temperature.js using the Source file selector. Verify the round trip at 0 and 100 Celsius.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
