# Regular expressions: from pattern to phone number

Nothing strikes fear into a developer's heart quite like the phrase "regular expressions." They are not dark magic, although a few expressions do look as though a cat walked across the keyboard and somehow passed code review. A regex is a small pattern language. It has rules, and the rules are learnable.

## What is a regular expression?

A regular expression, or **regex**, describes a pattern instead of one specific string. That makes it useful when real-world data can arrive in several formats.

| Example | Pattern we might need to recognize |
| --- | --- |
| ZIP code | Five digits, optionally followed by a hyphen and four more digits |
| Invoice ID | A prefix followed by a fixed number of digits |
| Email address | Text, an `@`, more text, a period, and a domain |
| Phone number | Digits with several possible separators and an optional extension |

We will use phone numbers because they show both the usefulness and the danger. These values represent the same kind of information:

```javascript
const phoneNumbers = [
  "7134833111",
  "713-483-3111",
  "713.483.3111",
  "713,483,3111",
  "(713) 483-3111",
  "(713) 483-3111 ext: 42",
  "Don't match this one: (713) 483-3111 - BAD"
];
```

The last value contains a phone number inside extra text. A search pattern might find the phone number inside it, but a validation pattern should reject the whole value.

## How JavaScript stores a regex

The most readable form is a regex literal. It starts and ends with `/`, followed by optional flags.

```javascript
const literal = /^ID-\d{4}$/i;
```

Sometimes the pattern comes from configuration or user input. In that case, use the `RegExp` constructor.

```javascript
const prefix = "ID-";
const dynamic = new RegExp(`^${prefix}\\d{4}$`, "i");
```

Notice the extra backslash in the string. A regex uses `\d` for a digit, but a JavaScript string also treats backslash as an escape character. A regex literal writes `/\d/`; a string passed to `RegExp` usually needs `"\\d"`. JavaScript has no Python-style raw string literal. `String.raw` can reduce the visual noise when building a pattern string, but it does not turn a regex into a different kind of object.

```javascript
const source = String.raw`^\d{3}-\d{2}$`;
const pattern = new RegExp(source);
```

## The JavaScript regex methods

Here is a brief explanation of the methods we will use and the methods you are likely to meet in existing code.

| Method | Purpose | Typical result |
| --- | --- | --- |
| `pattern.test(text)` | Ask whether at least one match exists | `true` or `false` |
| `text.match(pattern)` | Return matched text, or capture information | An array or `null` |
| `pattern.exec(text)` | Return the next detailed match | An array or `null` |
| `text.replace(pattern, replacement)` | Replace matching text | A new string |
| `text.split(pattern)` | Split text wherever the pattern matches | An array of strings |

The `g` flag changes several methods. Without `g`, `match()` returns the first match and its captures. With `g`, it returns all matching strings but not the capture groups. `test()` still answers a yes-or-no question, although a global or sticky regex keeps a `lastIndex`, which can surprise you if you reuse it.

## The pattern language

JavaScript reads a regex from left to right. Literal characters match themselves. Special characters describe a class of characters, a quantity, a boundary, or a choice.

| Syntax | Meaning | Example |
| --- | --- | --- |
| `A` | Match the literal character `A` | `/Ada/` |
| `.` | Match almost any character except a line break | `/a.c/` |
| `\d` / `\D` | Digit / non-digit | `/\d{4}/` |
| `\s` / `\S` | Whitespace / non-whitespace | `/\s+/` |
| `\w` / `\W` | Word character / non-word character | `/\w+/` |
| `[abc]` | One character from the set | `/[aeiou]/` |
| `[^abc]` | One character not in the set | `/[^0-9]/` |
| `*` | Zero or more of the previous item | `/a*/` |
| `+` | One or more of the previous item | `/a+/` |
| `?` | Zero or one of the previous item | `/colou?r/` |
| `{n}` | Exactly `n` repetitions | `/\d{4}/` |
| `{m,n}` | From `m` through `n` repetitions | `/\d{2,4}/` |
| `*?`, `+?`, `{m,n}?` | Non-greedy versions of the quantifiers | `/<.*?>/` |
| `^` / `$` | Start / end of the string or line | `/^ID/`, `/done$/` |
| `(abc)` | Group and capture a sequence | `/(INV)-(\d+)/` |
| `(?:abc)` | Group without capturing | `/(?:ext|x)/` |
| `a\|b` | Match either alternative | `/(yes\|no)/` |
| `\.` | Match a literal period | `/example\.com/` |
| `\b` / `\B` | Word boundary / not a word boundary | `/\bcat\b/` |

