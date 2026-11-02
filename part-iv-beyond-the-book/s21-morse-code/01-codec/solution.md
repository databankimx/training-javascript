# S21 · Morse code and codecs  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

const letters = new Map([...codes].map(([letter,code]) => [code,letter])); Split encoded text on spaces, require every token to exist, and join decoded letters. Reserve " / " between words if you extend the format, and test multiple-word round trips.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
