import DiceBasic from "./components/DiceGamePlayers";

function App() {

const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];


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
        title="player 1" 
        dice="⚀" />

        <DiceBasic 
        title="player 2" 
        dice="⚀" />

        </div>

    </>
  )
}

export default App