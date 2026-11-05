# Homework: serialized search request

Build the request data for a search form. Prevent navigation, call `.serialize()`, and display the URL-encoded result.

```javascript
$("#search").on("submit", function (event) {
  event.preventDefault();
  // Serialize this form.
});
```

```text
term=invoice&category=open
```

## Try it Yourself

Add a checkbox for including archived records. Test both checked and unchecked states and explain why an unchecked checkbox is absent from the serialized request. The spoiler contains a complete solution.

---
