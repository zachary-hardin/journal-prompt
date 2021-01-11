const csv = require('csv-parser');
const fs = require('fs');

const getRandomPrompt = () => {
  return readFile().then(rows => rows[Math.floor(Math.random() * rows.length)]);
}

const readFile = () => {
  let data = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream('prompts.csv')
      .pipe(csv())
      .on('data', row => data.push(row))
      .on('end', () => resolve(data));
  });
}

exports.getRandomPrompt = getRandomPrompt;