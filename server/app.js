const express = require('express');
const http = require('http');
const app = express();
const port = 3000;
const json = require('./prompts-data');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(json["prompts"]));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
