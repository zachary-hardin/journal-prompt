const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
const randomPrompt = require('./prompts-data').randomPrompt

app.get('/prompt/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(randomPrompt()));
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}/prompt`);
});
