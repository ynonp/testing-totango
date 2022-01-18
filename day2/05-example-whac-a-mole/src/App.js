import { useState, useEffect } from 'react';
import _ from 'lodash';
import './App.css';

/**
 * 1. Refactoring
 * 2. Add more features keeping existing funtionality
 * 3. Feeling safe about our code
 * 4. Validate the logic
 * 5. Test edge cases without using UI
 *
 * 6. Documentation
 *
 * 7. Exloring some new API / external library / existing code
 */


/**
 * Functionality Tests
 * 1. Click on a "right" hole and verify the score updates (+10)
 * 2. Click on a "wrong" hole and verify the score updates (-2)
 * 3. Click on "New Game" and verify score goes back to 0
 * 4. Start a game and verify score starts at 0
 * 5. Pass hole count = 8 and verify we have 8 holes
 *
 * Hard Tests:
 * 7. Verify *at all times* only one mole is present
 * 8. When I start the game a mole is present in a hole
 *
 * API Tests - Exploration
 * 3. Hole count may be negative
 * 4. Hole count is infinity
 * 5. Hole count is 0
 * 6. Hole count is a string / object / array
 *
 * Bug Hunting Tests:
 * 1. Click on the "right" hole and verify score has increased by SOME amount
 */

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
