# Traversing the DOM

Selecting an element is often only the first step. Forms, tables, lists, and older widgets are nested structures, so the element we found may not be the element we need to change. DOM traversal means moving from one element to related elements: up to a parent, down to children, or sideways to a nearby match.

This lesson uses a list of people. Click a name, then watch the status message describe the selected button, its containing row, and the number of rows in the list.

```html
<ul id="people" aria-label="People">
  <li class="person"><button type="button" data-name="Ada">Ada</button></li>
  <li class="person"><button type="button" data-name="Grace">Grace</button></li>
</ul>
```

```javascript
const people = document.querySelector("#people");
const status = document.querySelector("#status");

function describePerson(event) {
  const button = event.target.closest("button");
  if (!button || !people.contains(button)) return;

  const row = button.parentElement;
  const buttonsInList = people.querySelectorAll("button");
  let childCount = 0;

  row.parentElement.querySelectorAll(":scope > li").forEach(() => {
    childCount += 1;
  });

  status.textContent = `Selected: ${button.dataset.name}; Parent: ${row.parentElement.id}; Children: ${childCount}`;
  console.log(status.textContent);
  console.log(`Buttons in list: ${buttonsInList.length}`);
}

people.addEventListener("click", describePerson);
```

The click begins at the button, but the handler uses the surrounding DOM structure:

| Expression | What it does |
| --- | --- |
| `event.target` | The element where the event began |
| `closest("button")` | Finds the nearest matching button, including the target itself |
| `parentElement` | Moves up to the immediate containing element |
| `contains(button)` | Confirms that the button belongs to this list |
| `querySelectorAll("button")` | Finds all matching descendants inside the selected list |
| `:scope > li` | Finds only the list’s direct child rows |
| `forEach(...)` | Runs code once for every matched element |

```text
Selected: Ada; Parent: people; Children: 2
Buttons in list: 2
```

`querySelector` and `querySelectorAll` can be called on any element, not only on `document`. Calling them on `people` limits the search to that list instead of searching the entire page. The `:scope` selector makes the relationship explicit: we want direct children of the current element, not nested list items several levels down.

> `closest(selector)` walks upward until it finds the nearest matching ancestor.
>
> `parentElement` moves one level upward in the DOM.
>
> `children` exposes an element’s direct child elements. It does not include text nodes.

## Event subscriptions are also relationships

When we add a listener, we should be able to remove it when the component is destroyed or rebuilt:

```javascript
function temporaryNotice() {
  console.log("Temporary notice");
}

people.addEventListener("click", temporaryNotice);
people.removeEventListener("click", temporaryNotice);
```

The same function reference must be supplied to both calls. Writing two identical anonymous functions does not work because they are two different function objects. This is one reason event delegation and careful initialization are useful: they reduce the number of subscriptions that need to be tracked.

## A legacy positioning warning

Older browser code, including date pickers and other widgets, sometimes walks the DOM to calculate an element’s position. Changes to the DOM and browser behavior in IE 10 and Chrome exposed assumptions in that code about which element was the page’s top-level positioning context. A widget that starts from the wrong DOM element can place itself in the wrong location or calculate offsets incorrectly.

> When maintaining a legacy widget, verify which element is the correct top DOM element for position calculations. Do not assume that a traversal written for an older browser still finds the same coordinate origin in IE 10, Chrome, or a modern standards-mode document.

This is not a reason to avoid traversal. It is a reason to understand what each step means, especially when the code is calculating coordinates rather than simply finding a parent or child.

## Try it Yourself

Add a third person. Use `closest("li")` to find the row directly instead of using `parentElement`, then add a class to that row. Finally, remove and re-add the click handler using the same named function reference.

## More background

See [MDN: Element.closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest), [MDN: parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement), [MDN: Element.children](https://developer.mozilla.org/en-US/docs/Web/API/Element/children), and [MDN: removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).

---
