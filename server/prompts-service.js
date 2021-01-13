const fetchAll = require('./prompts-db-service').fetchAll;

const getRandomPrompt = () => {
  return new Promise((resolve) => {
    fetchAll((prompts) => {
      let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      resolve(randomPrompt);
    });
  });
};

exports.getRandomPrompt = getRandomPrompt;