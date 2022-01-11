import { useState, useEffect } from 'react';
import _ from 'lodash';
import './App.css';

function App(props) {
  const { holesCount } = props;
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState(_.random(holesCount-1));

  useEffect(function() {
    const timeout = setTimeout(() => {
      setWinner(_.random(holesCount-1));
    }, _.random(5000));

    return () => {
      clearTimeout(timeout);
    };
  }, [winner]);

  function startNewGame() {
    setScore(0);
    setWinner(_.random(holesCount-1));
  }

  function checkMove(id) {
    if (id === winner) {
      setScore(s => s + 10);
    } else {
      setScore(s => s - 2);
    }
    setWinner(_.random(holesCount-1));
  }

  return (
    <div className="App">
      <h1>
        Whac-A-Mole
        <button onClick={() => startNewGame()}>New Game</button>
      </h1>
      <p>Score: {score}</p>
      <p>Click on the mole when you see it coming</p>
      <div className="game">
        {_.range(holesCount).map(id => (
          <div
            key={id}
            className={`hole ${winner === id ? "mole" : ""}`}
            onClick={() => checkMove(id)}
          />
        ))}
      </div>
    </div>
  );
}

App.defaultProps = {
  holesCount: 10,
};

export default App;
