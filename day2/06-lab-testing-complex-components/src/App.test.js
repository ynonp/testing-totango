import { render, screen } from '@testing-library/react';
import App, { TicTacToeBoard } from './App';

const noop = () => false;

test('renders learn react link', () => {
  render(<TicTacToeBoard currentBoard={['x', ':)', null, null]} disableAll={false} onPlayerMove={noop}/>);
  // screen.logTestingPlaygroundURL();

  const btn = screen.getByRole('button', {
    name: /tictactoe button # 1, occupied by: :\)/i
  })
  expect(btn).toBeInTheDocument();
});
