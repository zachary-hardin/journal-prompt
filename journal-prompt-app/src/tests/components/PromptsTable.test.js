import { render, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';
import PromptsTable from '../../components/PromptsTable';

jest.mock('axios');

const prompts = [
  {
    _id: '1',
    prompt: 'cherry'
  },
  {
    _id: '2',
    prompt: 'strawberry'
  }
];

test('should render prompts',  async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: prompts });
  const { getByText } = render(<PromptsTable />);

  await waitFor(() => {
    expect(getByText('1')).toBeTruthy();
    expect(getByText('cherry')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('strawberry')).toBeTruthy();
  });
});

test('should delete prompt when deletePrompt is clicked',  async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: prompts });
  const { getByTestId, getByText, queryByText } = render(<PromptsTable />);

  await waitFor(() => {
    expect(getByText('1')).toBeTruthy();
    expect(getByText('cherry')).toBeTruthy();
  });

  await waitFor(() => {
    mockedAxios.delete.mockResolvedValueOnce(201);
    mockedAxios.get.mockResolvedValueOnce({ data: [prompts[1]] });

    getByTestId('deletePromptBtn-0').click();
    expect(queryByText('cherry')).toBeNull();
  });
});

