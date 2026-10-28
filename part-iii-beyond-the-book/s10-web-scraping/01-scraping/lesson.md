# S10 · DOM extraction and scraping boundaries

## Learning goal

S10 · DOM extraction and scraping boundaries: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The information is already in some HTML, and we need to extract it. The DOM gives us a structure to query, which seems preferable to negotiating with angle brackets by hand.

Extract structured information using selectors and the DOM rather than a regular expression over HTML. Browser DOMParser parses a document without adding it to the visible page. Public-site scraping also involves permissions, rate limits, and changing markup; this offline fixture isolates selector behavior. Node does not supply DOMParser, which is why this lesson uses the browser.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

The preview lists Notebook at 12 and Pen at 4. No network request occurs.

## Example code

```javascript
const html = '<ul><li class="product" data-price="12">Notebook</li><li class="product" data-price="4">Pen</li></ul>';
const doc = new DOMParser().parseFromString(html,'text/html');
const products = [...doc.querySelectorAll('.product')].map(node => ({name:node.textContent.trim(), price:Number(node.dataset.price)}));
document.querySelector('#app').textContent = JSON.stringify(products, null, 2);
console.log(products);
```

## Expected output

```text
The preview lists Notebook at 12 and Pen at 4. No network request occurs.
```

## Walk through the example

DOMParser turns the offline HTML string into a detached document. The selector finds product nodes, and each mapping extracts text and a data attribute. The preview renders the resulting records as text. A missing attribute must be checked before conversion, because converting it can erase the distinction between missing and zero.

## Try it yourself

Add a product with a missing data-price attribute and reject it rather than silently treating it as a valid amount.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
