const express = require('express');
const app = express();
const port = 3000;
const randomPrompt = require('./prompts-data').randomPrompt

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(randomPrompt()));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
