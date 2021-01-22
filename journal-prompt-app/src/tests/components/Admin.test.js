import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';
import Admin from '../../components/Admin';

jest.mock('axios');

const prompts = [
  {
    _id: '1',
    prompt: 'horse'
  },
  {
    _id: '2',
    prompt: 'goat'
  }
];

const updatedPrompts = [
  {
    _id: '1',
    prompt: 'horse'
  },
  {
    _id: '2',
    prompt: 'goat'
  },
  {
    _id: '3',
    prompt: 'chicken'
  }
];

test('should refresh table when delete is clicked',  async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: prompts });

  const { getByTestId, getByText, queryByText } = render(<Admin />);

  await waitFor(() => {
    expect(getByText('1')).toBeTruthy();
    expect(getByText('horse')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('goat')).toBeTruthy();
  });

  await waitFor(() => {
    mockedAxios.delete.mockResolvedValueOnce(201);
    mockedAxios.get.mockResolvedValueOnce({ data: [prompts[1]] });

    getByTestId('deletePromptBtn-0').click();
    expect(queryByText('horse')).toBeNull();
  });
});

test('should refresh table when a new prompt is added', async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: prompts });

  const { getByTestId, getByText, queryByText } = render(<Admin />);

  expect(queryByText('3')).toBeNull();
  expect(queryByText('chicken')).toBeNull();

  mockedAxios.post.mockResolvedValueOnce({ status: 201 });
  mockedAxios.get.mockResolvedValueOnce({ data: updatedPrompts });

  enterTextInto('promptInput', 'chicken');
  getByTestId('addPromptBtn').click();

  await waitFor(() => {
    expect(getByText('3')).toBeTruthy();
    expect(getByText('chicken')).toBeTruthy();
  });
});

// 👋 TODO: Extract to Helper
const enterTextInto = (elementId, text) => {
  fireEvent.change(screen.getByTestId(elementId), { target: { value: text } });
}