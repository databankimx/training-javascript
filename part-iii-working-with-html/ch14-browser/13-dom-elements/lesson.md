# Creating and adding elements

So far, we have selected elements that were already in the HTML. Real pages also create content while they are running. A dashboard adds a warning, a status page adds a notice, and a task list adds one more thing for somebody to forget. The pattern is the same: create an element, give it content, and append it to the part of the document that should contain it.

```javascript
const notices = document.querySelector("#notices");
const addButton = document.querySelector("#add-notice");

addButton.addEventListener("click", () => {
  const notice = document.createElement("article");
  const heading = document.createElement("h2");
  const detail = document.createElement("p");

  heading.textContent = "Backup complete";
  detail.textContent = "The nightly backup finished without errors.";
  notice.append(heading, detail);
  notices.append(notice);
});
```

The button handler creates an `article`, then creates its heading and paragraph. `append()` puts both child elements inside the article before the article is added to the notice area. `textContent` treats each value as text rather than interpreting it as HTML, which is the safer default when the value came from a user or a service.

```text
Before clicking: no notices are visible
After clicking: a Backup complete notice appears
```

> `document.createElement("article")` creates a new element in memory.
>
> `textContent` sets the text inside an element.
>
> `append()` adds a node at the end of its parent.

The element name passed to `createElement()` is not limited to `article`. The same pattern can create a heading, link, image, list item, table row, or almost any other HTML element. The browser does not care whether we are building a grand dashboard or one modest paragraph. It still wants us to create the element, set its useful properties, and put it somewhere in the document.

```javascript
const link = document.createElement("a");
link.textContent = "Read the status details";
link.href = "/status";
link.classList.add("status-link");
notices.append(link);
```

Here we create an anchor, give it visible text, set its destination, and add a class for styling. Setting properties directly is appropriate for values such as `href`, while `textContent` remains the safe choice for text supplied by a user or service.

---

## Try it Yourself

Change the handler so each click adds a different notice. You might keep the headings and details in an array and use the next pair each time. Then add a dismiss button inside each article and remove that article when the button is clicked.

---

## More background

See [MDN: `Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), [MDN: `Node.append()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append), and [MDN: `textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).

---
