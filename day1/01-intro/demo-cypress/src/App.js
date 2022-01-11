import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(c => c+1)}>Click</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
