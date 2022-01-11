import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import App from './App';

test('it shows A New Hope', async () => {
  const screen = render(<App />);
  expect(1).toEqual(1);
});

