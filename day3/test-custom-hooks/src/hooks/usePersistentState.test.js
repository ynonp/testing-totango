import { render, screen } from '@testing-library/react';
import usePersistentState from './usePersistentState';
import userEvent from '@testing-library/user-event';

function TestComponent(props) {
  const { storageKey, value } = props;
  const [data, setData] = usePersistentState(value, storageKey);
  return <p>{data}</p>
}

function TestComponent2(props) {
  const [data, setData] = usePersistentState(0, 'count');
  return (
    <button onClick={() => setData(v => v + 1)}>{data}</button>
  );
}

describe('usePersistentState', () => {
  it('writes the initial value into localStorage', () => {
    render(<TestComponent value="hello" storageKey="hello" />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('persists', () => {
    render(<TestComponent2 />);
    const btn = screen.getByRole('button', { name: '0' });
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);

    render(<TestComponent2 />);
    const btn = screen.getByRole('button', { name: '1' });
    expect(btn).toBeInTheDocument();
  });
});

