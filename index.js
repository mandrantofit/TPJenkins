// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Jenkins CI/CD!'));

if (require.main === module) {
  app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
}

module.exports = app; // <--- export pour les tests
