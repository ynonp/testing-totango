import { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('');

  return (
    <div>
      <label>Choose Color:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <div
        style={{ display: 'inline-block', width: '200px', height: '200px', background: color, border: '1px solid black' }}
        aria-label="selected-color"
      />
    </div>
  );
}

