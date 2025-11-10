import { useState } from "react";
import Player from "./components/DiceGamePlayers.jsx";
import WinnerBanner from "./components/WinnerBanner.jsx";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [round, setRound] = useState(null); 
  const [totalRounds, setTotalRounds] = useState(3);
  

  const current = () => {
    if (player1 === null) return 1;
    return 2;
  }

const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (current() === 1) {
      setPlayer1(randomNumber);
    } else {
      setPlayer2(randomNumber);

    }
  };

  const winner = () => {
    if (player2 === null) {
      return null
    }

    if (player1 > player2) {
      return "Player 1 Wins!";
    } else if (player2 > player1) {
      return "Player 2 Wins!";
    } else {
      return "It's a Tie!";
    }
  };

  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(round + 1);
  };

  


return (
    <div
      style=
      {{ 
        alignItems: "center",
        textAlign: "center",
        margin: 0,
        padding: "15px",
        display: "flex",
       
        flexDirection: "column",
      }}
    >

       <h1>2Player Dice Game</h1>
      <h2>Round {round} / {totalRounds}</h2>


      <h1>2Player Dice Game</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center",
          
        }}
      >
        <Player
          title={"Player 1"}
          index={player1}
          handleClick={rollDice}
          isDisabled={current() === 2}
        />

        <div style={{ fontSize: "40px" }}>VS</div>

        <Player
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={current() === 1}
        />
      </div>
      
    {winner() && (
        <WinnerBanner
          winner={winner()}
          onPlayAgain={playAgain}
          rounds={round}
        />
      )}
      {}
    </div>
  );
}

export default App;