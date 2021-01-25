import { render } from '@testing-library/react';
import PromptsTable from '../../components/PromptsTable';

jest.mock('axios');

test('should render given prompts',  () => {
  const { getByText } = render(<PromptsTable data={[
    {
      _id: '1',
      prompt: 'cherry'
    },
    {
      _id: '2',
      prompt: 'strawberry'
    }
  ]} reloadData={() => {}} isNewItem={false} setIsNewItem={() => {}}/>);

    expect(getByText('cherry')).toBeTruthy();
    expect(getByText('strawberry')).toBeTruthy();
});
