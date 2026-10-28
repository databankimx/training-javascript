# Project 3.3 · Deletion, empty states, and review  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Reuse stable IDs, replace only the matching record when editing, validate trimmed text, and render after each mutation. Review keyboard use, empty input, HTML-looking text, failed imports, duplicate IDs, deletion after reordering, and persistence round trips. For a server extension, enforce ownership on the server rather than hiding buttons.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
