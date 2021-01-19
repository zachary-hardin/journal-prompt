import { render, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';
import Prompter from '../../components/Prompter';

jest.mock('axios');

test('renders a prompt with quotations on load', async () => {
  mockedAxios.get.mockResolvedValueOnce(setPromptTo('buzz'));
  const { getByText } = render(<Prompter/>);

  await waitFor(() => {
    expect(getByText('"buzz"')).toBeTruthy();
  });
});

test('refreshes a prompt with quotations on click', async () => {
  mockedAxios.get.mockResolvedValueOnce(setPromptTo('buzz'));
  const { getByText, getByTestId } = render(<Prompter/>);

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