import { render } from '@testing-library/react';
import NavBar from '../../components/NavBar';

test('prompt generator nav-link should set href to "/prompt/"', () => {
  const { getByTestId } = render(<NavBar/>);
  expect(getByTestId('promptGeneratorNav').href).toContain('/prompt/');
});

test('admin nav-link should set href to "/journal-prompt/"', () => {
  const { getByTestId } = render(<NavBar/>);
  expect(getByTestId('adminNav').href).toContain('/admin/');
});