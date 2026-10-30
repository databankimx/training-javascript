# Vanilla JavaScript and jQuery comparisons

This course teaches vanilla JavaScript with read-only jQuery comparisons. No runnable lesson loads jQuery. DataBank uses jQuery in existing applications; understanding native behavior helps developers read and maintain those applications. The later jQuery course will implement comparable features using the library.

## The comparison method

Identify the intended behavior, input/output types, lifecycle timing, missing-element behavior, event semantics, and side effects. Similar-looking snippets are not necessarily equivalent. Check the target application's jQuery and plugin versions before adopting an API.

## Readiness: the first essential distinction

window.onload = function () {...} waits for page resources and replaces an earlier property handler. $(document).ready(function () {...}) runs when the DOM is ready and can register after readiness. Use a readyState guard plus DOMContentLoaded for late-safe vanilla initialization. A type=module script is deferred; many course examples therefore initialize directly after their HTML is parsed.

## Where to find comparisons

- 15 · DOM, events, and safe text  -  part-i-basics/ch26-javascript-hosts/02-dom
- 16 · HTTP, fetch, and response validation  -  part-i-basics/ch26-javascript-hosts/03-fetch
- 17 · DOM readiness and page load  -  part-i-basics/ch26-javascript-hosts/04-readiness
- 18 · DOM elements versus jQuery collections  -  part-i-basics/ch26-javascript-hosts/05-selection
- 19 · Event delegation and handler semantics  -  part-i-basics/ch26-javascript-hosts/06-delegation
- 21 · Hide and show a section  -  part-i-basics/ch27-interactive-html/02-hide-show
- 22 · Accessible accordions  -  part-i-basics/ch27-interactive-html/03-accordion
- 23 · Conditional form sections  -  part-i-basics/ch27-interactive-html/04-conditional-fields
- 24 · Form validation and computed values  -  part-i-basics/ch27-interactive-html/05-validation
- 25 · Dynamic tables with delegated events  -  part-i-basics/ch27-interactive-html/06-dynamic-tables
- 26 · Sort and filter a dynamic table  -  part-i-basics/ch27-interactive-html/07-sort-filter
- 27 · Templates, cloning, and unique identifiers  -  part-i-basics/ch27-interactive-html/08-templates
- 28 · Dialogs, focus, and note entry  -  part-i-basics/ch27-interactive-html/09-dialogs
- 29 · Coding form integration lab  -  part-i-basics/ch27-interactive-html/10-coding-form
- Project 3.1 · A Learning Log model and view  -  part-ii-projects/p03-learning-log/01-model
- Project 3.2 · Export and import persistence  -  part-ii-projects/p03-learning-log/02-persistence
- Project 3.3 · Deletion, empty states, and review  -  part-ii-projects/p03-learning-log/03-deletion

## Keep separate for the jQuery course

Teach selectors and collection behavior, getter/setter conventions, .each(), .on()/.off() and namespaces, traversal, .data() versus dataset, Ajax/jqXHR, plugin authoring, and approved plugins. jQuery UI accordion/dialog and DataTables are separate libraries. None is needed to run the vanilla course.

## Official references

- [jQuery ready](https://api.jquery.com/ready/)
- [jQuery on](https://api.jquery.com/on/)
- [jQuery Ajax](https://api.jquery.com/jQuery.ajax/)
- [jQuery prop](https://api.jquery.com/prop/)
- [jQuery val](https://api.jquery.com/val/)
- [MDN DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
