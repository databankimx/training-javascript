# Serialize a form

Forms often need to become request data. jQuery's `.serialize()` reads successful named controls and produces URL-encoded form data suitable for a traditional request.

---

```javascript
$("#search-form").on("submit", function (event) {
  event.preventDefault();
  const query = $(this).serialize();
  $("#output").text(query);
});
```

The form's `name` attributes become keys. With the starter values, the result is:

```text
term=jQuery&kind=lesson
```

> **Successful control** means a named form control whose current state contributes to submission. An unchecked checkbox, for example, is not included in serialized form data.

In a real request, the serialized string might be sent with `$.get("/api/search", query)` or as the body of a form-style `POST`. If the service expects JSON, serialize into an object instead and send JSON deliberately.

---

## Try it Yourself

Add a checkbox and an unchecked radio button. Change their state and observe which values appear. Then compare `.serialize()` with `.serializeArray()`.

---

## More Background

- [jQuery `.serialize()`](https://api.jquery.com/serialize/)
- [jQuery `.serializeArray()`](https://api.jquery.com/serializeArray/)

---
