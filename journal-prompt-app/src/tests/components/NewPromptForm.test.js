import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import mockedAxios from 'axios';
import NewPromptForm from '../../components/NewPromptForm';

jest.mock('axios');

test('should disable addPromptBtn when input is blank', () => {
  const { getByTestId } = render(<NewPromptForm reloadData={() => {}} />);

  enterTextInto('promptInput', '')
  expect(getByTestId('addPromptBtn')).toBeDisabled();
});

test('should enable addPromptBrn when input is not blank', () => {
  const { getByTestId } = render(<NewPromptForm reloadData={() => {}}/>);

  enterTextInto('promptInput', 'fizzbuzz')
  expect(getByTestId('addPromptBtn')).not.toBeDisabled();
});

test('should disable addPromptBrn when input is empty spaces', () => {
  const { getByTestId } = render(<NewPromptForm reloadData={() => {}}/>);

  enterTextInto('promptInput', '  ')
  expect(getByTestId('addPromptBtn')).toBeDisabled();
});

test('should render success message when inserting new prompt', async () => {
  mockedAxios.post.mockResolvedValueOnce({ status: 201 });
  const { getByTestId, getByText } = render(<NewPromptForm reloadData={() => {}} />);

  enterTextInto('promptInput', 'fizzbuzz');
  getByTestId('addPromptBtn').click();

  await waitFor(() => {
    expect(getByText('New Prompt Added')).toBeTruthy();
  });
});

test('should render success message when Enter is tapped',  async () => {
  mockedAxios.post.mockResolvedValueOnce({ status: 201 });
  const { getByText } = render(<NewPromptForm reloadData={() => {}}/>);

  enterTextInto('promptInput', 'fizzbuzz');
  pressEnterKeyFor('promptInput');

  await waitFor(() => {
    expect(getByText('New Prompt Added')).toBeTruthy();
  });
});

test('should not render a message onEnter when promptInput is blank', () => {
  const { queryByText } = render(<NewPromptForm reloadData={() => {}}/>);

  enterTextInto('promptInput', ' ');
  pressEnterKeyFor('promptInput');

  expect(queryByText('New Prompt Added')).toBeNull();
})

test('should clear input when message is successfully added', async () => {
  mockedAxios.post.mockResolvedValueOnce({ status: 201 });
  const { getByTestId } = render(<NewPromptForm reloadData={() => {}}/>);

  enterTextInto('promptInput', 'fizzbuzz');
  getByTestId('addPromptBtn').click();

  await waitFor(() => {
    expect(getByTestId('promptInput').value).toEqual('');
  });
});

test('should render failure message when inserting bad prompt', async () => {
  mockedAxios.post.mockResolvedValueOnce({ status: 409 });
  const { getByTestId, getByText } = render(<NewPromptForm reloadData={() => {}}/>);

  enterTextInto('promptInput', 'fizzbuzz')
  getByTestId('addPromptBtn').click();

  await waitFor(() => {
    expect(getByText('Failed to Add New Prompt')).toBeTruthy();
  });
});

// 👋 TODO: Extract to Helper
const enterTextInto = (elementId, text) => {
  fireEvent.change(screen.getByTestId(elementId), { target: { value: text } });
}

const pressEnterKeyFor = (elementId) => {
  const ENTER_KEY = { key: 'Enter', code: 13, charCode: 13 };
  fireEvent.keyPress(screen.getByTestId(elementId), ENTER_KEY);
};