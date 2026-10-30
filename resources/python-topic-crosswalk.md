# Python → JavaScript topic crosswalk

The Python repository was inspected as the structural reference. Topic intent is retained, while JavaScript host and library differences are explicit. This is a new curriculum, not a claim of exercise-by-exercise parity.

## Fundamentals

| Python chapter | JavaScript chapter | Adaptation |
|---|---|---|
| ch01 Hello | ch01-hello | Node host, statements, errors |
| ch02 Fundamentals | ch02-fundamentals | Bindings, conversion, strings |
| ch03 Numbers | ch03-numbers | Numeric checks, rounding, floating-point behavior, bases, and parsing |
| ch04 Collections | ch04-collections | Arrays, nesting, traversal, tuples, stacks, queues, trees, and tries |
| ch05 Boolean logic | ch05-boolean-logic | Strict equality, truthiness, nullish values |
| ch20 Dictionaries | ch20-dictionaries | Objects, Map, Set |
| ch21 More functionality | ch21-more-functionality | Asynchronous terminal input |
| ch22 Functions | ch22-functions | Scope, functions, ESM |
| ch23 Classes | ch23-classes | Prototypes, classes, private fields |
| ch24 Files | ch24-files | Promises, JSON, errors |
| ch25 Testing | ch25-testing | node:test and assertions |

JavaScript-specific additions: ch12 covers promises, DOM/events, fetch, readiness, collection differences, and delegation. ch13 teaches HTML/CSS/JS integration and interactive form components. Pair these browser labs with the earlier language lessons during a browser-focused lecture series.

## Guided projects

| Python project | JavaScript project | Scope |
|---|---|---|
| Alien Invasion | Canvas game | Movement → bullets/collisions → scoring/restart; moving aliens/lives/levels are extension work |
| Data Visualization | Validation and chart/filter labs | Local data, Canvas bars, independent filter stage; no external API token required |
| Django Learning Log | Browser Learning Log | State/rendering, JSON import/export, deletion; accounts/server/deployment are follow-on work |

## Supplemental track

| Python topic | JavaScript lesson | Adaptation |
|---|---|---|
| S01 Command-line arguments | S01 · Command-line arguments | Original JavaScript implementation of the general topic |
| S02 Recursion | S02 · Recursion and termination | Original JavaScript implementation of the general topic |
| S03 Regular expressions | S03 · Regular expressions | Original JavaScript implementation of the general topic |
| S04 Big-O complexity | S04 · Complexity and data structures | Original JavaScript implementation of the general topic |
| S05 Bitwise operations | S05 · Bitwise flags | Original JavaScript implementation of the general topic |
| S06 Dataclasses | S06 · Records and validation (dataclasses counterpart) | Conceptual counterpart; host or library scope differs explicitly |
| S07 String formatting | S07 · Internationalized formatting | Original JavaScript implementation of the general topic |
| S08 Closures | S08 · Closures and captured state | Original JavaScript implementation of the general topic |
| S09 Enumerations | S09 · Enumerations and explicit states | Original JavaScript implementation of the general topic |
| S10 Web scraping | S10 · DOM extraction and scraping boundaries | Original JavaScript implementation of the general topic |
| S11 Lambdas | S11 · Arrow functions and higher-order behavior | Original JavaScript implementation of the general topic |
| S12 MySQL | S12 · Relational databases and parameterized SQL | Original JavaScript implementation of the general topic |
| S13 Publish a library | S13 · Design and package a library | Original JavaScript implementation of the general topic |
| S14 NumPy | S14 · Typed arrays (NumPy counterpart) | Conceptual counterpart; host or library scope differs explicitly |
| S15 pandas | S15 · Tabular transformations (pandas counterpart) | Conceptual counterpart; host or library scope differs explicitly |
| S16 SciPy | S16 · Numerical methods (SciPy counterpart) | Conceptual counterpart; host or library scope differs explicitly |
| S17 MongoDB | S17 · Document queries (MongoDB counterpart) | Conceptual counterpart; host or library scope differs explicitly |
| S18 Trie | S18 · Tries and prefix lookup | Original JavaScript implementation of the general topic |
| S19 Tkinter | S19 · Browser forms (Tkinter counterpart) | Conceptual counterpart; host or library scope differs explicitly |
| S20 Card games | S20 · Cards and unbiased shuffling | Original JavaScript implementation of the general topic |
| S21 Morse code | S21 · Morse code and codecs | Original JavaScript implementation of the general topic |
| S22 Rochambeau | S22 · Rock, paper, scissors and rule tables | Original JavaScript implementation of the general topic |
| S23 Game of Life | S23 · Game of Life and simultaneous updates | Original JavaScript implementation of the general topic |
| S24 Built-ins | S24 · Built-in objects and serialization limits | Original JavaScript implementation of the general topic |
| S25 Flask Learning Log | S25 · Node HTTP routing (Flask counterpart) | Conceptual counterpart; host or library scope differs explicitly |
| S26 itertools | S26 · Iterators and generators (itertools counterpart) | Original JavaScript implementation of the general topic |
| S27 functools | S27 · Function composition and memoization | Original JavaScript implementation of the general topic |

## EForms navigator influence

Inspected 04-scripting-and-validation, 06-dynamic-forms, related scripts, and the navigator source layout under EForms.TrainingNavigator/wwwroot. Relevant patterns include readiness, setters/getters, validation/computed totals, hide/show, fixed versus newly created rows, note dialogs, and jQuery comparisons. The vanilla course uses original examples with semantic HTML and explicit state/focus behavior; no OnBase service, proprietary runtime, jQuery plugin, or external CDN is required.
