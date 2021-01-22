import * as axios from 'axios';

const BASE_URL = 'https://thawing-fortress-26537.herokuapp.com';

export const fetchPrompt = () => {
  return axios.get(`${BASE_URL}/prompt`);
}

export const fetchPrompts = () => {
  return axios.get(`${BASE_URL}/get-prompts`);
}

export const insertPrompt = (prompt) => {
  return axios.post(`${BASE_URL}/new-prompt`, null, { params: { prompt } });
}

export const deletePrompt = (prompt) => {
  return axios.delete(`${BASE_URL}/delete`, { params: { _id: prompt._id } });
}