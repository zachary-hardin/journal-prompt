import { render } from '@testing-library/react';
import NavBar from '../../components/NavBar';

test('prompt generator nav-link should set href to "/prompt/"', () => {
  const { getByText } = render(<NavBar/>);
  expect(getByText('Prompter').href).toContain('/prompt/');
});

test('admin nav-link should set href to "/journal-prompt/"', () => {
  const { getByText } = render(<NavBar/>);
  expect(getByText('Admin ⚙️').href).toContain('/admin/');
});