Inside a character set, `^` negates only when it comes first, and `-` describes a range such as `0-9`. Most other special characters lose their special meaning there. That is why `[-.,]` safely means one hyphen, period, or comma.

The period is the classic trap. In a regex, `.` does **not** mean "a period." It means "almost any character." The pattern `/example.com/` would match `exampleXcom`, `example-com`, and `example com`. Use `\.` when you mean an actual period, as in an email domain or decimal number.

Flags change how the pattern is applied:

| Flag | Meaning |
| --- | --- |
| `i` | Ignore case |
| `g` | Find every match instead of stopping at the first |
| `m` | Let `^` and `$` work with individual lines |
| `s` | Let `.` include line breaks |
| `u` | Use Unicode-aware matching rules |

## A first, naive attempt

Every example contains ten digits, so we can start there:

```javascript
const pattern = /\d{10}/;
const matches = phoneNumbers.filter(phone => pattern.test(phone));
console.log(matches);
```

```text
[ "7134833111" ]
```

This matches only the version with ten consecutive digits. The pattern is correct, but it is too specific for the data.

## Adding a separator

We can describe a grouped number with three digits, a hyphen, three digits, another hyphen, and four digits.

```javascript
const pattern = /\d{3}-\d{3}-\d{4}/;
const matches = phoneNumbers.filter(phone => pattern.test(phone));
console.log(matches);
```

```text
[ "713-483-3111" ]
```

That handles one format, but only one. A character set lets us accept several separators.

```javascript
const pattern = /\d{3}[-.,]\d{3}[-.,]\d{4}/;
```

```text
713-483-3111
713.483.3111
713,483,3111
```

## Optional parts

The question mark means "zero or one of the preceding item." That lets us make parentheses, whitespace, and separators optional.

```javascript
const pattern = /\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}/;
const matches = phoneNumbers.filter(phone => pattern.test(phone));
matches.forEach(phone => console.log(phone));
```

```text
7134833111
713-483-3111
713.483.3111
713,483,3111
(713) 483-3111
(713) 483-3111 ext: 42
Don't match this one: (713) 483-3111 - BAD
```

We matched all six legitimate phone formats, but we also found a phone number inside the bad line. A search pattern asks whether a match appears anywhere. We need a validation pattern instead.

## Anchor the whole value

`^` means the beginning of the string, and `$` means the end. Together they require the entire value to match.

```javascript
const pattern = /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}$/;
const matches = phoneNumbers.filter(phone => pattern.test(phone));
matches.forEach(phone => console.log(phone));
```

```text
7134833111
713-483-3111
713.483.3111
713,483,3111
(713) 483-3111
```

That rejects the bad line, but it also rejects the number with an extension. We can add an optional, non-capturing group for the extension.

```javascript
const pattern = /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}(?:\s?ext:?\s?\d+)?$/;
```

The extension group contains an optional space, the label `ext`, an optional colon, another optional space, and one or more digits. The final `?` makes the whole extension optional.

```text
Pattern 1: 1 match(es)
  7134833111
Pattern 2: 1 match(es)
  713-483-3111
Pattern 3: 3 match(es)
  713-483-3111
  713.483.3111
  713,483,3111
Pattern 4: 7 match(es)
  7134833111
  713-483-3111
  713.483.3111
  713,483,3111
  (713) 483-3111
  (713) 483-3111 ext: 42
  Don't match this one: (713) 483-3111 - BAD
Pattern 5: 6 match(es)
  7134833111
  713-483-3111
  713.483.3111
  713,483,3111
  (713) 483-3111
  (713) 483-3111 ext: 42
Matches: 6
```

The runnable script prints these results one pattern at a time and waits for input before continuing. That pause is deliberate. Regex output becomes a punctuation avalanche surprisingly quickly, and nobody learns much from staring at an avalanche.

> A regex can describe a format, but it cannot decide whether a phone number is real, assigned, or appropriate for a particular country. Validate the format you actually support, and normalize data separately when that makes the rule clearer.

---

## Try it Yourself

Add a phone number with `x42` instead of `ext: 42`. Decide whether that is part of the format you want to support, then change the expression deliberately. Add a country code and decide whether the pattern should grow or whether a separate normalization step would be clearer.

Then use `match()` to print the exact text matched by your pattern, and use `replace()` to turn every accepted separator into a hyphen. Do not try to create one regex for every phone number on Earth. That way lies a very small, very angry language of punctuation.

---

## More background

[MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

[MDN: RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

---
