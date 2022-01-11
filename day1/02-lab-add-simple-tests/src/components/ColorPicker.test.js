import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorPicker from './ColorPicker';

describe('Color Picker', () => {
  it('should change color', () => {
    render(<ColorPicker />);
    const picker = screen.getByLabelText('Choose Color:');
    const resultBox = screen.getByLabelText('selected-color');
    fireEvent.input(picker, { target: { value: '#c9c9c9' } });
    // userEvent.type(picker, '#c9c9c9');
    
    expect(picker).toHaveDisplayValue('#c9c9c9');
    expect(resultBox).toHaveStyle({ background: '#c9c9c9' });
  });
});
