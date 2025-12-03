import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleCurrentPlayerChange() {
    setCurrentPlayer((prevValue) => (prevValue === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        <GameBoard
          currentPlayer={currentPlayer}
          onSquareSeelct={handleCurrentPlayerChange}
        />
      </div>
    </main>
  );
}

export default App;