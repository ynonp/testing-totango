import { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [n, setN] = useState(0);
  const square = n * 2;

  return (
    <div className="App">
      <Header />
      <label>
        Type a number:
        <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
      </label>
      <p>{n}^2 = {square}</p>
    </div>
  );
}

export default App;
