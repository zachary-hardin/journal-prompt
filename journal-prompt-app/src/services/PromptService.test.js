import axios from 'axios';
import { fetchPrompt } from './PromptService';

jest.mock('axios');

const PROMPT_API_URL = 'https://thawing-fortress-26537.herokuapp.com/prompt';

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
