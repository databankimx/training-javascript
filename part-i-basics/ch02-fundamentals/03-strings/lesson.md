# Strings: cleaning and case

Strings often arrive carrying whitespace that was useful somewhere else but is noise to our program. Legacy mainframe records and fixed-length database columns pad short values with spaces. People copy and paste from email, Word documents, spreadsheets, and formatted web pages. A name that looks like `Ada` may actually be `"  Ada       "`, and an email address that looks fine may contain a hidden space at either end. If we compare, validate, or look up those values without cleaning them, an apparently correct value can fail for reasons nobody can see.

JavaScript gives us `.trim()` for that common boundary. It returns a cleaned string without changing the original. Strings also need to be displayed in different ways, depending on whether we are talking to a computer or a human.

The Source pane contains a small script with two commented sections. We’ll look at one idea at a time.

## Cleaning text

```javascript
const name = "  Ada  ";
const trimmedName = name.trim();
console.log(trimmedName);
```

```text
Ada
```

The original value has spaces at both ends. `.trim()` returns a new string without those outside spaces. It does not change `name`.

Cleaning and displaying are separate jobs. First we get a dependable value, then we decide how that value should look on screen.

The examples below show why this is more than cosmetic. Whitespace can be part of one system's storage format and noise to the next system in line.

### Fixed-width records

Legacy mainframe systems often store records at a fixed length. A field may be assigned ten characters even when the actual value is only five characters long:

```javascript
const record = "ADA  37    ";
const nameField = record.slice(0, 5);
const ageField = record.slice(5, 11);

console.log(JSON.stringify(nameField));
console.log(JSON.stringify(nameField.trim()));
console.log(JSON.stringify(ageField.trim()));
```

```text
"ADA  "
"ADA"
"37"
```

The spaces are part of the record layout, so they cannot simply be ignored while we are slicing fields out of it. Once the field has been extracted, though, those padding spaces usually should not become part of the customer name or identifier we pass to the next system. `JSON.stringify()` makes the spaces visible in the example. Without it, the first two outputs would look deceptively similar.

### Fixed-length database columns

Databases can have fixed-length character columns as well. A column declared as `CHAR(10)` may return `"ADA       "` even though the person’s name is just `"ADA"`. If we compare that value with a user-entered name, the comparison can fail because one string contains invisible padding:

```javascript
const storedName = "ADA       ";
const enteredName = "ADA";

console.log(storedName === enteredName);
console.log(storedName.trim() === enteredName.trim());
```

```text
false
true
```

The cleanup is not cosmetic here. It changes whether a lookup, validation check, or duplicate test succeeds.

### Copy and paste from formatted documents

People also bring whitespace with them when they paste from email, Word documents, spreadsheets, or formatted web pages. A value that looks like `Ada` on screen may actually begin with a nonprinting space or end with several spaces. The same thing happens when a user copies a line from a report and pastes it into a form field.

```javascript
const pastedEmail = "  ada@example.com  ";
const email = pastedEmail.trim();

console.log(email);
```

```text
ada@example.com
```

Cleaning the outside of an email address before validation or lookup prevents a user from being told that a perfectly good address is invalid simply because the clipboard brought along a little baggage.

The same idea applies to account numbers, postal codes, search terms, imported CSV values, and values read from older systems. We should be careful not to trim every string automatically. Spaces inside a sentence can be meaningful. The useful rule is to trim values where outside whitespace is not part of the meaning.

## Changing letter case

```javascript
const name = "Ada";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
```

```text
ADA
ada
```

`.toUpperCase()` and `.toLowerCase()` each return a new string. They are useful for display, searching, or normalizing input, but do not assume that uppercase is always the right display choice. The computer is not a tiny office manager with a preferred filing system.

The two examples also reinforce the rule from the previous lesson: string methods return new strings. If we need the cleaned or changed value later, we can store the result in a new binding.

### Comparing without caring about case

People do not usually expect a username, search term, or status code to stop matching because they pressed the Shift key. One common example is a database search. Imagine the database stores a person’s name as `ADA LOVELACE`, while a user searches for `Ada Lovelace`:

```javascript
const storedName = "ADA LOVELACE";
const searchText = "Ada Lovelace";

console.log(storedName === searchText);
```

```text
false
```

That is the failed comparison. The strings contain the same letters, but they are not the same sequence of characters as far as JavaScript is concerned.

We can normalize both values before comparing them:

```javascript
const storedName = "ADA LOVELACE";
const searchText = "Ada Lovelace";

const matches = storedName.toUpperCase() === searchText.toUpperCase();
console.log(matches);
```

```text
true
```

The first comparison is false because JavaScript compares the characters as written. Uppercase `A` and lowercase `a` are different characters, even though people generally read them as the same letter. In the ASCII character set, they even have different numeric codes:

| Character in stored value | Character in search value | ASCII codes |
| --- | --- | ---: |
| `D` | `d` | 68 vs. 100 |
| `O` | `o` | 79 vs. 111 |
| `V` | `v` | 86 vs. 118 |
| `E` | `e` | 69 vs. 101 |

The second comparison creates uppercase copies of both values before comparing them. The original values are still available if we need to display them. This distinction matters in real applications: matching rules and display rules are related, but they are not always the same rule.

Do not apply this blindly to every piece of text. A password, a case-sensitive identifier, or a piece of prose may need its original case. Normalize when the business rule says that `AdaLovelace` and `adalovelace` should count as the same value.

> A string is an immutable sequence of text. String methods return new strings rather than changing the original string.
>
> A method is a function attached to a value. We call one with a dot, as in `name.trim()`.
>
> `.trim()` returns a new string with whitespace removed from the beginning and end.
>
> `.toUpperCase()` returns a new string with its letters converted to uppercase. `.toLowerCase()` does the same thing with lowercase letters.

---

## Try it Yourself

Try a name with extra spaces, clean it with `.trim()`, and then display it in uppercase and lowercase. Then create a padded value such as `"  ADA       "` and compare it with `"ADA"` before and after trimming. Finally, compare `"ADA LOVELACE"` with `"Ada Lovelace"` by normalizing both values first. Run each small change, and explain what each method returns and why the cleanup matters to a comparison.

If you can explain the difference between changing a value and creating a new string, you are ready for template literals.

---

## More background

See [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). The repository also includes a full [ASCII and Unicode chart](../../../../resources/ASCII%20%26%20Unicode%20Charts.xlsm) in `resources`. You do not need to memorize the table, but it is useful to review when a character comparison seems inexplicably fussy.

---
