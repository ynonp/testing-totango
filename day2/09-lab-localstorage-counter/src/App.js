import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(c => c +1)}>{count}</button>
    </div>
  );
}

export default App;
