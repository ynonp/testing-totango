import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import App from './App';

test('it shows A New Hope', async () => {
  const screen = render(<App />);
  const firstMovie = await screen.findByText(/a new hope/i);
  expect(firstMovie).toBeInTheDocument();
});

test('it shows luke playing in a new hope', async () => {
  const screen = render(<App />);
  const firstMovie = await screen.findByText(/a new hope/i);
  expect(firstMovie).toBeInTheDocument();

  const switcher = firstMovie.closest('.ant-tree-treenode').querySelector('.ant-tree-switcher')
  userEvent.click(switcher);
  
  const luke = await screen.findByText(/luke skywalker/i);
  expect(luke).toBeInTheDocument();
});
