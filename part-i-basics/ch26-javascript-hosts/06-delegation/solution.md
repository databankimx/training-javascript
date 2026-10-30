# 19 · Event delegation and handler semantics  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

jQuery delegation filters descendants and uses the matched element as this for a normal function handler. An arrow captures lexical this, so it does not receive that binding. In the vanilla example use the explicitly matched button rather than assuming currentTarget is the button: currentTarget is actions. In jQuery, return false combines default prevention and propagation stopping; native listeners require explicit calls.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
