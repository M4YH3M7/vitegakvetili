import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combination";

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length % 2 === 0 ? "X" : "O";
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  for (const combination of winningCombination) {
    const firstsymbol = GameBoard[combination[0].row]

  }



  function handleSquareSelect(rowIndex, colIndex) {
    
    setGameTurns((prevValue) => {
      let currentPlayer = deriveActivePlayer(prevValue);

      const newTurn = {
        square: { rowIndex, colIndex },
        player: currentPlayer,
      };
      return [newTurn, ...prevValue];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        <GameBoard onSquareSelect={handleSquareSelect} gameTurns={gameTurns} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;