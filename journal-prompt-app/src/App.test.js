import { render, waitFor } from '@testing-library/react';
import App from './App';
import mockedAxios from 'axios';

jest.mock('axios');

test('renders a prompt on load', async () => {
  const data = {
    data: {
      prompt: 'buzz'
    }
  };

  mockedAxios.get.mockResolvedValueOnce(data);
  const { getByText } = render(<App />);

  await waitFor(() => {
    expect(getByText('buzz')).toBeTruthy();
  });
});