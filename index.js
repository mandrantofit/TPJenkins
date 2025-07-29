// index.js
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Jenkins CI/CD!'));

if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
}

export default app;
