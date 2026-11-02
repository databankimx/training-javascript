# Regular expressions: from pattern to phone number

Nothing strikes fear into a developer's heart quite like the phrase “regular expressions.” They are not dark magic, although a few expressions do look as though a cat walked across the keyboard and somehow passed code review.

A regular expression, or **regex**, describes a pattern instead of one specific string. That makes it useful whenever real-world data can arrive in several formats.

## How a regular expression works

JavaScript reads a regex from left to right. Each piece of the pattern describes the next piece of text it is allowed to consume. Literal characters match themselves. Special characters change that rule by describing a class of characters, a quantity, a boundary, or a choice.

| Syntax | Meaning | Example |
| --- | --- | --- |
| `A` | Match the literal character `A` | `/Ada/` |
| `.` | Match almost any character except a line break | `/a.c/` |
| `\d` | Match a digit | `/\d/` |
| `\s` | Match whitespace | `/\s/` |
| `\w` | Match a letter, digit, or underscore | `/\w+/` |
| `[abc]` | Match one character from the set | `/[aeiou]/` |
| `[^abc]` | Match one character not in the set | `/[^0-9]/` |
| `*` | Match the preceding item zero or more times | `/a*/` |
| `+` | Match the preceding item one or more times | `/a+/` |
| `?` | Match the preceding item zero or one time | `/colou?r/` |
| `{n}` | Match exactly `n` repetitions | `/\d{4}/` |
| `{m,n}` | Match from `m` through `n` repetitions | `/\d{2,4}/` |
| `^` | Require the match to begin at the start | `/^ID/` |
| `$` | Require the match to end at the finish | `/done$/` |
| `(abc)` | Group a sequence and capture it | `/(INV)-(\d+)/` |
| `(?:abc)` | Group without capturing | `/(?:ext|x)/` |
| `a` \| `b` | Match either `a` or `b` | `/(` `yes` \| `no` `)/` |
| `\.` | Match a literal period | `/example\.com/` |

The period is a classic trap. In a regex, `.` does **not** mean “a period.” It means “almost any character.” The pattern `/example.com/` would match `exampleXcom`, `example-com`, and `example com`. Use `\.` when you mean an actual period, as in an email domain or decimal number.

Flags change how the pattern is applied. The `i` flag ignores case, `g` finds every match instead of stopping at the first, and `m` changes how `^` and `$` behave with multiple lines.

| Example | Pattern we might need to recognize |
| --- | --- |
| ZIP code | Five digits, optionally followed by a hyphen and four more digits |
| Invoice ID | A prefix followed by a fixed number of digits |
| Phone number | Digits with several possible separators and an optional extension |

We will use phone numbers because they show why regex is useful and why a pattern that looks “done” often needs another pass.

The runnable example tests five patterns in sequence. After each result, press **Send** with an empty message to continue. The runner clears the console before showing the next pattern, so you can study one result at a time instead of receiving a punctuation avalanche.

## The data

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

```text
The first six values are possible phone-number formats.
The last value contains a phone number inside bad text and should be rejected.
```

## A first attempt

Every example contains ten digits, so we can start there:

```javascript
const pattern = /\d{10}/;
const matches = phoneNumbers.filter(phone => pattern.test(phone));
console.log(matches);
```

```text
[ "7134833111" ]
```

That matches only the version with ten consecutive digits. The pattern is correct, but it is too specific for the data.

## Adding separators

We can describe a grouped number with `\d{3}-\d{3}-\d{4}`. That handles one format, but only one:

```javascript
const pattern = /\d{3}[-.,]\d{3}[-.,]\d{4}/;
```

The square brackets define a character set. `[-.,]` means “one hyphen, period, or comma.” Inside a character set, the period loses its usual “any character” meaning.

## Optional parts

The question mark means “zero or one of the preceding item.” That lets us make parentheses, whitespace, and separators optional:

```javascript
const pattern = /\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}/;
```

This matches all six legitimate phone formats, but it also finds a phone number inside the bad line. A search pattern asks whether a match appears anywhere. We need a validation pattern instead.

## Anchoring the whole value

`^` means the beginning of the string, and `$` means the end. Together they require the entire value to match:

```javascript
const pattern = /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}$/;
```

That rejects the bad line, but it also rejects the number with an extension. We can add an optional extension at the end:

```javascript
const pattern = /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}(?:\s?ext:?\s?\d+)?$/;
```

The final pattern accepts our six intended formats and rejects the bad text:

```javascript
const patterns = [
  /\d{10}/,
  /\d{3}-\d{3}-\d{4}/,
  /\d{3}[-.,]\d{3}[-.,]\d{4}/,
  /\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}/,
  /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}(?:\s?ext:?\s?\d+)?$/
];
```

```text
Pattern 1: 1 match(es)
Pattern 2: 1 match(es)
Pattern 3: 3 match(es)
Pattern 4: 7 match(es)
Pattern 5: 6 match(es)
Matches: 6
```

The runnable example also prints the six accepted phone numbers. Pattern 4 finds seven values because it searches inside text. Pattern 5 validates the entire value, so it rejects the one line that contains extra text around a phone number.

> `\d` means a digit, `\s` means whitespace, `{n}` means exactly `n` repetitions, `?` makes the previous item optional, `[]` defines a character set, and `^` and `$` anchor the match to the whole string.

## Try it Yourself

Add a phone number with `x42` instead of `ext: 42`. Decide whether that is part of the format you want to support, then change the expression deliberately. Add a country code and decide whether the pattern should grow or whether a separate normalization step would be clearer.

Do not try to create one regex for every phone number on Earth. That way lies a very small, very angry language of punctuation.

---

## More background

[MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
