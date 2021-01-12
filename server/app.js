const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
const readRandomPrompt = require('./prompts-data').getRandomPrompt;
const main = require('./prompt-db').main;

app.use(cors());

app.get('/prompt/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  readRandomPrompt().then(data => res.end(JSON.stringify(data)));
});


app.get('/db/', (req, res) => {
  main().catch(console.error);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}/prompt`);
});
