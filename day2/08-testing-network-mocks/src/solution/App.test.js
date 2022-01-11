import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import App from './App';
import films from './fixtures/films.json';
import characters from './fixtures/characters.json';

test('it shows A New Hope', async () => {
  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(films) })
    )

  const screen = render(<App />);

  const firstMovie = await screen.findByText(/a new hope/i);
  expect(fetchMock).toHaveBeenCalledWith(
    'https://swapi.py4e.com/api/films/'
  )
  expect(firstMovie).toBeInTheDocument();
});

test('it shows luke playing in a new hope', async () => {
  jest
    .spyOn(global, 'fetch')
    .mockImplementation((url) => {
      if (url === 'https://swapi.py4e.com/api/films/') {
        return Promise.resolve({ json: () => Promise.resolve(films) })
      } else {
        return Promise.resolve({ json: () => Promise.resolve(characters) });
      }
    });

  const screen = render(<App />);
  const firstMovie = await screen.findByText(/a new hope/i);
  expect(firstMovie).toBeInTheDocument();

  const switcher = firstMovie.closest('.ant-tree-treenode').querySelector('.ant-tree-switcher')
  userEvent.click(switcher);
  
  const lukes = await screen.findAllByText(/luke skywalker/i);
  expect(lukes.length).toBeGreaterThan(0);
});
