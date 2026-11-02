# Dynamic rows with Vue

The third approach keeps the row data in an array and lets a framework render the table. Vue's `v-for` repeats the row template, `v-model` keeps inputs synchronized with each object, and `push` or `splice` changes the array. Vue then updates the DOM for us.

```html
<tr v-for="(line, index) in lines" :key="index">
  <td><input v-model="line.poNumber"></td>
  <td><input v-model="line.glCode"></td>
  <td><input v-model="line.amount"></td>
</tr>
```

```javascript
addLine() {
  this.lines.push({ poNumber: "", glCode: "", amount: 0, description: "" });
}
```

```text
Vue renders one row from the array.
Add line appends another object and Vue renders another row.
```

> `v-for` repeats a template for each item.
>
> `v-model` creates two-way binding between a control and an object property.
>
> `:name` and `@click` are Vue's shorthand for binding attributes and events.

Vue is a modern solution, not a requirement. It adds a dependency and a different way of thinking, but it becomes attractive when a form has enough dynamic behavior that manual DOM rebuilding is harder to maintain.

---

## Try it Yourself

Add a currency input component or a formatted total. Keep the hidden `glLines` field synchronized so the form still has a serialized representation for the OnBase save workflow.

---

## More background

The reference example is `062-coding-form-dynamic-rows-vue.html`. This lesson uses Vue from a CDN, as the reference does, while replacing the jQuery setup with Vue's own bindings.

---
