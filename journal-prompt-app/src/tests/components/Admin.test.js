import { render, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';
import Admin from '../../components/Admin';
import { clickButtonById, clickButtonByText, enterTextInto } from '../Helpers';

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

  const { getByText, queryByText } = render(<Admin />);

  await waitFor(() => {
    expect(getByText('horse')).toBeTruthy();
    expect(getByText('goat')).toBeTruthy();
  });

  await waitFor(() => {
    mockedAxios.delete.mockResolvedValueOnce(201);
    mockedAxios.get.mockResolvedValueOnce({ data: [prompts[1]] });

    clickButtonById('deletePromptBtn-0');
    expect(queryByText('horse')).toBeNull();
  });
});

test('should refresh table when a new prompt is added', async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: prompts });

  const { getByText, queryByText } = render(<Admin />);

  expect(queryByText('chicken')).toBeNull();

  mockedAxios.post.mockResolvedValueOnce({ status: 201 });
  mockedAxios.get.mockResolvedValue({ data: updatedPrompts });

  enterTextInto('promptInput', 'chicken');
  clickButtonByText('Add');

  await waitFor(() => {
    expect(getByText('chicken')).toBeTruthy();
  });
});
