import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('it has a button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: 'Click' });
  expect(buttonElement).toBeInTheDocument();
});

test('it starts click count at 0', () => {
  render(<App />);
  const clickCount = screen.getByText('You clicked 0 times');
  expect(clickCount).toBeInTheDocument();
});

test('it increases count as user clicks', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: 'Click' });
  userEvent.click(buttonElement);
  userEvent.click(buttonElement);
  userEvent.click(buttonElement);

  const clickCount = screen.getByText('You clicked 3 times');
  expect(clickCount).toBeInTheDocument();
});
