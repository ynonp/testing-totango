import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

/**
 * Example: Testing What-A-Mole game
 *
 * 1. Check Props:
 *      - Can pass different values to holesCount to create more/less holes
 *      - Can use default value
 *      - There will always be a mole
 *
 * 2. Check Interactions:
 *      - Can click on the mole hole to get more score
 *      - Can click on an empty hole and lose points
 *      - Can click on "New Game" to start a new game
 *
 * 3. Check side-effects:
 *      - Mole will change hole after some time
 */

function assertHolesCount(screen, n) {
  const allHoles = screen.container.querySelectorAll('.hole');
  expect(allHoles.length).toEqual(n);
}

function getMoleIndex(screen) {
  const allHoles = Array.from(screen.container.querySelectorAll('.hole'));
  return allHoles.findIndex((hole) => hole.classList.contains('mole'));
}

describe('Check Props', () => {
  it('can pass different values to holesCount to create more or less holes', () => {
    const screen = render(<App holesCount={7} />);
    assertHolesCount(screen, 7);
  });

  it('can use default value', () => {
    const screen = render(<App />);
    const defaultValue = App.defaultProps.holesCount;
    assertHolesCount(screen, defaultValue);
  });

  it('there will always be a mole somewhere', () => {
    for (let i=0; i < 100; i++) {
      const screen = render(<App />);
      expect(screen.container.querySelector('.mole')).toBeTruthy();
    }
  });
});

describe('Check interactions', () => {
  it('can click on the mole to get more score', () => {
    const screen = render(<App />);
    const mole = screen.container.querySelector('.mole');
    userEvent.click(mole);
    expect(screen.getByText(/Score: 10/)).toBeInTheDocument();
  });

  it('can click on an empty hole to lose score', () => {
    const screen = render(<App />);
    const emptyHole = screen.container.querySelector('.hole:not(.mole)');
    userEvent.click(emptyHole);
    expect(screen.getByText(/Score: -2/)).toBeInTheDocument();
  });

  it('can click on new game to start a new game', () => {
    const screen = render(<App />);
    const mole = screen.container.querySelector('.mole');
    userEvent.click(mole);

    const newGameButton = screen.getByRole('button', { name: /New Game/ });
    userEvent.click(newGameButton);
    expect(screen.getByText(/Score: 0/)).toBeInTheDocument();
  });
});

describe('Side Effects', () => {
  it('changes a hole after a while', async () => {
    const screen = render(<App />);
    const initialMoleIndex = getMoleIndex(screen);
    expect(initialMoleIndex).toBeGreaterThanOrEqual(0);

    await waitFor(() => {
      const moleIndex = getMoleIndex(screen);
      expect(moleIndex).toBeGreaterThanOrEqual(0);
      expect(moleIndex).not.toEqual(initialMoleIndex);
    }, { timeout: 5000 });
  });
});

