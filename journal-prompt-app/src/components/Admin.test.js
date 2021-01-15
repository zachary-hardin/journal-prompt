import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import mockedAxios from 'axios';
import Admin from './Admin';

jest.mock('axios');

test('should disable addPromptBtn when input is blank', () => {
  const { getByTestId } = render(<Admin/>);

  enterTextInto('promptInput', '')
  expect(getByTestId('addPromptBtn')).toBeDisabled();
});

test('should enable addPromptBrn when input is not blank', () => {
  const { getByTestId } = render(<Admin/>);

  enterTextInto('promptInput', 'fizzbuzz')
  expect(getByTestId('addPromptBtn')).not.toBeDisabled();
});

test('should disable addPromptBrn when input is empty spaces', () => {
  const { getByTestId } = render(<Admin/>);

  enterTextInto('promptInput', '  ')
  expect(getByTestId('addPromptBtn')).toBeDisabled();
});

test('should render success message when inserting new prompt', async () => {
  mockedAxios.post.mockResolvedValueOnce( { status: 201 });
  const { getByTestId, getByText } = render(<Admin/>);

  enterTextInto('promptInput', 'fizzbuzz');
  getByTestId('addPromptBtn').click();

  await waitFor(() => {
    expect(getByText('New Prompt Added')).toBeTruthy();
  });
});

test('should clear input when message is successfully added', async () => {
  mockedAxios.post.mockResolvedValueOnce( { status: 201 });
  const { getByTestId } = render(<Admin/>);

  enterTextInto('promptInput', 'fizzbuzz');
  getByTestId('addPromptBtn').click();

  await waitFor(() => {
    expect(getByTestId('promptInput').value).toEqual('');
  });
});

test('should render failure message when inserting bad prompt', async () => {
  mockedAxios.post.mockResolvedValueOnce( { status: 409 });
  const { getByTestId, getByText } = render(<Admin/>);

  enterTextInto('promptInput', 'fizzbuzz')
  getByTestId('addPromptBtn').click();

  await waitFor(() => {
    expect(getByText('Failed to Add New Prompt')).toBeTruthy();
  });
});

const enterTextInto = (elementId, text) => {
  fireEvent.change(screen.getByTestId(elementId), { target: { value: text } });
}