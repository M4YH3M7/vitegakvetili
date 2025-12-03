// GameBoard.jsx
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ currentPlayer, onSquareSelect }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareSelect(rowIndex, colIndex) {
    // არ ირეგისტრირებს თუ უკვე სიმბოლო დევს
    if (gameBoard[rowIndex][colIndex]) return;

    setGameBoard((prevValue) => {
      const updatedBoard = prevValue.map((row) => [...row]);
      updatedBoard[rowIndex][colIndex] = currentPlayer;
      return updatedBoard;
    });

    // მშობელს აჩვენე რომ მოიწვიე (შეგიძლია პარამებიც გაუგზავნო)
    onSquareSelect && onSquareSelect(rowIndex, colIndex);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
