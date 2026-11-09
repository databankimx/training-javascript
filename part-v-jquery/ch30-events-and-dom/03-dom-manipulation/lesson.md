# Creating and changing elements

jQuery can create an element from an HTML string, change its text or attributes, append it to the page, and remove it later. That makes it useful for small dynamic pieces of UI. It also gives us enough rope to create malformed or unsafe markup, so the source of inserted content matters.

---

```javascript
const note = $(`<li class="note">Note ${number}<button class="delete" type="button">Delete</button></li>`);
$("#notes").append(note);

$(this).closest(".note").remove();
```

The first line creates a jQuery object containing a new `li`. `.append(...)` inserts it inside the list. The delegated delete handler finds the nearest note and removes it. For user-provided text, create elements and assign `.text(...)` instead of treating the text as trusted HTML.

```text
Note 1
Note 2
```

| Method | Purpose |
| --- | --- |
| `.append(...)` | Add content at the end |
| `.prepend(...)` | Add content at the beginning |
| `.before(...)` / `.after(...)` | Insert beside an element |
| `.attr(name, value)` | Read or write an attribute |
| `.text(value)` | Set safe text content |
| `.remove()` | Remove the selected elements |

---

## Try it Yourself

Add an edit button that changes a note's text. Give every generated button an accessible name. Then change the script so a note supplied by the user is inserted with `.text(...)`, not by concatenating untrusted text into an HTML string.

---

## More Background

- [jQuery manipulation](https://api.jquery.com/category/manipulation/)
- [OWASP: Cross Site Scripting Prevention](https://owasp.org/www-community/attacks/xss/)

---
