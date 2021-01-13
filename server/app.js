const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
const getRandomPrompt = require('./prompts-service').getRandomPrompt;

app.use(cors());

app.get('/prompt/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  getRandomPrompt().then(data => res.end(JSON.stringify(data)));
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}/prompt`);
});