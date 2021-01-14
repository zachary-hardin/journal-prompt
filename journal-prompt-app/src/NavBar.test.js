import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('prompt generator nav-link should set href to "/journal-prompt/"', () => {
  const { getByTestId } = render(<NavBar/>);
  expect(getByTestId('promptGeneratorNav').href).toContain('/journal-prompt/');
});