import axios from 'axios';
import { deletePrompt, fetchPrompt, fetchPrompts, insertPrompt } from '../../services/PromptService';

jest.mock('axios');

const PROMPT_API_URL = 'https://thawing-fortress-26537.herokuapp.com/prompt';
const ALL_PROMPT_API_URL = 'https://thawing-fortress-26537.herokuapp.com/get-prompts';
const INSERT_PROMPT_API_URL = 'https://thawing-fortress-26537.herokuapp.com/new-prompt';
const DELETE_PROMPT_API_URL = 'https://thawing-fortress-26537.herokuapp.com/delete-prompt';

test('fetchPrompt should hit the PROMPT_API_URL', () => {
  fetchPrompt();
  expect(axios.get).toHaveBeenCalledWith(PROMPT_API_URL);
});

test('fetchPrompt should return a prompt', (done) => {
  const data = {
    prompt: 'foo'
  };
  axios.get.mockResolvedValueOnce(data);

  fetchPrompt().then(response => {
    expect(response).toEqual(data);

    done();
  });
});

test('insertPrompt should hit the INSERT_PROMPT_API_URL', () => {
  insertPrompt('fizzbuzz');
  expect(axios.post).toHaveBeenCalledWith(INSERT_PROMPT_API_URL, null, { "params": { "prompt": "fizzbuzz" } });
});

test('fetchPrompts should hit the ALL_PROMPTS_API_URL', () => {
  fetchPrompts();
  expect(axios.get).toHaveBeenCalledWith(ALL_PROMPT_API_URL);
})

test('fetchPrompts should return a list of prompts', (done) => {
  const prompts = [
    {
      "_id": "1",
      "prompt": "foo"
    },
    {
      "_id": "2",
      "prompt": "bar"
    }
  ];
  axios.get.mockResolvedValueOnce(prompts);

  fetchPrompts().then(response => {
    expect(response).toEqual(prompts);
    done();
  });
});

test('deletePrompt should hit the DELETE_PROMPT_URL', () => {
  const prompt = { _id: "1234", prompt: "foo" }
  deletePrompt(prompt);
  expect(axios.delete).toHaveBeenCalledWith(DELETE_PROMPT_API_URL, null, { "params": { _id: "1234" } })
});

test('deletePrompt should return a status code of 201', (done) => {
  axios.delete.mockResolvedValueOnce({ status: 201 });

  deletePrompt({ _id: "1234", prompt: "foo" }).then(response => {
    expect(response.status).toEqual(201);

    done();
  });
});