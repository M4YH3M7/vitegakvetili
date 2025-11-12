import { useState } from "react";
import Player from "./components/Player";
import WinnerBanner from "./components/WinnerBanner";

function App() {
  const [player1, setPlayer1] = useState({roll:null,score: 0});
  const [player2, setPlayer2] = useState({roll: null, score:0});
  const [rounds, setRound] = useState(4);
  
  
  
  const gameOverCount = 3;
  const isGameOver = rounds > gameOverCount;

  const currentPlayer = () => {
    if (player1.roll !== null) {
      return 2;
    }

    return 1;
  };

  const winner = () => {
    if (player1.roll === null || player2.roll === null) {
      return null;
    }

    if (player1 > player2) {
      return "Player 1";
    } else if (player2 > player1) {
      return "Player 2";
    } else {
      return "tie";
    }
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer() === 1) {
      setPlayer1((prev)=>({...prev, roll: randomNumber}));
    } else {
      setPlayer2((prev)=>({...prev, roll: randomNumber}));
    }
  };

  const playNextRound = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(rounds + 1);

    if(player1.roll > player2.roll)
      {
        setPlayer1((prev)=>({...prev, score: prev.score + 1}));
      }
      else if(player2.roll > player1.roll)
        {
          setPlayer2((prev)=>({...prev, sore: prev.score + 1}));
        }
  };

  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(1);
  };

  if (isGameOver) {
    console.log(player1.score);
    console.log(player2.score);
    
  
  }
}

export default App;