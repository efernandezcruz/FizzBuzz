import { render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  test('should render a list of 100 elements', async () => {
    const list = await render(<App />).findAllByTestId('list-element');
    expect(list.length).toBe(100);
  });
});
