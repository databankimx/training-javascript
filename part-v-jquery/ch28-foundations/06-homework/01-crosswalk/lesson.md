# Homework: vanilla and jQuery crosswalk

The lessons showed the same basic page update in two styles. Now build that comparison yourself.

The starter page has two buttons and one status paragraph. Bind the first button with `addEventListener` and the second with jQuery `.on(...)`. Each handler should update the status text and write a different message to the console.

```javascript
const status = document.querySelector("#status");

// Add one native handler and one jQuery handler here.
```

```text
native handler ran
jQuery handler ran
```

## Try it Yourself

Add a second native button that toggles a CSS class, then add a jQuery button that does the same job with `.toggleClass(...)`. Explain which version works with a native element and which version works with a jQuery object.

The spoiler contains a complete implementation. Try your own version first, because copying the answer is an excellent way to become very familiar with someone else's typing.

---
