import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length % 2 === 0 ? "X" : "O";
};

function App() {
  const [players, setPlayers] = useState({X:"Player 1 ", P: "Player 2"})
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSetPlayers(stymbol, newName)
  {
    setPlayers((prevPlayers)=>{
      
      [...prevPlayers, [symbol]: newName];

    });
  }

  const gameBoard = [...initialGameBoard.map((row)=>[...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;
    gameBoard[rowIndex][colIndex] = player;
  }

  let winner = null;
  const hasDraw = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
      hasDraw = true;
    }
  }

  const isDraw = gameTurns.lenght === 9 && !winner; 

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
        {(winner || isDraw) && <p>Winner: {winner}</p>}
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
        {/* {ვიძახებთ GameOver კომპონენეტს} */}
        <GameBoard onSquareSelect={handleSquareSelect} gameBoard={gameBoard} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;