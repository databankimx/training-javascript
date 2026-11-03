# Working with data attributes

Sometimes an element needs a small piece of data that JavaScript can use, but that data is not meant to be displayed as text. HTML gives us `data-*` attributes for that job. A product button can carry an ID and price without hiding those values in a fragile string or making a second lookup table.

```html
<button class="product" data-product-id="A12" data-price="19.99" type="button">Notebook</button>
```

```javascript
button.addEventListener("click", () => {
  status.textContent = `Product ${button.dataset.productId}: $${button.dataset.price}`;
});
```

```text
Product A12: $19.99
```

The browser exposes `data-product-id` as `button.dataset.productId`. Hyphenated attribute names become camelCase property names. Values arrive as strings, so convert them with `Number()` before doing arithmetic.

> `data-*` attributes store custom metadata on an HTML element.
>
> `dataset` reads and writes that metadata using JavaScript property names.

---

## Try it Yourself

Add a quantity field. Read the selected button's `data-price`, convert it to a number, and display a calculated line total. Then add a `data-category` attribute and include it in the message.

---

## More background

See [MDN: HTML data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes).

---
