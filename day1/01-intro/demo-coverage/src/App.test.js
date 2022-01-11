import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('calculates square(n)', () => {
  const screen = render(<App />);
  const inp = screen.getByLabelText('Type a number:');
  userEvent.type(inp, '2');

  const result = screen.getByText('2^2 = 4');
  expect(result).toBeInTheDocument();
});
