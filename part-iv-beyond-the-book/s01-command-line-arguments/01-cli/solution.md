# S01 · Command-line arguments  -  exercise solution

The important part here is the rule we enforce. The exact arrangement of the code can vary.

Check args[0] for --help or --name. Require exactly two tokens for --name and a nonempty value. For unknown flags print usage to stderr and set process.exitCode = 1. Test missing values separately from unknown options.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
