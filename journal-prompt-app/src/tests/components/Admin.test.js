import { render, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';
import Admin from '../../components/Admin';

jest.mock('axios');

test('should render prompts',  async () => {
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
  mockedAxios.get.mockResolvedValueOnce({ data: prompts });
  const { getByText } = render(<Admin />);

  await waitFor(() => {
    expect(getByText('1')).toBeTruthy();
    expect(getByText('cherry')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('strawberry')).toBeTruthy();
  });
});

