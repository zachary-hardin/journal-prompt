import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the NavBar', () => {
  render(<App />);
  expect(screen.getByText('Journal Prompt Project')).toBeInTheDocument();
});