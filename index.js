import express from 'express';

const app = express();

app.use(express.json()); // Pour parser JSON dans le body

app.get('/', (req, res) => {
  res.send('Hello Jenkins CI/CD!');
});

app.post('/number', (req, res) => {
  const { value } = req.body;
  if (typeof value !== 'number') {
    return res.status(400).json({ error: 'Value must be a number' });
  }
  res.json({ message: `Received number: ${value}` });
});

export default app;

if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(3000, () => console.log('Server started on port 3000'));
}
