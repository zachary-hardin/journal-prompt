const fetchAll = require('./prompts-db-service').fetchAll;
const createNew = require('./prompts-db-service').createNew;

const getRandomPrompt = () => {
  return new Promise((resolve) => {
    fetchAll((prompts) => {
      let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      resolve(randomPrompt);
    });
  });
};

const createNewPrompt = (prompt) => {
    createNew(prompt);
}

exports.getRandomPrompt = getRandomPrompt;
exports.createNewPrompt = createNewPrompt;