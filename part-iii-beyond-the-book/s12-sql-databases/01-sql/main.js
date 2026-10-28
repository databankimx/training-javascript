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
