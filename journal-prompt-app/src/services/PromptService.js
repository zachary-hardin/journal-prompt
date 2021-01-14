import * as axios from 'axios';

export const fetchPrompt = () => {
  return axios.get('https://thawing-fortress-26537.herokuapp.com/prompt');
}

export const insertPrompt = (prompt) => {
  return axios.post('https://thawing-fortress-26537.herokuapp.com/new-prompt', null, {
    params: {
      prompt
    }
  });
}