# S12 · Relational databases and parameterized SQL  -  exercise solution

Let’s walk through the fix, including the case that made the first attempt unhappy.

Use insert.run("O'Neil", 85), then db.prepare("SELECT AVG(score) AS average FROM learners").get().average. Expect 90 for the three scores. Keep placeholders; do not concatenate the quoted name into SQL.

## Review

Now try the original input and the boundary case you chose. If both work, explain which operations make them work. That explanation is what we want to keep; the output window is happy to print all sorts of things.
