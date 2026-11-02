# S13 · Design and package a library

## Learning goal

S13 · Design and package a library: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We’ve written something reusable. Before publishing it to the world, let’s check what we are actually putting in the package. Surprise contents are best reserved for birthday presents.

A reusable package needs a clear public API, metadata, tests, documentation, and a license. package.json exports defines supported entry points. npm pack --dry-run previews the files that would be packaged without publishing anything. A files allowlist reduces accidental distribution of internal material. Publishing is a separate authenticated action and is not performed by this course.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect javascript-training and hello-world. Inspect package-example.json for packaging metadata.

## Example code

```javascript
import { slug } from './index.js';
console.log(slug(' JavaScript Training '));
console.log(slug('Hello   World'));
```

## Expected output

```text
javascript-training
hello-world
```

## Walk through the example

The example imports slug from the package’s proposed public entry point. package-example.json shows exports and an explicit files list without turning the training repository into a published package. The slug function documents a small whitespace policy; expand that contract before advertising it as a general-purpose URL solution.

## Try it yourself

Add tests for blank input and punctuation. Decide and document whether punctuation is retained or removed. Run npm pack --dry-run only in a disposable package folder after copying package-example.json to package.json.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
