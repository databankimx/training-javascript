# S12 · Relational databases and parameterized SQL

## Learning goal

S12 · Relational databases and parameterized SQL: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We need to put a value into a SQL query. String concatenation is tempting, but I’d prefer our input to remain data rather than acquire a second career as SQL syntax.

Relational tables store rows under a schema. SQL queries select and aggregate rows; placeholders bind data separately from query text. This local SQLite example teaches the same relational concepts as the Python MySQL lesson without requiring a server. MySQL uses a separate driver and differs in types, SQL dialect, transactions, and deployment. node:sqlite is built into Node 24 and may emit an experimental warning on some Node 24 releases.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect an array containing Grace. The database exists only in memory.

## Example code

```javascript
import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync(':memory:');
try {
  db.exec('CREATE TABLE learners (name TEXT NOT NULL, score INTEGER NOT NULL)');
  const insert = db.prepare('INSERT INTO learners VALUES (?, ?)');
  insert.run('Ada', 90);
  insert.run('Grace', 95);
  console.log(db.prepare('SELECT name FROM learners WHERE score >= ? ORDER BY name').all(92).map(row => row.name));
}finally {
  db.close();
}
```

## Expected output

```text
Expect an array containing Grace. The database exists only in memory.
```

## Walk through the example

The in-memory database receives a table schema, then one prepared INSERT statement is reused with bound values. A separate prepared SELECT binds the score threshold. The query returns rows, which map projects to names. finally closes the database; no training data is written to an external server.

## Try it yourself

Add a third learner and compute AVG(score). Demonstrate that a name containing a quote is safely inserted.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
