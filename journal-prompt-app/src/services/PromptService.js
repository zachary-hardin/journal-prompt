import * as axios from 'axios';

export const fetchPrompt = () => {
  return axios.get('https://thawing-fortress-26537.herokuapp.com/prompt');
}