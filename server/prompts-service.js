const fetchAll = require('./prompts-db-service').fetchAll;
const createNew = require('./prompts-db-service').createNew;
const deletePrompt = require('./prompts-db-service').deletePrompt;

const getRandomPrompt = () => {
  return new Promise(resolve => {
    fetchAll(prompts => {
      let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      resolve(randomPrompt);
    });
  });
};

const getPrompts = () => {
  return new Promise(resolve => {
    fetchAll(prompts => {
      resolve(prompts);
    });
  });
}

const createNewPrompt = (prompt) => {
  return new Promise(resolve => {
    createNew(prompt, statusCode => resolve(statusCode));
  });
};

const deletePromptById = (id) => {
  return new Promise(resolve => {
    deletePrompt(id, statusCode => resolve(statusCode));
  });
}

exports.getRandomPrompt = getRandomPrompt;
exports.getPrompts = getPrompts;
exports.createNewPrompt = createNewPrompt;
exports.deletePromptById = deletePromptById;