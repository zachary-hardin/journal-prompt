import { render, waitFor } from '@testing-library/react';
import App from './App';
import mockedAxios from 'axios';

jest.mock('axios');

test('renders a prompt with quotations on load', async () => {
  mockedAxios.get.mockResolvedValueOnce(setPromptTo('buzz'));
  const { getByText } = render(<App/>);

  await waitFor(() => {
    expect(getByText('"buzz"')).toBeTruthy();
  });
});

test('refreshes a prompt with quotations on click', async () => {
  mockedAxios.get.mockResolvedValueOnce(setPromptTo('buzz'));
  const { getByText, getByTestId } = render(<App/>);

  await waitFor(() => {
    expect(getByText('"buzz"')).toBeTruthy();
  });

  await waitFor(() => {
    mockedAxios.get.mockResolvedValueOnce(setPromptTo('fizz'));
    getByTestId('refreshPrompt').click();
    expect(getByText('"fizz"')).toBeTruthy();
  });
});

const setPromptTo = (prompt) => {
  return { data: { prompt } };
};