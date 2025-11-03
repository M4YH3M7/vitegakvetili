import {useState} from "react";
import DiceBasic from "./components/DiceGamePlayers";

function App() {
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  cconst [currentPlayer, setCcounterPlayer] = useSate(1);

  let playerRandomNumber = 0;

const rollDice = ()=>
  {
    playerRandomNumber = Math.floor(Math.random() * 6) + 1;

    if(currentPlayer === 1){
      setPlayer2(randomNumber);
      setCcounterPlayer(2) 
   } else 
      {
        setPlayer2(randomNumber); 
        setCurrentPlayer(1);
      }
  
  };


  return (
    <>
      <div 
        style={{
          textAlign:"center",
          padding: "20px",
          margin: 0,
        }}
      >
        <h1>Dice Game</h1>

        <DiceBasic
        title={"player 1"  } dice={player1 - 1} handeClick={rollDice} 
        isDisabled={currentPalyer === 2}/>

        <div>VS</div>

        <DiceBasic 
        title={"player 2"}  dice={player2 - 1} handeClick={rollDice}
        isDisabled={currentPlayer === 1} />

        </div>

    </>
  )
}

export default App