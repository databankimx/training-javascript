# Dynamic rows with Vue

The third approach keeps the row data in an array and lets a framework render the table. Vue does not remove the OnBase constraint by itself. The hidden serialized field still has to exist in the original HTML if the platform must retrieve the data. Vue is useful because it keeps the editable view and the array synchronized after the page has loaded.

## Repeat a row template

In the plain-JavaScript examples, we created each `tr`, `td`, and `input` by hand. Vue lets us describe one row and repeat it for every item in `lines`.

```html
<table>
  <tbody>
    <tr v-for="(line, index) in lines" :key="line.id">
      <td>
        <input v-model="line.poNumber" :name="'OBKey__po_' + (index + 1)" aria-label="Purchase order number">
      </td>
      <td>
        <input v-model="line.glCode" :name="'OBKey__gl_' + (index + 1)" aria-label="GL code">
      </td>
      <td>
        <input v-model="line.amount" type="number" aria-label="Amount">
      </td>
      <td>
        <input v-model="line.description" aria-label="Description">
      </td>
      <td><button type="button" @click="removeLine(index)">Remove</button></td>
    </tr>
  </tbody>
</table>
```

`v-for` repeats the row for each object. `:key` gives Vue a stable identity for each row, which matters when rows are added or removed. `v-model` keeps each input and object property synchronized. The `:name` binding creates the names required by the form processor, and `@click` binds the button event without putting an inline `onclick` attribute into the HTML.

## Add and remove objects

```javascript
const app = Vue.createApp({
  data() {
    return {
      nextId: 1,
      lines: []
    };
  },
  methods: {
    addLine() {
      this.lines.push({
        id: this.nextId++,
        poNumber: "",
        glCode: "",
        amount: 0,
        description: ""
      });
    },
    removeLine(index) {
      this.lines.splice(index, 1);
    }
  }
});

app.mount("#coding-form");
```

`push()` adds an object to the array, and `splice()` removes one. Vue observes those changes and updates the table. We do not call `replaceChildren()`, recreate every cell, or manually rebind every button after each edit. That is the convenience we are paying the framework to provide.

## Calculate a formatted total

Vue can expose a computed value for information derived from the row array.

```javascript
computed: {
  total() {
    return this.lines
      .reduce((sum, line) => sum + (Number(line.amount) || 0), 0)
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
  }
}
```

The template can display `{{ total }}`. The total changes when a bound amount changes because Vue knows that the computed value depends on `lines`.

## Keep the OnBase bridge

The hidden field remains part of the original HTML. A watcher or submit handler can serialize the array into it.

```javascript
watch: {
  lines: {
    deep: true,
    handler(value) {
      document.querySelector("#glLines").value = JSON.stringify(value);
    }
  }
}
```

On load, the app should parse `glLines` before mounting and use the result as its initial `lines` array. In a real implementation, we would also validate the data, escape displayed values through normal Vue bindings, and avoid trusting arbitrary JSON from the page.

> `v-for` repeats a template for each item.
>
> `v-model` creates two-way binding between a control and an object property.
>
> `:name` binds an HTML attribute to a JavaScript expression.
>
> `@click` binds an event handler. It is Vue shorthand for `v-on:click`.
>
> A computed property is a value Vue recalculates when the data it uses changes.

## Comparing the three strategies

| Strategy | What exists before load? | Best fit | Main cost |
| --- | --- | --- | --- |
| Ordinary DOM rows | Only the table shell | Ordinary browser pages | We write the DOM bookkeeping ourselves |
| Pseudo-dynamic slots | Every possible field | Small OnBase forms with a known cap | Fixed maximum and extra markup |
| Serialized rows | One hidden JSON field | Variable-length OnBase forms | We must rebuild, validate, and serialize |
| Vue rows | One hidden bridge plus Vue template | Complex dynamic forms | A framework dependency and a new programming model |

Vue is a modern solution, not a requirement. It adds a dependency and a different way of thinking, but it becomes attractive when a form has enough dynamic behavior that manual DOM rebuilding is harder to maintain. The OnBase merge constraint still matters, so Vue is not permission to forget the hidden field.

```text
Vue renders one row from the array.
Add line appends another object and Vue renders another row.
Editing a bound input changes the object.
The watcher keeps the hidden JSON bridge current.
```

---

## Try it Yourself

Add a formatted total, an invalid-row class, and a confirmation message before removing a row. Keep the hidden `glLines` field synchronized so the form still has a serialized representation for the OnBase save workflow. Then compare the amount of code with the plain-JavaScript serialized version and decide which trade-off you would accept for a real form.

---

## More background

The reference example is `062-coding-form-dynamic-rows-vue.html`. It uses Vue from a CDN, as the reference does, while replacing the jQuery setup with Vue's own bindings. The framework changes how we manage the browser view; it does not change the platform rule that retrieved fields must be represented before the merge occurs.

---
